#!D:/Programme/Python27/python

import sys, json
import cgi

screens = { 
  'login': {
    'name'       : 'login',
    'layout'     : 'Layout_001',
    'scheme'     : 'hometrek_style1.css',
    'timeline'   : 'true',
    'headline'   : 'MAGIO2 LCARS - LOGIN SCREEN',
    'hlwidth'    : '320px',
    'hlcolor'    : 'trk_hellgrau',
    'menu'       : 'Off',
    'onclick'    : 'alert("Off");',
    'defContent' : 'Login',
    'contentLogin' : {
      'name'       : 'loginCont',
      'layout'     : 'Login_Form'
    }    
  },
  
  'main': { 
    'success'    : 'true',
    'name'       : 'main',
    'layout'     : 'Layout_001',
    'timeline'   : 'true',
    'headline'   : 'MAGIO2 LCARS',
    'hlcolor'    : 'trk_hellgrau',
    'menu'       : 'Status,Power,Heat,Security,Remote',
    'onclick'    : 'buildScreen( "jsonResponse.contentStatus","mainContent" );/buildScreen( "jsonResponse.contentPower","mainContent" );/buildScreen( "jsonResponse.contentHeat","mainContent" );/buildScreen( "jsonResponse.contentSecurity","mainContent" );/buildScreen( "jsonResponse.contentRemote","mainContent" );',    
    'defContent' : 'Status',
    'contentStatus' : {
      'name'        : 'screen',
      'headline'    : 'Status',
      'hlcolor'     : 'trk_hellgrau',
      'layout'      : 'Layout_002',
      'menu'        : 'Power,Heat,Security',
      'onclick'     : '',
      'defContent1' : 'House3D',
      'defContent2' : '',
      'contentPower': {
      }
    },
    'contentPower' : {
      'name'     : 'screen',
      'headline' : 'Power',
      'hlcolor'  : 'trk_hellgrau',
      'layout'   : 'Layout_002',
      'menu'     : 'Timer,Devices,Commands,Makros'
    },
    'contentHeat' : {
      'name'     : 'screen',
      'headline' : 'Heat',
      'hlcolor'  : 'trk_hellgrau',
      'layout'   : 'Layout_002',
      'menu'     : 'Timer,Devices'
    },
    'contentSecurity' : {
      'name'     : 'screen',
      'headline' : 'Security',
      'hlcolor'  : 'trk_hellgrau',
      'layout'   : 'Layout_002',
      'menu'     : 'Cams,Sensors'
    },
    'contentRemote' : {
      'name'     : 'screen',
      'headline' : 'Remote',
      'hlcolor'  : 'trk_hellgrau',
      'layout'   : 'Layout_002',
      'menu'     : 'Timer,Devices,Makros'
    }
	}
};

fs = cgi.FieldStorage()

print "Content-type: application/json\n\n"
print json.dumps( screens[ fs.getvalue("page","login") ] )
