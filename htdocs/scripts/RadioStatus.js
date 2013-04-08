var globalRadioStatus=null;
var RadioStateOfInterest = new Array ("volume","repeat","random","single","consume","state","bitrate");
var RadioSateAction      = new Array ("","repeat", "random", "single", "consume", "", "" );
var RadioDataOfInterest  = new Array ( "Artist:","Album:","Title:", "Name:", "Pos:" );

function RadioStatus() {
  globalRadioStatus = this;
  this.createLayout = createLayout;
  this.updateContent = updateContent;
  this.myName = "";
  
  function createLayout( data, containerName ) {
    var response = eval( data );
    this.myName = response.name;
    var cssPrefix="";
    // get the css prefix to be used
    if( response.css ) {
      cssPrefix=response.css.split( "," )[1];
    }      

    var container=$('#'+containerName );
    container.html("");
    
    container.append( "<table id=\""+response.name+"tableCont\" cellpadding=\"5px\" border=\"0\" height=\"100%\"></table>" );

    container = $("#"+response.name+"tableCont" );    
    container.append( "<tr><td height=\"1px\" width=\"20%\"></td><td height=\"1px\" width=\"*\"></td></tr>" );
    container.append( "<tr><td height=\"34px\" colspan=\"2\"><div class=\""+cssPrefix+"_title\">"+response.headline+"</div></td></tr>" );
    container.append( "<tr><td align=\"center\" colspan=\"2\">"+
           "<button class=\""+cssPrefix+"_b2 "+cssPrefix+"_button_1 "+cssPrefix+"_mt\" id=\"mpd_play\">Play</button>"+
           "<button class=\""+cssPrefix+"_b2 "+cssPrefix+"_button_1 "+cssPrefix+"_mt\" id=\"mpd_stop\">Stop</button><br/>"+
           "<button class=\""+cssPrefix+"_b2 "+cssPrefix+"_button_1 "+cssPrefix+"_mt\" id=\"status_refresh\">Refresh</button>"+
           "</td></tr>"+
           "<tr><td valign=\"middle\"><div class=\""+cssPrefix+"_time\">Volume: </div></td><td valign=\"middle\"><input id=\""+response.name+"Volume\" type=\"range\" min=\"0\" max=\"100\" style=\"width:200px;\"/></td></tr>"
    );
    container.append( "<tr><td colspan=\"2\"><div id=\""+response.name+"TimerList\" class=\""+cssPrefix+"_text\">"+
      "</div></td></tr>"
    );
    
    $("."+cssPrefix+"_button_1" ).mouseover(function (event) {
      $(this).css("background-color","#cc6699");
    });
    $("."+cssPrefix+"_button_1" ).mouseout(function () {
         $(this).css("background-color","#cc99cc");
    });
    $("#status_refresh" ).click(function () {
       playSound("images/201.wav");
       mpdCommand( 'currentsong', globalRadioStatus );
    });
    $("#mpd_stop" ).click(function () {
       playSound("images/201.wav");
       mpdCommand( 'stop', globalRadioStatus );
    });
    $("#mpd_play" ).click(function () {
       playSound("images/201.wav");
       mpdCommand( 'play', globalRadioStatus );
    });
    $("#"+response.name+"Volume").mouseup( function () {
       mpdCommand( 'setvol '+ $(this).val(), globalRadioStatus );
    });
    
    this.contentPanel = $("#"+response.name+"TimerList");
    for( var i=0; i<RadioDataOfInterest.length; i++ ) {
      this.contentPanel.append( "<div class=\""+this.cssPrefix+"_data\" id=\"song_"+i+"\">&nbsp;</div>" );
    }
    this.contentPanel.append( "<div>&nbsp;</div>" );
    for( var j=0; j<RadioStateOfInterest.length; j++ ) {
      this.contentPanel.append( "<div class=\""+this.cssPrefix+"_data\" id=\"stat_"+RadioStateOfInterest[j]+"\">"+RadioStateOfInterest[j]+"&nbsp;</div>" );
    }
    
    mpdCommand( 'currentsong', this );
  }
  
  function updateContent(resp)
  {
    if(resp.cmd=="status") {
      //this.contentPanel.append( "<div>&nbsp;</div>" );
      var lines = resp.data.split( "\n" );
      var i,j;
      
      for( i=1; i<lines.length-2; i++ ) {
        for( j=0; j<RadioStateOfInterest.length; j++ ) {
          if( lines[i].indexOf( RadioStateOfInterest[j] )==0 ) {
            var adiv = $( "#stat_"+RadioStateOfInterest[j] );
            adiv.html( lines[i] );
            if( RadioSateAction[j] ) {
              adiv.click( function () { alert( "Klicked "+this.id ); } );
            }
            if( j==0 ) {
              $("#"+this.myName+"Volume").val( lines[i].substr(8) );
            }
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
    
    if(resp.cmd.indexOf( "setvol" )==0 ) {
      mpdCommand( 'currentsong', this );
    }
    
    if(resp.cmd=="currentsong") {
      //this.contentPanel.html("");
      var lines = resp.data.split( "\n" );
      //alert( resp.data )
      var i;
      
      for( i=2; i<5; i++ ) {
        $("#song_"+i).html( "&nbsp;" );
      }
      var k=0;
      for( i=2; i<lines.length-3; i++ ) {
        for( j=0; j<RadioDataOfInterest.length; j++ ) {
          if( lines[i].indexOf( RadioDataOfInterest[j] )==0 ) {
            $("#song_"+k++).html( lines[i].trim() );
            //this.contentPanel.append( "<div class=\""+this.cssPrefix+"_data\" id=\"song_"+i+"\">"+lines[i].trim()+"</div>" );
            break;
          }
        }
      }
      
      mpdCommand( 'status', this );
    }
  }
}
