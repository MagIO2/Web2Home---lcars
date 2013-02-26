function Layout_001() {
  this.createLayout = createLayout;
  function createLayout( data, container ) {
    var response = eval( data );
    var cssPrefix="";
    // get the css prefix to be used
    if( response.css ) {
      cssPrefix=response.css.split( "," )[1];
    }      
    /*
     * Layout1 contains a top-line containing a headline, an optional line showing the time/date, a content-area and a bottom-line with a menu
     */
    var table=$('#'+container);
    table.html("");

    table.append("<table id=\""+response.name+
                 "Table\" width=\"100%\" height=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">"+
                 "<tr id=\""+response.name+"Row1\"></tr></table>");
    table=$('#'+response.name+"Table");

    var row=$('#'+response.name+'Row1');
    row.html("");
    row.append("<td width=\"34px\" height=\"33px\"><img src=\"images/kopf_34_links_orange.png\"/></td>");
    var wdth=response.hlwidth;
    if( !wdth ) { wdth="150px"; }
    row.append("<td width=\""+wdth+"\" align=\"center\" height=\"34px\">"+
               "<div class=\""+cssPrefix+"_title\">"+response.headline+"</div></td>");
    //           "<font face=\"lcarsgtj3,Arial\" class=\""+cssPrefix+"_title\" size=\"6\">"+response.headline+"</font></div></td>");
    row.append("<td class=\"trkbg_hellorange\" width=\"*\" height=\"34px\">&nbsp;</td>");
    row.append("<td class=\"trkbg_hellorange\" width=\"*\" height=\"34px\">&nbsp;</td>");
    row.append("<td width=\"4px\" height=\"34px\">&nbsp;</td>");
    row.append("<td width=\"34px\" height=\"34px\"><img src=\"images/kopf_34_rechts_orange.png\"/></td>");

    if( response.timeline && response.timeline=='true') {
      table.append("<tr id=\""+response.name+"Row2\"></tr>");
      var row=$('#'+response.name+'Row2');
      row.append("<td id=\""+response.name+"Status\" colspan=\"3\"></td><td height=\"21px\" align=\"right\" colspan=\"3\">"+
                 "<font face=\"lcarsgtj3,Arial\" class=\"trk_leuchtblau\" size=\"5\">"+
                 "<div atyle=\"align:right;\" id=\""+response.name+"Time\"></div>"+
                 "</font></td>");
      startTimer( response.name+"Time" );
    }

    table.append("<tr id=\""+response.name+"Row3\"><td id=\""+response.name+"Content\" colspan=\"6\" width=\"*\" height=\"*\">&nbsp;</td></tr>");

    if( response.menu ) {
      table.append("<tr id=\""+response.name+"Row4\"><tr>");
      var row=$('#'+response.name+'Row4');
      row.append("<td id=\""+response.name+"Menu\" colspan=\"6\" height=\"33px\"></td>");
      addMenuEntries( response.name, response.menu, response.onclick, cssPrefix );
    }

    if( response.defContent ) {
      buildScreen( "jsonResponse.content"+response.defContent, response.name+"Content" );
    }
  }
}

  function addMenuEntries( container, menuentries, clickentries, prefix ) {
    var mEntries=menuentries.split(",");
    var cEntries=clickentries.split("/");
    
    var mCont=$("#"+container+"Menu");
    mCont.html("");
    mCont.append( "<table cellspacing=\"4px\" cellpadding=\"0\" width=\"100%\" border=\"0\"><tr id=\""+container+"MenuRow\"></tr></table>" );
    
    var mRow=$('#'+container+"MenuRow");
    mRow.append("<td width=\"34px\" height=\"33px\"><img src=\"images/kopf_34_links_orange.png\"/></td>");
    var i;
    for( i=0; i<mEntries.length; i++) {
      mRow.append( "<td id=\"menu"+mEntries[i]+"\" class=\""+prefix+"_menu_back\" height=\"33px\" width=\"120\"><font face=\"lcarsgtj3,Arial\" class=\"trk_black\" size=\"5\">&nbsp;"+mEntries[i]+"</font></td>" );
      menuScripts[ "menu"+mEntries[i] ]=cEntries[i];
    }
    mRow.append( "<td class=\""+prefix+"_menu_back\" height=\"33px\" width=\"*\"></td>" );
    mRow.append( "<td width=\"34px\"><img src=\"images/kopf_34_rechts_orange.png\"/></td>" );
    
    activateMenu( prefix+"_menu_back", "#ff9900", "#f7c64a");
  }

  function startTimer( container ) {
  $("#"+container).html( "&#8226; "+getDatum()+" &#8226; <span id='clockContainer' style='position:relative'>"+updateTime()+"</span> &#8226; Sternzeit "+getSternzeit()+" &#8226;" );
  clockon();
}

function fourdigits(number) { 
  return (number < 1000) ? number + 1900 : number; 
} 

function printDatum() {
  document.write( getDatum() );
}

function getDatum() {
  var now = new Date(); 
  var days = new Array('SONNTAG','MONTAG','DIENSTAG','MITTWOCH','DONNERSTAG','FREITAG','SAMSTAG'); 
  var months = new Array('JANUAR','FEBRUAR','MÄRZ','APRIL','MAI','JUNI','JULI','AUGUST','SEPTEMBER','OKTOBER','NOVEMBER','DEZEMBER'); 
  var date = ((now.getDate()<10) ? "0" : "")+ now.getDate(); 
 
  today =  days[now.getDay()] + ", " + date + "." +
           months[now.getMonth()] + " " + 
           " " + 
           (fourdigits(now.getYear())) ; 
 
  return("" +today+ ""); 
}

var thistime= ""; 
var hours= ""; 
var minutes= ""; 
var seconds= ""; 
var thistime = "";
var timer = null; 

function updateTime() {
  thistime= new Date(); 
  hours=thistime.getHours(); 
  minutes=thistime.getMinutes(); 
  seconds=thistime.getSeconds(); 
  if (eval(hours) <10) {hours="0"+hours;} 
  if (eval(minutes) < 10) {minutes="0"+minutes;} 
  if (seconds < 10) {seconds="0"+seconds;} 
  thistime = hours+":"+minutes+":"+seconds;
  return( thistime );  
}

function clockon() {
  updateTime(); 
  if (document.getElementById) { 
    document.getElementById("clockContainer").innerHTML=thistime 
  }
  timer=setTimeout("clockon()",1000) 
} 

function printZeit() {
  updateTime();
  document.write("<span id='clockContainer' style='position:relative'>"+thistime+"</span>");
  timer=setTimeout("clockon()",1000) 
}

function printSternzeit() {
  document.write( getSternzeit() );
}

function getSternzeit() {
  var Now = new Date()
  var NowTime = Now.getTime()/1000
  //var Day = Now.getDate()
  //var Month = Now.getMonth()+1
  var Year = Now.getYear();
  if (Year < 2000) Year = Year + 1900
  if (Year<1000) { YearDif=Math.abs(Year-87) }
  if (Year>1000) { YearDif=Math.abs(Year-1987) }
  SDYear=40000+(YearDif*1000)
  YearStart = new Date(Year,0,1,0,0,0)
  var YearStartTime= YearStart.getTime()/1000
  Days=(NowTime-YearStartTime)/86400
  if (Days>=183) {  
    SDYear=SDYear+1000
    SDDays=(Days*(1000/365))-500  }
  if (Days<183) {  SDDays=500+(Days*(1000/365)) }
  StarDate=Math.floor((SDYear+SDDays) * 10 + .5) / 10
  
  return(""+StarDate+"")
}