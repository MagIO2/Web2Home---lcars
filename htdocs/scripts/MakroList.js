function MakroList() {
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
      "Found makro memory at 0000C000, length 1081344</td></tr>"+
      "<tr><td><div class=\""+cssPrefix+"_text\">"+
      "0A93384F @00014000 TestMakro<br />"+
      "048315C6 @00014400 AllOff<br />"+
      "0F97877E @00014800 AllLightsOn<br />"+
      "09787736 @00014C00 AllLightsOff<br />"+
      "002A0413 @00015000 WeckLights<br />"+
      "0AC1B075 @00015400 DelTime<br />"+
      "0CD1A556 @00015800 AllButTVOff<br />"+
      "</div></td></tr>"
    );

  }
}