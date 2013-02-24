function Layout_002() {
  this.createLayout = createLayout;
  function createLayout( data, container ) {
    var response = eval( data );
    var container=$('#'+container);
    container.html("");
    container.append( "<table width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\">"+
                      "<tr height=\"34px\"><td id=\""+response.name+"ContHead1\" width=\"40%\"></td><td width=\"10px\"></td><td id=\""+response.name+"HL\" colspan=\"3\"></td></tr>"+
                      "<tr height=\"*\"><td id=\""+response.name+"Cont1\" style=\"background-color:#111111\"></td><td width=\"20px\"></td><td id=\""+response.name+"Menu\" width=\"150px\"></td><td width=\"20px\"></td><td id=\""+response.name+"Cont2\" style=\"background-color:#111111\" width=\"*\"></td></tr>"+
                      "<tr height=\"34px\"><td colspan=\"3\">"+
                      "<table width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td width=\"34px\"><img src=\"images/kopf_34_links.png\"/></td><td class=\"trkbg_flieder\" width=\"*\"></td><td width=\"50\"><img src=\"images/round_50x34_ur.png\" /></td></tr></table>"+
                      "</td><td width=\"20px\"></td><td id=\""+response.name+"ContHead2\"></td></tr><tr height=\"5px\"><td></td></tr>"+
                      "</table>" );
                      
    // add the round edges and the headline
    container=$("#"+response.name+"HL");
    var color = "trk_flieder";
    if( response.hlcolor ) {
      color = response.hlcolor;
    }
    container.append("<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" ><tr>"+
      "<td width=\"50px\" height=\"34px\"><img src=\"images/round_50x34_ol.png\"/></td>"+
      "<td width=\"*\" class=\"trkbg_flieder\" height=\"34px\"></td>"+
      "<td width=\"150px\" height=\"34px\" align=\"center\"><div style=\"width:150px; height:34px;\"><font face=\"lcarsgtj3,Arial\" class=\""+color+"\" size=\"6px\">"+response.headline+"</font></div></td>"+
      "<td width=\"34px\" height=\"34px\"><img src=\"images/kopf_34_rechts.png\" /></td></tr></table>");
      
    // add the menu
    container=$("#"+response.name+"Menu");        
    container.append("<table id=\""+response.name+"Entries\" width=\"100%\" height=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td class=\"trkbg_orange\"></td></tr>"+
                     "<tr height=\"4px\"><td height=\"4px\"></td></tr></table>");

    container=$("#"+response.name+"Entries");                
    var mEntries=response.menu.split(",");
    var i;
    for( i=0; i<mEntries.length; i++) {
      container.append( "<tr class=\"trkbg_flieder\"><td id=\"menuSub"+mEntries[i]+"\" class=\"menu_fld\" height=\"33px\" width=\"100%\"><font face=\"lcarsgtj3,Arial\" class=\"trk_black\" size=\"5\">&nbsp;"+mEntries[i]+"</font></td></tr>"+
                        "<tr height=\"4px\"><td height=\"4px\"></td></tr>");
    }
    container.append( "<tr class=\"trkbg_flieder\" height=\"*\"><td width=\"100\">&nbsp;</td></tr><tr height=\"4px\"><td height=\"4px\"></td></tr>");
    
    activateMenu("menu_fld", "#9999cc", "#cc99cc");
  }
}