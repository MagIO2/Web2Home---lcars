/*
 * Layout1 contains a top-line with a headline, an optional line showing the time/date, a content-area and a bottom-line which might include a menu
 * Needed/possible settings:
 *   css: 'css-filename,css-prefix'        => this defines which CSS-file has to be loaded and the prefix which is used in that file for all CSS definitions
 *   name: xxx                             => the name is needed to make everythin unique in case the layout is used twice in a screen
 *   [timeline: true]                      => if the timeline shall be displayed
 *   [headline: xxx]                       => text to be displayed as headline
 *   [hlwidth: xxxpx]                      => defines the size of the headline (defaults to 150px)
 *   [menu: 'm1,m2...']                    => list of menu items
 *   [onclick: 'do1(),do2()...']           => list of functions to be called when the corresponding menu is clicked
 *   [defContent: xxx]                     => default content to be shown in the content-panel
 *
 * Accessible elements (name has to be replaced with the string given as name-setting):
 *   nameTable     =>
 *   nameRow1      =>
 *   nameHeadline  =>
 *   [nameRow2]    =>
 *   [nameStatus]  =>
 *   nameRow3      =>
 *   nameRow4      =>
 *   nameMenu      =>
 */
function Layout_001() {
  this.createLayout = createLayout;

  function createLayout( data, container ) {
    var response = eval( data );
    var cssPrefix="";
    // get the css prefix to be used
    if( response.css ) {
      cssPrefix=response.css.split( "," )[1];
    }      

    var table=$('#'+container);
    table.html("");

    // create table and first row
    table.append("<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" id=\""+response.name+"Table\" width=\"100%\" height=\"100%\">"+
                 "<tr id=\""+response.name+"Row1\" class=\""+cssPrefix+"_h\"></tr></table>");
    table=$('#'+response.name+"Table");

    // add the cells to the first row (here we have the round edge and a spacer) 
    var row=$('#'+response.name+'Row1');
    row.html("");
    row.append("<td class=\""+cssPrefix+"_w "+cssPrefix+"_h\"><div class=\""+cssPrefix+"_round_l\"/></td>");
    row.append("<td class=\""+cssPrefix+"_sw "+cssPrefix+"_h\">&nbsp;</td>");

    // add the headline either with text or empty
    if( response.headline ) {
      var wdth=response.hlwidth;
      if( !wdth ) { wdth="150px"; }
      row.append("<td id=\""+response.name+"Headline\" width=\""+wdth+"\" align=\"center\" class=\""+cssPrefix+"_h\">"+
                 "<div class=\""+cssPrefix+"_title\">"+response.headline+"</div></td>");
    } else {
      row.append("<td id=\""+response.name+"Headline\" width=\""+wdth+"\" align=\"center\" class=\""+cssPrefix+"_h\"></td>");
    }
    
    // add 2 cells filling the whole rest of the screen width (they should meet somewhere in the middle)
    row.append("<td class=\""+cssPrefix+"_b "+cssPrefix+"_h\" width=\"*\">&nbsp;</td>");
    row.append("<td class=\""+cssPrefix+"_b "+cssPrefix+"_h\" width=\"*\">&nbsp;</td>");
    // and here is the right spacer & edge
    row.append("<td class=\""+cssPrefix+"_sw "+cssPrefix+"_h\">&nbsp;</td>");
    row.append("<td class=\""+cssPrefix+"_w "+cssPrefix+"_h\"><div class=\""+cssPrefix+"_round_r\" /></td>");

    
    // next row is only available if timeline is set to true
    if( response.timeline && response.timeline=='true') {
      table.append("<tr id=\""+response.name+"Row2\"></tr>");
      var row=$('#'+response.name+'Row2');
      row.append("<td id=\""+response.name+"Status\" class=\""+cssPrefix+"_h\" colspan=\"4\"></td>"+
                 "<td class=\""+cssPrefix+"_h\" align=\"right\" colspan=\"3\">"+
                   "<div class=\""+cssPrefix+"_time\" id=\""+response.name+"Time\"></div>"+
                 "</td>");
      startTimer( response.name+"Time" );
    }

    // here is the content row/cell
    table.append("<tr id=\""+response.name+"Row3\"><td id=\""+response.name+"Content\" colspan=\"7\" width=\"*\" height=\"*\"></td></tr>");

    // and here we have the bottom which contains the menu if available
    table.append("<tr id=\""+response.name+"Row4\"><tr>");
    var row=$('#'+response.name+'Row4');
    row.append("<td id=\""+response.name+"Menu\" colspan=\"7\" class=\""+cssPrefix+"_h\"></td>");
    if( response.menu ) {
      addMenuEntries( response.name, response.menu, response.onclick, cssPrefix );
    }

    // if the config says that the content cell has to be filled, do so!
    if( response.defContent ) {
      buildScreen( data+".content"+response.defContent, response.name+"Content" );
    }
  }
}

  function addMenuEntries( container, menuentries, clickentries, prefix ) {
    if( menuentries.length>0 ) {
      var mEntries=menuentries.split(",");
      var cEntries;
      if( clickentries ) {
        cEntries=clickentries.split("/");
      }
      
      var mCont=$("#"+container+"Menu");
      mCont.html("");
      mCont.append( "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr id=\""+container+"MenuRow\"></tr></table>" );
      
      var mRow=$('#'+container+"MenuRow");
      mRow.append("<td class=\""+prefix+"_w "+prefix+"_h\"><div class=\""+prefix+"_round_l\"/></td>");
      mRow.append("<td class=\""+prefix+"_sw "+prefix+"_h\"></td>");
      var i;
      for( i=0; i<mEntries.length; i++) {
        mRow.append( "<td id=\""+container+"_menu_"+mEntries[i]+"\" class=\""+container+"_actmenu "+prefix+"_mw "+prefix+"_h "+prefix+"_b\"><div class=\""+prefix+"_mt "+prefix+"_mw\">&nbsp;"+mEntries[i]+"</div></td>" );
        mRow.append("<td class=\""+prefix+"_sw "+prefix+"_h\"></td>");
        if( cEntries && cEntries[i] ) {
          menuScripts[ container+"_menu_"+mEntries[i] ]=cEntries[i];
        }
      }
      mRow.append( "<td class=\""+prefix+"_b "+prefix+"_h\" width=\"*\"></td>" );
      mRow.append("<td class=\""+prefix+"_sw "+prefix+"_h\"></td>");
      mRow.append( "<td class=\""+prefix+"_w "+prefix+"_h\"><div class=\""+prefix+"_round_r\"/></td>" );
      
      activateMenu( container+"_actmenu", "#ff9900", "#f7c64a");
    }
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