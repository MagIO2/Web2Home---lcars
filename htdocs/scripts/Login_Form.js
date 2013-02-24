function Login_Form() {
  this.createLayout = createLayout;
  function createLayout(data, container) {
    var container = $('#'+container);
    container.append( "<table width=\"100%\" border=\"0\"><tr>"+
      "<td width=\"33%\" align=\"left\"><img src=\"images/TNG_Crew1.png\" /></td>"+
      "<td width=\"33%\" align=\"center\"><img src=\"images/UnitedFederationofPlanets.jpg\" /></td>"+
      "<td width=\"33%\" align=\"right\"><img src=\"images/TNG_Crew2.png\" /></td>"+
      "</tr></table>" 
    );
    container.append( "<center><table border=\"0\">"+
		  "<tr><td valign=\"middle\"><font face=\"lcarsgtj3,Arial\" class=\"trk_apricot\" size=\"5\">USER</font></td>"+
			"<td><font face=\"lcarsgtj3,Arial\" class=\"trk_apricot\" size=\"5\">:</font></td>"+
      "<td valign=\"middle\"><input type=\"text\" /></td></tr>"+
		  "<tr><td valign=\"middle\"><font face=\"lcarsgtj3,Arial\" class=\"trk_apricot\" size=\"5\">PASSWORD&nbsp;</font></td>"+
			"<td><font face=\"lcarsgtj3,Arial\" class=\"trk_apricot\" size=\"5\">:</font></td>"+
			"<td valign=\"middle\"><input type=\"password\" /></td></tr>"+
			"<tr><td colspan=\"3\" align=\"center\"><input type=\"image\" src=\"images/login.png\" onclick=\"getScreen('main');\"/></td></tr>"+
			"</table></center>"
    );
  }
}