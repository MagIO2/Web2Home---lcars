#!D:/Programme/Python27/python

import sys, json
import cgi

screens = { 
  'login': {
    'name'       : 'login',
    'layout'     : 'Layout_001',
    'css'        : 'hometrek_0001,ht0001',
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
    'css'        : 'hometrek_0001,ht0001',
    'timeline'   : 'true',
    'headline'   : 'MAGIO2 LCARS',
    'hlcolor'    : 'trk_hellgrau',
    'menu'       : 'Status,Power,Heat,Security,Remote,Music',
    'onclick'    : 'buildScreen( "jsonResponse.contentStatus","mainContent" );/buildScreen( "jsonResponse.contentPower","mainContent" );/buildScreen( "jsonResponse.contentHeat","mainContent" );/buildScreen( "jsonResponse.contentSecurity","mainContent" );/buildScreen( "jsonResponse.contentRemote","mainContent" );/buildScreen( "jsonResponse.contentMusic","mainContent" );',    
    'defContent' : 'Status',
    'contentStatus' : {
      'name'        : 'screen',
      'layout'      : 'Layout_002',
      'css'         : 'hometrek_0002,ht0002',
      'headline'    : 'Status',
      'hlcolor'     : 'trk_hellgrau',
      'menu'        : 'Power,Heat,Security',
      'onclick'     : '',
      'defContent1' : 'House3D',
      'defContent2' : '',
      'contentPower': {
      }
    },
    'contentPower' : {
      'name'     : 'screen',
      'layout'   : 'Layout_002',
      'css'      : 'hometrek_0002,ht0002',
      'headline' : 'Power',
      'hlcolor'  : 'trk_hellgrau',
      'menu'     : 'Timer,Devices,Commands,Makros'
    },
    'contentHeat' : {
      'name'     : 'screen',
      'layout'   : 'Layout_002',
      'css'      : 'hometrek_0002,ht0002',
      'headline' : 'Heat',
      'hlcolor'  : 'trk_hellgrau',
      'menu'     : 'Timer,Devices'
    },
    'contentSecurity' : {
      'name'     : 'screen',
      'layout'   : 'Layout_002',
      'css'      : 'hometrek_0002,ht0002',
      'headline' : 'Security',
      'hlcolor'  : 'trk_hellgrau',
      'menu'     : 'Cams,Sensors'
    },
    'contentRemote' : {
      'name'     : 'screen',
      'layout'   : 'Layout_002',
      'css'      : 'hometrek_0002,ht0002',
      'headline' : 'Remote',
      'hlcolor'  : 'trk_hellgrau',
      'menu'     : 'Timer,Devices,Makros'
    },
    'contentMusic' : {
      'name'     : 'screen',
      'layout'   : 'Layout_002',
      'css'      : 'hometrek_0002,ht0002',
      'headline' : 'Music',
      'hlcolor'  : 'trk_hellgrau',
      'menu'     : 'Radio,MP3'
    }
	}
};

fs = cgi.FieldStorage()

print "Content-type: application/json\n\n"
print json.dumps( screens[ fs.getvalue("page","login") ] )
