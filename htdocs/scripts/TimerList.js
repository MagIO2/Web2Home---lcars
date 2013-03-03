function TimerList() {
  this.createLayout = createLayout;
  function createLayout( data, containerName ) {
    var response = eval( data );
    var cssPrefix="";
    // get the css prefix to be used
    if( response.css ) {
      cssPrefix=response.css.split( "," )[1];
    }      

    var container=$('#'+containerName );
    container.html("");
    
     container.append( "<table id=\""+response.name+"tableCont\" cellpadding=\"5px\" border=\"0\" height=\"100%\"></table>" );

    container = $("#"+response.name+"tableCont" );    
    container.append( "<tr><td height=\"34px\"><div class=\""+cssPrefix+"_title\">"+response.headline+"</div></td></tr>" );
    container.append( "<tr><td><div class=\""+cssPrefix+"_text\">"+
      "&nbsp;0. time: 1810 command: $10000003<br/>"+
      "&nbsp;1. unused<br/>"+
      "&nbsp;2. unused<br/>"+
      "&nbsp;3. unused<br/>"+
      "&nbsp;4. unused<br/>"+
      "&nbsp;5. unused<br/>"+
      "&nbsp;6. unused<br/>"+
      "&nbsp;7. unused<br/>"+
      "&nbsp;8. unused<br/>"+
      "&nbsp;9. unused<br/>"+
      "10. unused<br/>"+
      "11. unused<br/>"+
      "12. unused<br/>"+
      "13. unused<br/>"+
      "14. unused<br/>"+
      "15. unused<br/>"+
      "</div></td></tr>"
    );
    
  }
}