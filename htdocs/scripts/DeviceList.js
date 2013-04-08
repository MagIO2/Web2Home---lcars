var globalDeviceList=null;
var DeviceNames = new Array();
var DeviceState = new Array();

function DeviceList() {
  globalDeviceList = this;
  this.createLayout = createLayout;
  this.updateContent = updateContent;
  this.cssPrefix="";

  function createLayout( data, containerName ) {
    var response = eval( data );
    // get the css prefix to be used
    if( response.css ) {
      this.cssPrefix=response.css.split( "," )[1];
    }      

    var container=$('#'+containerName );
    container.html("");
    
     container.append( "<table id=\""+response.name+"tableCont\" cellpadding=\"5px\" border=\"0\" height=\"100%\"></table>" );

    container = $("#"+response.name+"tableCont" );
    
    container.append( "<tr><td height=\"34px\"><div class=\""+this.cssPrefix+"_title\">"+response.headline+"</div></td></tr>" );
    container.append( "<tr><td><div id=\""+response.name+"ListHead\" class=\""+this.cssPrefix+"_text\">"+
      "</div></td></tr>"+
      "<tr><td><div id=\""+response.name+"ListTail\"  style=\"font-family:Courier New; font-size:18px;\" class=\""+this.cssPrefix+"_text\">"+
      "</div></td></tr>"
    );

    this.contentPanel1 = $( "#"+response.name+"ListHead" );
    this.contentPanel2 = $( "#"+response.name+"ListTail" );
    propCommand('pwrlist', this );
  }

  function updateContent(resp)
  {
    if( resp.cmd=="pwrlist" ) {
      DeviceNames = new Array();
      DeviceState = new Array();
      
      this.contentPanel1.html( "" );
      this.contentPanel2.html( "" );
      
      this.makroNames = new Array();
      this.makroHash = new Array();
      
      var lines = resp.data.split( "\r" );
      this.contentPanel1.append( lines[2] );
      var i;
      for( i=3; i<lines.length-4; i++ ) {
        lines[ i ] = lines[i].substr(0,23).trim() + lines[i].substr(22);
        var cols = lines[ i ].split( " " );
        var dataClass = this.cssPrefix+"_data";
        if( cols[5] == "On" ) dataClass=dataClass+"On";
        if( cols[5] == "Off" ) dataClass=dataClass+"Off";
        
        var entry = "<div class=\""+dataClass+"\" id=\"DvcListRow_"+(i-3)+"\">"+
                    cols[ 0 ]+"&nbsp;"+
                    cols[ 2 ]+"&nbsp;"+
                    cols[ 3 ]+"&nbsp;"+
                    cols[ 1 ]+"&nbsp;"+
                    "</div>";
        this.contentPanel2.append( entry );
        DeviceNames[ i-3 ] = cols[1];
        
        DeviceState[ i-3 ] = -1;
        if( cols[5] == "On" ) DeviceState[ i-3 ] = 1;
        if( cols[5] == "Off" ) DeviceState[ i-3 ] = 0;
      }
   	  $("."+this.cssPrefix+"_data" ).mouseover(function (event) {
        $(this).css("background-color","#555555");
      });
      $("."+this.cssPrefix+"_data" ).mouseout(function () {
           $(this).css("background-color","#000000");
      });
   	  $("."+this.cssPrefix+"_dataOn" ).mouseover(function (event) {
        $(this).css("background-color","#555555");
      });
      $("."+this.cssPrefix+"_dataOn" ).mouseout(function () {
           $(this).css("background-color","#000000");
      });
   	  $("."+this.cssPrefix+"_dataOff" ).mouseover(function (event) {
        $(this).css("background-color","#555555");
      });
      $("."+this.cssPrefix+"_dataOff" ).mouseout(function () {
           $(this).css("background-color","#000000");
      });
      $("."+this.cssPrefix+"_data" ).click(function () {
           propCommand('pwr 0 '+DeviceNames[this.id.substring(11)], globalDeviceList );
      });
      $("."+this.cssPrefix+"_dataOn" ).click(function () {
           propCommand('pwr 0 '+DeviceNames[this.id.substring(11)], globalDeviceList );
      });
      $("."+this.cssPrefix+"_dataOff" ).click(function () {
           propCommand('pwr 1 '+DeviceNames[this.id.substring(11)], globalDeviceList );
      });
    }

    if( resp.cmd.substr(0,4)=="pwr " ) {
      propCommand('pwrlist', this );
    }
  }
}