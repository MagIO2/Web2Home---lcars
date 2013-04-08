function Layout_005() {
  this.createLayout = createLayout;
  this.bsString1 = "";
  this.bsString2 = "";
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
                        "<td class=\""+cssPrefix+"_h "+cssPrefix+"_w\"><div class=\""+cssPrefix+"_halftround3_l "+cssPrefix+"_b\"/></td>"+
                        "<td class=\" "+cssPrefix+"_h\"><table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr>"+
                          "<td class=\""+cssPrefix+"_w\"><div class=\""+cssPrefix+"_b "+cssPrefix+"_h2\"/></td>"+
                          "<td></td>"+
                          "<td class=\""+cssPrefix+"_w\"><div class=\""+cssPrefix+"_b "+cssPrefix+"_h2\"/></td>"+
                        "</tr></table></td>"+
                        "<td class=\""+cssPrefix+"_h "+cssPrefix+"_w\"><div class=\""+cssPrefix+"_halftround3_r "+cssPrefix+"_b\"/></td>"+
                      "</tr><tr>"+
                        "<td class=\""+cssPrefix+"_b "+cssPrefix+"_w\" height=\"*\"></td>"+
                        "<td height=\"*\" id=\""+response.name+"Cont\" align=\"center\"></td>"+
                        "<td class=\""+cssPrefix+"_b "+cssPrefix+"_w\" height=\"*\"></td>"+
                      "</tr><tr>"+
                        "<td class=\""+cssPrefix+"_h "+cssPrefix+"_w\"><div class=\""+cssPrefix+"_halfbround3_l "+cssPrefix+"_b\"/></td>"+
                        "<td class=\""+cssPrefix+"_h\"><table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr>"+
                          "<td class=\""+cssPrefix+"_w\"><div class=\""+cssPrefix+"_b "+cssPrefix+"_h2\"/></td>"+
                          "<td><div class=\""+cssPrefix+"_title\">&nbsp;&nbsp;"+response.headline+"</div></td>"+
                          "<td align=\"right\"><div id=\""+response.name+"Refresh\" class=\""+cssPrefix+"_bt\">Refresh&nbsp;&nbsp;</div></td>"+
                          "<td class=\""+cssPrefix+"_w\"><div class=\""+cssPrefix+"_b "+cssPrefix+"_h2\"></div></td>"+
                        "</tr></table></td>"+
                        "<td class=\""+cssPrefix+"_h "+cssPrefix+"_w\"><div class=\""+cssPrefix+"_halfbround3_r "+cssPrefix+"_b\"/></td>"+
                      "</tr></table>" 
    );
    
    this.bsString1 = data+".content"+response.defContent;
    this.bsString2 = response.name+"Cont";
    
    $("#"+response.name+"Refresh").click( function() { alert("Do bin ich!") } );
    
    // create the content of the 3 panels if available
    if( response.defContent ) {
      buildScreen( data+".content"+response.defContent, response.name+"Cont" );
    }
  }
  
  function refresh() {
      alert("Yep");
      buildScreen( this.bsString1, this.bsString2 );
  }
}