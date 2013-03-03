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
    container.append( "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"+
                      "<tr><td width=\"40%\" height=\"5px\"></td><td width=\"10px\" height=\"1px\"></td><td width=\"100px\" height=\"1px\"></td><td width=\"10px\" height=\"1px\"></td><td width=\"*\" height=\"1px\"></td></tr>"+
                      "<tr>"+
                        "<td id=\""+response.name+"ContHead1_1\" width=\"40%\" height=\"16px\"></td>"+
                        "<td width=\"10px\" height=\"16px\"></td>"+
                        "<td id=\""+response.name+"ContHead1_2\" colspan=\"3\" height=\"16px\"></td>"+
                      "</tr><tr>"+
                        "<td id=\""+response.name+"Cont1\"></td><td></td><td id=\""+response.name+"_menu1\"></td><td></td><td id=\""+response.name+"Cont2\" rowspan=\"3\"></td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td id=\""+response.name+"ContHead2_1\" colspan=\"3\" height=\"38px\"></td>"+
                        "<td width=\"10px\" height=\"38px\"></td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td id=\""+response.name+"Cont3\"></td><td></td><td id=\""+response.name+"_menu2\"></td><td></td>"+
                      "</tr>"+
                      "<tr>"+
                        "<td id=\""+response.name+"ContHead3_1\" width=\"40%\" height=\"16px\"></td>"+
                        "<td width=\"10px\" height=\"16px\"></td>"+
                        "<td id=\""+response.name+"ContHead3_2\" colspan=\"3\" height=\"16px\"></td>"+
                      "</tr>"+
                      "</table>" 
                    );
    
    addVerticalMenu(response.name+"_menu1", response, response.menu, response.action, "", cssPrefix );
    addVerticalMenu(response.name+"_menu2", response, response.menu2, response.action2, "2", cssPrefix );
    
    // add the round edges in the top line
    container=$("#"+response.name+"ContHead1_2");
    var color = "trk_flieder";
    if( response.hlcolor ) {
      color = response.hlcolor;
    }
    container.append("<table cellspacing=\"0\" cellpadding=\"0\"><tr>"+
      "<td width=\"50px\" height=\"16px\"><button class=\""+cssPrefix+"_back\" style=\"width:50px; height:16px; border-width:0px; border-top-left-radius:16px;\" /></td>"+
      "<td width=\"*\" class=\""+cssPrefix+"_back\" height=\"16px\" colspan=\"2\"></td>"+
      "<td width=\"34px\" height=\"16px\"><button class=\""+cssPrefix+"_back\" style=\"width:34px; height:16px; border-width:0px; border-top-right-radius:8px; border-bottom-right-radius:8px;\" /></td></tr></table>");
      
    // add the round edges in the middle lines
    container=$("#"+response.name+"ContHead2_1");
    var color = "trk_flieder";
    if( response.hlcolor ) {
      color = response.hlcolor;
    }
    container.append("<table cellspacing=\"0\" cellpadding=\"0\">"+
      "<tr>"+
        "<td width=\"34px\" height=\"16px\"><button class=\""+cssPrefix+"_back\" style=\"width:34px; height:16px; border-width:0px; border-top-left-radius:8px; border-bottom-left-radius:8px;\" /></td>"+
        "<td width=\"*\" class=\""+cssPrefix+"_back\" height=\"16px\" colspan=\"2\"></td>"+
        "<td width=\"50px\" height=\"16px\"><button class=\""+cssPrefix+"_back\" style=\"width:50px; height:16px; border-width:0px; border-bottom-right-radius:16px;\" /></td>"+
      "</tr>"+
      "<tr>"+
        "<td colspan=\"4\" height=\"6px\"></td>"+
      "</tr>"+
      "<tr>"+
        "<td width=\"34px\" height=\"16px\"><button class=\""+cssPrefix+"_back2\" style=\"width:34px; height:16px; border-width:0px; border-top-left-radius:8px; border-bottom-left-radius:8px;\" /></td>"+
        "<td width=\"*\" class=\""+cssPrefix+"_back2\" height=\"16px\" colspan=\"2\"></td>"+
        "<td width=\"50px\" height=\"16px\"><button class=\""+cssPrefix+"_back2\" style=\"width:50px; height:16px; border-width:0px; border-top-right-radius:16px;\" /></td>"+
      "</tr>"+
      "</table>");
      
    // add the round edges in the bottom line
    container=$("#"+response.name+"ContHead3_2");
    var color = "trk_flieder";
    if( response.hlcolor ) {
      color = response.hlcolor;
    }
    container.append("<table cellspacing=\"0\" cellpadding=\"0\"><tr>"+
      "<td width=\"50px\" height=\"16px\"><button class=\""+cssPrefix+"_back2\" style=\"width:50px; height:16px; border-width:0px; border-bottom-left-radius:16px;\" /></td>"+
      "<td width=\"*\" class=\""+cssPrefix+"_back2\" height=\"16px\" colspan=\"2\"></td>"+
      "<td width=\"34px\" height=\"16px\"><button class=\""+cssPrefix+"_back2\" style=\"width:34px; height:16px; border-width:0px; border-top-right-radius:8px; border-bottom-right-radius:8px;\" /></td></tr></table>");
  
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