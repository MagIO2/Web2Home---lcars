function Login_Form() {
  this.createLayout = createLayout;
  function createLayout(data, container) {
    var response = eval( data );
    var container = $('#'+container);
    var cssPrefix="";
    // get the css prefix to be used
    if( response.css ) {
      cssPrefix=response.css.split( "," )[1];
    }      

    container.append( "<table style=\"height:200px\"><tr>"+
      "<td width=\"33%\" align=\"left\"><img src=\"images/TNG_Crew1.png\" /></td>"+
      "<td width=\"33%\" align=\"center\"><img src=\"images/UnitedFederationofPlanets.jpg\" /></td>"+
      "<td width=\"33%\" align=\"right\"><img src=\"images/TNG_Crew2.png\" /></td>"+
      "</tr></table>" 
    );
    container.append( "<center><table style=\"width:300px; height:100px;\">"+
		  "<tr><td valign=\"middle\" align=\"right\"><font face=\"lcarsgtj3,Arial\" class=\"trk_apricot\" size=\"5\">USER</font></td>"+
			"<td width=\"10px\"><font face=\"lcarsgtj3,Arial\" class=\"trk_apricot\" size=\"5\">:</font></td>"+
      "<td valign=\"middle\"><input type=\"text\" /></td></tr>"+
		  "<tr><td valign=\"middle\" align=\"right\"><font face=\"lcarsgtj3,Arial\" class=\"trk_apricot\" size=\"5\">PASSWORD&nbsp;</font></td>"+
			"<td><font face=\"lcarsgtj3,Arial\" class=\"trk_apricot\" size=\"5\">:</font></td>"+
			"<td valign=\"middle\"><input type=\"password\" /></td></tr>"+
			"<tr><td colspan=\"3\" valign=\"middle\" height=\"20px\"></td></tr>"+
			"<tr><td colspan=\"3\" align=\"center\"><button class=\""+cssPrefix+"_menu_back\" style=\"font-family:lcarsgtj3,Arial; font-size:28px; width:100px; height:34px; border-width:0px; border-top-right-radius:17px; border-bottom-right-radius:17px; border-top-left-radius:17px; border-bottom-left-radius:17px;\" onclick=\"getScreen('main');\">Login</button></td></tr>"+
			"</table></center>"
    );
    
    activateMenu( cssPrefix+"_menu_back", "#ff9900", "#f7c64a");
    
  }
}