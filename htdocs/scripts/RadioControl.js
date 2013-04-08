var globalRadioControl=null;
function RadioControl() {
  globalRadioControl=this;
  this.createLayout = createLayout;
  this.response = null;
  this.cssPrefix=null;
  this.name = null;
  this.id = null;
  
  function createLayout( data, containerName ) {
    this.response = eval( data );
    this.name = this.response.name;
    this.id = this.response.name;
    if( this.response.id ) this.id = this.response.id;

    // get the css prefix to be used
    if( this.response.css ) {
      this.cssPrefix=this.response.css.split( "," )[1];
    }      

    var container=$('#'+containerName );
    container.html("");

    container.append( "<table id=\""+this.response.id+"tableCont\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" height=\"100%\"></table>" );

    container = $("#"+this.response.id+"tableCont" );    
    container.append( "<tr><td vallign=\"top\" class=\""+this.cssPrefix+"_h\"><div class=\""+this.cssPrefix+"_title\">"+this.response.headline+"</div></td></tr>" );
    container.append( "<tr><td align=\"center\">"+
           "<button class=\""+this.cssPrefix+"_b2 "+this.cssPrefix+"_button_1 "+this.cssPrefix+"_mt\" id=\"mpd_add\">Add</button>"+
           "<button class=\""+this.cssPrefix+"_b2 "+this.cssPrefix+"_button_1 "+this.cssPrefix+"_mt\" id=\"mpd_mod\">Modify</button>"+
           "<button class=\""+this.cssPrefix+"_b2 "+this.cssPrefix+"_button_1 "+this.cssPrefix+"_mt\" id=\"mpd_del\">Delete</button>"+
           "</td></tr>"
    );
    container.append( "<tr><td vallign=\"top\" height=\"*\"><table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">"+
      "<tr><td align=\"right\" width=\"30%\"><p class=\""+this.cssPrefix+"_text\">Playlist position</p></td><td width=\"10px\" align=\"center\">:</td><td><input type=\"text\" size=\"4\" maxlength=\"4\"/></td></tr>"+
      "<tr><td align=\"right\"><p class=\""+this.cssPrefix+"_text\">Station name</p></td><td align=\"center\">:</td><td><input type=\"text\" size=\"16\" maxlength=\"32\"/></td></tr>"+
      "<tr><td align=\"right\"><p class=\""+this.cssPrefix+"_text\">URL</p></td><td align=\"center\">:</td><td><input type=\"text\" size=\"16\" maxlength=\"64\"/></td></tr>"+
      "</table></td></tr>" );

    $("."+this.cssPrefix+"_button_1" ).mouseover(function (event) {
      $(this).css("background-color","#cc6699");
    });
    $("."+this.cssPrefix+"_button_1" ).mouseout(function () {
         $(this).css("background-color","#cc99cc");
    });
    $("#mpd_add" ).click(function () {
       playSound("images/201.wav");
    });
    $("#mpd_mod" ).click(function () {
       playSound("images/201.wav");
    });
    $("#mpd_del" ).click(function () {
       playSound("images/201.wav");
    });
  }
}