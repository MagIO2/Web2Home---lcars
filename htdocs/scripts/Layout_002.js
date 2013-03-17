function Layout_002() {
  this.createLayout = createLayout;
  function createLayout( data, container ) {
    var response = eval( data );
    var cssPrefix="";
    // get the css prefix to be used
    if( response.css ) {
      cssPrefix=response.css.split( "," )[1];
    }      

    var container=$('#'+container);
    container.html("");
    container.append( "<table cellspacing=\"0\" cellpadding=\"0\">"+
                      "<tr><td width=\"40%\" height=\"1px\"></td><td width=\"10px\" height=\"1px\"></td><td width=\"100px\" height=\"1px\"></td><td width=\"10px\" height=\"1px\"></td><td width=\"*\" height=\"1px\"></td></tr>"+
                      "<tr>"+
                        "<td id=\""+response.name+"ContHead1\" width=\"40%\" height=\"34px\"></td>"+
                        "<td width=\"10px\" height=\"34px\"></td>"+
                        "<td id=\""+response.name+"HL\" colspan=\"3\" height=\"34px\"></td>"+
                      "</tr><tr>"+
                        "<td id=\""+response.name+"Cont1\" class=\""+cssPrefix+"_content\" height=\"*\"></td>"+
                        "<td width=\"10px\" height=\"*\"></td>"+
                        "<td id=\""+response.name+"Menu\" width=\"100px\" height=\"*\"></td>"+
                        "<td width=\"10px\" height=\"*\"></td>"+
                        "<td id=\""+response.name+"Cont2\" class=\""+cssPrefix+"_content2\" width=\"*\" height=\"*\"></td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td colspan=\"3\" height=\"16px\">"+
                          "<table cellspacing=\"0\" cellpadding=\"0\"><tr>"+
                            "<td width=\"34px\"><button class=\""+cssPrefix+"_back\" style=\"width:34px; height:16px; border-width:0px; border-top-left-radius:8px; border-bottom-left-radius:8px;\" />"+
                            "</td><td width=\"4px\"></td><td class=\""+cssPrefix+"_back\" width=\"*\"></td><td width=\"50px\">"+
                            "<button class=\""+cssPrefix+"_back\" style=\"width:50px; height:16px; border-width:0px; border-bottom-right-radius:16px;\" /></td></tr></table>"+
                        "</td>"+
                        "<td width=\"10px\" height=\"16px\"></td>"+
                        "<td id=\""+response.name+"ContHead2\" height=\"16px\"></td>"+
                      "</tr>"+
                      "<tr><td colspan=\"5\" height=\"4px\"></td></tr>"+
                      "</table>" 
                    );
                      
    // add the round edges and the headline
    container=$("#"+response.name+"HL");
    var color = "trk_flieder";
    if( response.hlcolor ) {
      color = response.hlcolor;
    }
    container.append("<table cellspacing=\"0\" cellpadding=\"0\"><tr>"+
      "<td width=\"50px\" height=\"34px\"><button class=\""+cssPrefix+"_back\" style=\"width:50px; height:34px; border-width:0px; border-top-left-radius:34px;\" /></td>"+
      "<td width=\"*\" class=\""+cssPrefix+"_back\" height=\"34px\"></td>"+
      "<td width=\"150px\" height=\"34px\" align=\"center\"><div class=\""+cssPrefix+"_title\">"+response.headline+"</div></td>"+
      "<td width=\"34px\" height=\"34px\"><button class=\""+cssPrefix+"_back\" style=\"width:34px; height:34px; border-width:0px; border-top-right-radius:17px; border-bottom-right-radius:17px;\" /></td></tr></table>");
      
    // add the menu
    container=$("#"+response.name+"Menu");        
    container.append("<table cellspacing=\"0\" cellpadding=\"0\" id=\""+response.name+"Entries\">"+
                     "<tr class=\""+cssPrefix+"_back\"><td height=\"34px\"></td></tr>"+
                     "<tr><td height=\"4px\"></td></tr></table>");

    container=$("#"+response.name+"Entries");                
    var mEntries=response.menu.split(",");
    var cEntries;
    if( response.onclick ) {
      cEntries=response.onclick.split("/");
    }

    var i;
    for( i=0; i<mEntries.length; i++) {
      container.append( "<tr><td id=\"menuSub"+mEntries[i]+"\" class=\""+cssPrefix+"_menu_back\" height=\"34px\" valign=\"bottom\"><div class=\""+cssPrefix+"_menu_text\" style=\"height:34px;\">&nbsp;"+mEntries[i]+"</div></td></tr>"+
                        "<tr><td height=\"4px\"></td></tr>");
      if( cEntries && cEntries[i] ) {
        menuScripts[ "menuSub"+mEntries[i] ]=cEntries[i];
      }
    }
    container.append( "<tr class=\""+cssPrefix+"_back\" height=\"*\"><td width=\"100\">&nbsp;</td></tr>");
    
    activateMenu(cssPrefix+"_menu_back", "#cc99cc", "#9999cc");
    
    if( response.defContent1 ) {
      buildScreen( data+".content"+response.defContent1, response.name+"Cont1" );
    }

    if( response.defContent2 ) {
      buildScreen( data+".content"+response.defContent2, response.name+"Cont2" );
    }
  }
}