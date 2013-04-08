function Layout_003() {
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
    container.append( "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr>"+
                        "<td width=\"40%\" height=\"5px\"></td>"+
                        "<td class=\""+cssPrefix+"_tsw\" height=\"5px\"></td>"+
                        "<td class=\""+cssPrefix+"_mw\" height=\"5px\"></td>"+
                        "<td class=\""+cssPrefix+"_tsw\" height=\"5px\"></td>"+
                        "<td width=\"*\" height=\"5px\"></td>"+
                      "</tr><tr>"+
                        "<td class=\""+cssPrefix+"_h2\" id=\""+response.name+"ContHead1_1\" width=\"40%\"></td>"+
                        "<td class=\""+cssPrefix+"_tsw\ "+cssPrefix+"_h2\"></td>"+
                        "<td class=\""+cssPrefix+"_h2\" id=\""+response.name+"ContHead1_2\" colspan=\"3\"></td>"+
                      "</tr><tr>"+
                        "<td class=\""+cssPrefix+"_content\" id=\""+response.name+"Cont1\"></td>"+
                        "<td></td>"+
                        "<td id=\""+response.name+"_menu1\"></td>"+
                        "<td></td>"+
                        "<td class=\""+cssPrefix+"_content2\" id=\""+response.name+"Cont2\" rowspan=\"3\"></td>"+
                      "</tr><tr>"+
                        "<td class=\""+cssPrefix+"_h\" id=\""+response.name+"ContHead2_1\" colspan=\"3\"></td>"+
                        "<td class=\""+cssPrefix+"_h "+cssPrefix+"_tsw\"></td>"+
                      "</tr><tr>"+
                        "<td class=\""+cssPrefix+"_content3\" id=\""+response.name+"Cont3\"></td>"+
                        "<td></td>"+
                        "<td id=\""+response.name+"_menu2\"></td>"+
                        "<td></td>"+
                      "</tr><tr>"+
                        "<td class=\""+cssPrefix+"_h2\" id=\""+response.name+"ContHead3_1\" width=\"40%\"></td>"+
                        "<td class=\""+cssPrefix+"_h2 "+cssPrefix+"_tsw\"></td>"+
                        "<td class=\""+cssPrefix+"_h2\" id=\""+response.name+"ContHead3_2\" colspan=\"3\"></td>"+
                      "</tr></table>" 
    );
    
    addVerticalMenu(response.name+"_menu1", response, response.menu, response.onclick, "", cssPrefix );
    addVerticalMenu(response.name+"_menu2", response, response.menu2, response.onclick2, "2", cssPrefix );
    
    // add the round edges in the top line
    container=$("#"+response.name+"ContHead1_2");
    var color = "trk_flieder";
    if( response.hlcolor ) {
      color = response.hlcolor;
    }
    container.append("<table style=\"table-layout:fixed;\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr>"+
      "<td class=\""+cssPrefix+"_rew "+cssPrefix+"_h2\"><div class=\""+cssPrefix+"_halftround2_l "+cssPrefix+"_b\"/></td>"+
      "<td width=\"*\" class=\""+cssPrefix+"_b "+cssPrefix+"_h2\" colspan=\"2\"></td>"+
      "<td class=\""+cssPrefix+"_w "+cssPrefix+"_h2\"><div class=\""+cssPrefix+"_round2_r "+cssPrefix+"_b\"/></td></tr></table>");
      
    // add the round edges in the middle lines
    container=$("#"+response.name+"ContHead2_1");
    var color = "trk_flieder";
    if( response.hlcolor ) {
      color = response.hlcolor;
    }
    container.append("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"+
      "<tr>"+
        "<td class=\""+cssPrefix+"_w "+cssPrefix+"_h2\"><div class=\""+cssPrefix+"_round2_l "+cssPrefix+"_b\"/></td>"+
        "<td width=\"*\" class=\""+cssPrefix+"_b "+cssPrefix+"_h2\" colspan=\"2\"></td>"+
        "<td class=\""+cssPrefix+"_rew "+cssPrefix+"_h2\"><div class=\""+cssPrefix+"_halfbround2_r "+cssPrefix+"_b\"/></td>"+
      "</tr>"+
      "<tr>"+
        "<td colspan=\"4\" class=\""+cssPrefix+"_sh\"></td>"+
      "</tr>"+
      "<tr>"+
        "<td class=\""+cssPrefix+"_w "+cssPrefix+"_h2\"><div class=\""+cssPrefix+"_round2_l "+cssPrefix+"_b2\"/></td>"+
        "<td width=\"*\" class=\""+cssPrefix+"_b2 "+cssPrefix+"_h2\" colspan=\"2\"></td>"+
        "<td class=\""+cssPrefix+"_rew "+cssPrefix+"_h2\"><div class=\""+cssPrefix+"_halftround2_r "+cssPrefix+"_b2\"/></td>"+
      "</tr>"+
      "</table>");
      
    // add the round edges in the bottom line
    container=$("#"+response.name+"ContHead3_2");
    var color = "trk_flieder";
    if( response.hlcolor ) {
      color = response.hlcolor;
    }
    container.append("<table cellspacing=\"0\" cellpadding=\"0\"><tr>"+
      "<td class=\""+cssPrefix+"_rew "+cssPrefix+"_h2\"><div class=\""+cssPrefix+"_halfbround2_l "+cssPrefix+"_b2\"/></td>"+
      "<td width=\"*\" class=\""+cssPrefix+"_b2 "+cssPrefix+"_h2\" colspan=\"2\"></td>"+
      "<td class=\""+cssPrefix+"_w "+cssPrefix+"_h2\"><div class=\""+cssPrefix+"_round2_r "+cssPrefix+"_b2\"/></td></tr></table>");
  
    // create the content of the 3 panels if available
    if( response.defContent1 ) {
      buildScreen( data+".content"+response.defContent1, response.name+"Cont1" );
    }

    if( response.defContent2 ) {
      buildScreen( data+".content"+response.defContent2, response.name+"Cont2" );
    }

    if( response.defContent3 ) {
      buildScreen( data+".content"+response.defContent3, response.name+"Cont3" );
    }
  }
}