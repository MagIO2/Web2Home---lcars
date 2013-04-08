var MakroNames = new Array();
var MakroHash = new Array();

function MakroList() {
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
    propCommand('mkrlist', this );
  }

  function updateContent(resp)
  {
    if( resp.cmd=="mkrlist" ) {
      MakroNames = new Array();
      MakroHash = new Array();
      this.contentPanel1.html( "" );
      this.contentPanel2.html( "" );
      
      this.makroNames = new Array();
      this.makroHash = new Array();
      
      var lines = resp.data.split( "\r" );
      this.contentPanel1.append( lines[2] );
      var i;
      for( i=3; i<lines.length-4; i++ ) {
        var cols = lines[ i ].split( " " );
        var entry = "<div class=\""+this.cssPrefix+"_data\" id=\"MkrListRow_"+(i-3)+"\">"+
                    cols[0]+"&nbsp;&nbsp;"+
                    cols[1]+"&nbsp;&nbsp;"+
                    cols[2]+"</div>";
        this.contentPanel2.append( entry );
        MakroNames[ i-3 ] = cols[2];
        MakroHash[ i-3 ] = cols[0];
      }
   	  $("."+this.cssPrefix+"_data" ).mouseover(function (event) {
        $(this).css("background-color","#555555");
      });
      $("."+this.cssPrefix+"_data" ).mouseout(function () {
           $(this).css("background-color","#000000");
      });
      $("."+this.cssPrefix+"_data" ).click(function () {
           propCommand( "run "+MakroNames[this.id.substring(11)], this );
      });
    }
  }
}