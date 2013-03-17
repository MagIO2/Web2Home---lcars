function RadioPlaylist() {
  this.createLayout = createLayout;
  this.updateContent = updateContent;
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
    container.append( "<tr><td><div id=\""+response.name+"TimerList\" class=\""+cssPrefix+"_text\">"+
      "</div></td></tr>"
    );
    
    this.contentPanel = $("#"+response.name+"TimerList");
    mpdCommand( 'listplaylist radio2', this );
  }
  
  function updateContent(resp)
  {
    if( resp.cmd=="listplaylist radio2" ) {
      this.contentPanel.html("");
      var lines = resp.data.split( "\n" );
      var i;
      
      for( i=1; i<lines.length-2; i++ ) {
        var cols=lines[i].indexOf("?");
        
        var station = lines[i]
        if( cols>-1 ) { 
          station=lines[i].substring(cols+6);          
        }
        
        this.contentPanel.append( "<div class=\""+this.cssPrefix+"_data\" id=\"station_"+(i-1)+"\">"+(i-1)+".&nbsp;"+station.trim()+"</div>" );
      }

   	  $("."+this.cssPrefix+"_data" ).mouseover(function (event) {
        $(this).css("background-color","#555555");
      });
      $("."+this.cssPrefix+"_data" ).mouseout(function () {
           $(this).css("background-color","#000000");
      });
      $("."+this.cssPrefix+"_data" ).click(function () {
           mpdCommand( "play "+this.id.substring(8), this );
      });
    } else {
    }
  }
}
