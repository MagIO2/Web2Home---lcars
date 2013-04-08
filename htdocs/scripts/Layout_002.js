/*
 * Layout1 contains a top-line with a headline, an optional line showing the time/date, a content-area and a bottom-line which might include a menu
 * Needed/possible settings:
 *   css: 'css-filename,css-prefix'        => this defines which CSS-file has to be loaded and the prefix which is used in that file for all CSS definitions
 *   name: xxx                             => the name is needed to make everythin unique in case the layout is used twice in a screen
 *
 * Accessible elements (name has to be replaced with the string given as name-setting):
 */
function Layout_002() {
  this.createLayout = createLayout;
  this.updateLayout = updateLayout;
  this.response = null;
  this.cssPrefix = null;
  this.name = null;
  this.id = null;
  
  function updateLayout( what ) {
    var i;
    for(i=1; i<what.length; i++) {
      try {
        eval( "update"+what[i]+"();" );
      } catch( error ) {
        alert( "Wrong setup? Tried to call update"+what[i]+"();" );
      }
    }
  }
    
  function createLayout( data, container ) {
    this.response = eval( data );
    this.name = this.response.name;
    this.id = this.response.name;
    if( this.response.id ) this.id = this.response.id;
    
    // get the css prefix to be used
    if( this.response.css ) {
      this.cssPrefix=this.response.css.split( "," )[1];
    }      

    var container=$('#'+container);
    container.html("");
    container.append( "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"+
                      // this one defines the column width of each single column (without this, the table would look different)
                      "<tr>"+
                        "<td width=\"40%\" height=\"1px\"></td>"+
                        "<td class=\""+this.cssPrefix+"_tsw\" height=\"1px\"></td>"+
                        "<td class=\""+this.cssPrefix+"_mw\" height=\"1px\"></td>"+
                        "<td class=\""+this.cssPrefix+"_tsw\" height=\"1px\"></td>"+
                        "<td width=\"*\" height=\"1px\"></td>"+
                      "</tr><tr>"+
                        "<td id=\""+this.response.name+"Cont1\" class=\""+this.cssPrefix+"_content\" height=\"*\" rowspan=\"2\"></td>"+
//                        "<td class=\""+this.cssPrefix+"_h\" id=\""+this.response.name+"ContHead1\" width=\"40%\"></td>"+
                        "<td class=\""+this.cssPrefix+"_tsw "+this.cssPrefix+"_h\"></td>"+
                        "<td id=\""+this.response.name+"HL\" colspan=\"3\" class=\""+this.cssPrefix+"_h\"></td>"+
                      "</tr><tr>"+
//                        "<td id=\""+this.response.name+"Cont1\" class=\""+this.cssPrefix+"_content\" height=\"*\"></td>"+
                        "<td class=\""+this.cssPrefix+"_tsw\" height=\"*\"></td>"+
                        "<td id=\""+this.response.name+"Menu\" class=\""+this.cssPrefix+"_mw\" height=\"*\"></td>"+
                        "<td class=\""+this.cssPrefix+"_tsw\" height=\"*\"></td>"+
                        "<td id=\""+this.response.name+"Cont2\" class=\""+this.cssPrefix+"_content2\" width=\"*\" height=\"*\"></td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td colspan=\"3\" class=\""+this.cssPrefix+"_h2\">"+
                          "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr>"+
                            "<td class=\""+this.cssPrefix+"_w "+this.cssPrefix+"_h2\"><div class=\""+this.cssPrefix+"_round2_l\"/></td>"+
                            "<td class=\""+this.cssPrefix+"_sw "+this.cssPrefix+"_h2\"></td>"+
                            "<td class=\""+this.cssPrefix+"_b "+this.cssPrefix+"_h2\" width=\"*\"></td>"+
                            "<td class=\""+this.cssPrefix+"_h2 "+this.cssPrefix+"_rew\"><div class=\""+this.cssPrefix+"_halfbround_r\"/></td>"+
                          "</tr></table>"+
                        "</td>"+
                        "<td class=\""+this.cssPrefix+"_h2 "+this.cssPrefix+"_tsw\"></td>"+
                        "<td id=\""+this.response.name+"ContHead2\" height=\"16px\"></td>"+
                      "</tr>"+
                      "<tr><td class=\""+this.cssPrefix+"_sh\" colspan=\"5\"></td></tr>"+
                      "</table>" 
                    );
                      
    // add the round edges and the headline
    container=$("#"+this.response.name+"HL");
    var color = "trk_flieder";
    if( this.response.hlcolor ) {
      color = this.response.hlcolor;
    }
    container.append("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr>"+
      "<td class=\""+this.cssPrefix+"_h "+this.cssPrefix+"_rew\"><div class=\""+this.cssPrefix+"_halftround_l\" /></td>"+
      "<td width=\"*\" class=\""+this.cssPrefix+"_b "+this.cssPrefix+"_h\"></td>"+
      "<td width=\"150px\" class=\""+this.cssPrefix+"_h\" align=\"center\"><div class=\""+this.cssPrefix+"_title "+this.cssPrefix+"_h\">"+this.response.headline+"</div></td>"+
      "<td class=\""+this.cssPrefix+"_w "+this.cssPrefix+"_h\"><div class=\""+this.cssPrefix+"_round_r\"/></td></tr></table>");
      
    // add the menu
    container=$("#"+this.response.name+"Menu");        
    container.append("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" id=\""+this.response.name+"Entries\">"+
                     "<tr class=\""+this.cssPrefix+"_b "+this.cssPrefix+"_h\"><td class=\""+this.cssPrefix+"_h\"></td></tr>"+
                     "<tr><td class=\""+this.cssPrefix+"_sh\"></td></tr></table>");

    container=$("#"+this.response.name+"Entries");                
    var mEntries=this.response.menu.split(",");
    var cEntries;
    if( this.response.onclick ) {
      cEntries=this.response.onclick.split("/");
    }

    var i;
    for( i=0; i<mEntries.length; i++) {
      container.append( "<tr><td id=\""+this.id+"_menu_"+mEntries[i]+"\" class=\""+this.id+"_actmenu "+this.cssPrefix+"_b "+this.cssPrefix+"_h "+this.cssPrefix+"_mw\">"+
          "<div class=\""+this.cssPrefix+"_mt\" >&nbsp;"+mEntries[i]+"</div></td></tr>"+
          "<tr><td class=\""+this.cssPrefix+"_sh\"></td></tr>");
      if( cEntries && cEntries[i] ) {
        menuScripts[ this.response.name+"_menu_"+mEntries[i] ]=cEntries[i];
      }
    }
    container.append( "<tr class=\""+this.cssPrefix+"_b\" height=\"*\"><td ></td></tr>");
    
    // todo: no hardcoded colors
    activateMenu( this.id+"_actmenu", "#cc99cc", "#9999cc");
    
    if( this.response.defContent1 ) {
      buildScreen( data+".content"+this.response.defContent1, this.response.name+"Cont1" );
    }

    if( this.response.defContent2 ) {
      buildScreen( data+".content"+this.response.defContent2, this.response.name+"Cont2" );
    }
  }
  
  function updateContent1() {
    alert("updateContent1");
  }
  
  function updateContent2() {
    alert("updateContent2");
  }
  
  function updateMenu() {
    alert("updateMenu");
  }
}