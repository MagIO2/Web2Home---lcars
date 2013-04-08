function Layout_004() {
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
    container.append( "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\"><tr>"+
                        "<td class=\""+cssPrefix+"_sh\"></td>"+
                      "</tr><tr>"+
                        "<td class=\""+cssPrefix+"_content\" id=\""+response.name+"Cont1\" height=\"50%\">n</td>"+
                      "</tr><tr>"+
                        "<td class=\""+cssPrefix+"_sh\"></td>"+
                      "</tr><tr>"+
                        "<td class=\""+cssPrefix+"_content2\" id=\""+response.name+"Cont2\" height=\"50%\"></td>"+
                      "</tr><tr>"+
                        "<td class=\""+cssPrefix+"_sh\"></td>"+
                      "</tr></table>" 
    );
      
    // create the content of the 3 panels if available
    if( response.defContent1 ) {
      buildScreen( data+".content"+response.defContent1, response.name+"Cont1" );
    }

    if( response.defContent2 ) {
      buildScreen( data+".content"+response.defContent2, response.name+"Cont2" );
    }
  }
}