function CamIframe() {
  this.createLayout = createLayout;
  function createLayout( data, containerName ) {
    var response = eval( data );

    var container=$('#'+containerName );
    container.html("");
    
    var width = container.width();
    var height = container.height();
    
    var ratio = width/height;
    if( ratio<(4/3) ) {
      height = width * (3/4);
    }
    if( ratio>(4/3) ) {
      width = height * (4/3);
    }

    if( response.width ) width=response.width;
    if( response.height ) height=response.height;
        
    //container.append( "<iframe src=\""+response.source+"\" width=\"90%\" height=\"98%\" scrolling=\"no\" align=\"center\"></iframe>" );
    // somehow the browser simply uses a cached image (empty) if switching from another screen back to this one. So, the d.getMilli... shall avoid this.
    var d = new Date();
    container.append( "<img class=\"decoded\" width=\""+width+"\" height=\""+height+"\" src=\""+response.source+"?"+d.getMilliseconds()+"\" alt=\"Die Grafik http://"+response.source+"/ kann nicht angezeigt werden, weil sie Fehler enthält.\" style=\"cursor: -moz-zoom-in\">" );
  }
}
