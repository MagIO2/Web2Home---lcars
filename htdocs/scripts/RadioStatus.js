var globalRadioStatus=null;
var RadioStateOfInterest = new Array ("volume:","repeat:","random:","single:","consume:","state:","bitrate:");
var RadioSateAction      = new Array ("","repeat", "random", "single", "consume", "", "" );

function RadioStatus() {
  globalRadioStatus = this;
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
    container.append( "<tr><td align=\"center\">"+
           "<button class=\""+cssPrefix+"_button\" id=\"status_refresh\" style=\"font-family:lcarsgtj3,Arial; font-size:28px; width:100px; height:34px; border-width:0px; margin:5px; border-top-right-radius:17px; border-bottom-right-radius:17px; border-top-left-radius:17px; border-bottom-left-radius:17px;\">Refresh</button>"+
           "</td></tr>" );
    container.append( "<tr><td><div id=\""+response.name+"TimerList\" class=\""+cssPrefix+"_text\">"+
      "</div></td></tr>"
    );
    
    $("."+cssPrefix+"_button" ).mouseover(function (event) {
      $(this).css("background-color","#cc6699");
    });
    $("."+cssPrefix+"_button" ).mouseout(function () {
         $(this).css("background-color","#cc99cc");
    });
    $("#status_refresh" ).click(function () {
       mpdCommand( 'currentsong', globalRadioStatus );
    });
    
    this.contentPanel = $("#"+response.name+"TimerList");
    mpdCommand( 'currentsong', this );
  }
  
  function updateContent(resp)
  {
    if(resp.cmd=="status") {
      this.contentPanel.append( "<div>&nbsp;</div>" );
      var lines = resp.data.split( "\n" );
      var i;
      
      for( i=1; i<lines.length-2; i++ ) {
        for( j=0; j<RadioStateOfInterest.length; j++ ) {
          if( lines[i].indexOf( RadioStateOfInterest[j] )==0 ) {
            this.contentPanel.append( "<div class=\""+this.cssPrefix+"_data\" id=\"stat_"+RadioStateOfInterest[j]+"\">"+lines[i].trim()+"</div>" );
            break;
          }
        }
      }
      
   	  $("."+this.cssPrefix+"_data" ).mouseover(function (event) {
        $(this).css("background-color","#555555");
      });
      $("."+this.cssPrefix+"_data" ).mouseout(function () {
           $(this).css("background-color","#000000");
      });
    }
    
    if(resp.cmd=="currentsong") {
      this.contentPanel.html("");
      var lines = resp.data.split( "\n" );
      var i;
      
      for( i=2; i<lines.length-3; i++ ) {
        this.contentPanel.append( "<div class=\""+this.cssPrefix+"_data\" id=\"song_"+i+"\">"+lines[i].trim()+"</div>" );
      }
      
      mpdCommand( 'status', this );
    }
  }
}
