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
    'name'       : 'main',
    'layout'     : 'Layout_001',
    'css'        : 'hometrek_0001,ht0001',
    'timeline'   : 'true',
    'headline'   : 'MAGIO2 LCARS',
    'hlcolor'    : 'trk_hellgrau',
    'menu'       : 'Status,Power,Heat,Security,Remote,Music',
    'onclick'    : 'buildScreen( "jsonResponse.contentStatus","mainContent" );/buildScreen( "jsonResponse.contentPower","mainContent" );/buildScreen( "jsonResponse.contentHeat","mainContent" );/buildScreen( "jsonResponse.contentSecurity","mainContent" );/buildScreen( "jsonResponse.contentRemote","mainContent" );/buildScreen( "jsonResponse.contentMusic","mainContent" );',    
    'defContent' : 'Music',
    'contentStatus' : {
      'name'        : 'MasterScreen',
      'id'          : 'StatusScreen',
      'layout'      : 'Layout_002',
      'css'         : 'hometrek_0002,ht0002',
      'headline'    : 'Status',
      'hlcolor'     : 'trk_hellgrau',
      'menu'        : 'Power,Heat,Security',
      'onclick'     : '',
      'defContent1' : 'Split',
      'defContent2' : '',
      'contentSplit'  : {
        'name'        : 'SplitScreen',
        'layout'      : 'Layout_004',
        'css'         : 'hometrek_0001,ht0001'
      },
      'contentPower': {
      }
    },
    'contentPower' : {
      'name'       : 'MasterScreen',
      'id'         : 'PowerScreen',
      'layout'     : 'Layout_002',
      'css'        : 'hometrek_0002,ht0002',
      'headline'   : 'Power',
      'hlcolor'    : 'trk_hellgrau',
      'menu'       : 'Timer,Times,Devices,Commands,Makros',
      'onclick'    : 'buildScreen("jsonResponse.contentPower.contentTmr","PwrScreenCont2");/buildScreen("jsonResponse.contentPower.contentTm","PwrScreenCont2");/buildScreen("jsonResponse.contentPower.contentDev","PwrScreenCont2");/buildScreen("jsonResponse.contentPower.contentCmd","PwrScreenCont2");/buildScreen("jsonResponse.contentMkr.contentMkr","PwrScreenCont2");',
      'defContent2': 'Tmr',
      'contentTmr' : {
        'name'        : 'Timer',
        'id'          : 'Timer',
        'layout'      : 'Layout_003',
        'css'         : 'hometrek_0003,ht0003',
        'headline'    : 'Timer',
        'menu'        : 'Makros,Commands',
        'onclick'     : 'buildScreen("jsonResponse.contentPower.contentTmr.contentMakroList","TimerCont2");/buildScreen("jsonResponse.contentPower.contentTmr.contentCommandList","TimerCont2");',
        'menu_hover'  : '#ff9966',
        'defContent1' : 'TimerControl',
        'defContent2' : 'MakroList',
        'defContent3' : 'TimerList',
        'contentTimerControl' : {
          'name'     : 'tmrCntrl',
          'layout'   : 'TimerControl',
          'css'      : 'hometrek_0004,ht0004',
          'headline' : 'Timer Control'
        },
        'contentTimerList' : {
          'name'     : 'tmrList',
          'id'       : 'tmrList',
          'layout'   : 'TimerList',
          'css'      : 'hometrek_0004,ht0004',
          'headline' : 'Timer List'
        },
        'contentMakroList' : {
          'name'     : 'mkrList',
          'id'       : 'mkrList',
          'layout'   : 'MakroList',
          'css'      : 'hometrek_0004,ht0004',
          'headline' : 'Makro List'
        },
        'contentCommandList' : {
          'name'     : 'cmdList',
          'id'       : 'cmdList',
          'layout'   : 'CommandList',
          'css'      : 'hometrek_0004,ht0004',
          'headline' : 'Command List'
        }
      },
      'contentTm' : {
        'name'        : 'Devices',
        'id'          : 'Devices',
        'layout'      : 'Layout_003',
        'css'         : 'hometrek_0003,ht0003'
      },
      'contentDev' : {
        'name'        : 'Devices',
        'id'          : 'Devices',
        'layout'      : 'Layout_003',
        'css'         : 'hometrek_0003,ht0003',
        'headline'    : 'Devices',
        'menu'        : 'On,Off',
        'onclick'     : 'alert("On");/alert("Off");',
        'menu_hover'  : '#ff9966',
        'defContent1' : 'DeviceControl',
        'defContent2' : 'DeviceList',
        'defContent3' : 'DeviceBla',
        'contentDeviceList' : {
          'name'     : 'dvcList',
          'id'       : 'dvcList',
          'layout'   : 'DeviceList',
          'css'      : 'hometrek_0004,ht0004',
          'headline' : 'Device List'
        },
        'contentDeviceControl' : {
          'name'     : 'dvcCtrl',
          'layout'   : 'EmptyPanel',
          'css'      : 'hometrek_0004,ht0004',
          'headline' : 'Device Control'
        },
        'contentDeviceBla' : {
          'name'     : 'dvcBla',
          'layout'   : 'EmptyPanel',
          'css'      : 'hometrek_0004,ht0004',
          'headline' : 'Device Bla'
        }
      },
      'contentCmd' : {
        'name'        : 'Commands',
        'layout'      : 'Layout_003',
        'css'         : 'hometrek_0003,ht0003'
      },
      'contentMkr' : {
        'name'        : 'Makros',
        'layout'      : 'Layout_003',
        'css'         : 'hometrek_0003,ht0003'
      }
    },
    'contentHeat' : {
      'name'     : 'MasterScreen',
      'id'       : 'HeatScreen',
      'layout'   : 'Layout_002',
      'css'      : 'hometrek_0002,ht0002',
      'headline' : 'Heat',
      'hlcolor'  : 'trk_hellgrau',
      'menu'     : 'Timer,Devices'
    },
    'contentSecurity' : {
      'name'     : 'MasterScreen',
      'id'       : 'SecurityScreen',
      'layout'   : 'Layout_002',
      'css'      : 'hometrek_0002,ht0002',
      'headline' : 'Security',
      'hlcolor'  : 'trk_hellgrau',
      'menu'     : 'Cams,Sensors'
    },
    'contentRemote' : {
      'name'     : 'MasterScreen',
      'id'       : 'RemoteScreen',
      'layout'   : 'Layout_002',
      'css'      : 'hometrek_0002,ht0002',
      'headline' : 'Remote',
      'hlcolor'  : 'trk_hellgrau',
      'menu'     : 'Timer,Devices,Makros'
    },
    'contentMusic' : {
      'name'         : 'MasterScreen',
      'id'           : 'MusicScreen',
      'layout'       : 'Layout_002',
      'css'          : 'hometrek_0002,ht0002',
      'headline'     : 'Music',
      'hlcolor'      : 'trk_hellgrau',
      'menu'         : 'Radio,MP3',
      'defContent1'  : 'Split',
      'defContent2'  : 'Radio',
      'contentSplit' : {
        'name'        : 'SplitScreen',
        'layout'      : 'Layout_004',
        'css'         : 'hometrek_0001,ht0001',
        'defContent1' : 'Camera1',
        'contentCamera1' : {
          'name'        : 'Cam1',
          'layout'      : 'Layout_005',        
          'css'         : 'hometrek_0003,ht0003',
          'headline'    : 'Camera 1',
          'defContent'  : 'CamIframe',
          'contentCamIframe' : {
            'layout'   : 'CamIframe',
            'source'   : 'http://www.vz.hessen.de/res/webcams/ALL/imgeschdrei.jpg',
            'old'      : 'http://192.168.2.5:8081'
          }
        },
        'defContent2' : 'Camera2',
        'contentCamera2' : {
          'name'        : 'Cam2',
          'layout'      : 'Layout_005',        
          'css'         : 'hometrek_0005,ht0005',
          'headline'    : 'Camera 2',
          'defContent'  : 'CamIframe',
          'contentCamIframe' : {
            'layout'   : 'CamIframe',
            'source'   : 'http://www.vz.hessen.de/res/webcams/ALL/imgfriedberg.jpg'
          }
        }
      },
      'contentRadio' : {
        'name'        : 'Radio',
        'layout'      : 'Layout_003',
        'css'         : 'hometrek_0003,ht0003',
        'headline'    : 'Radio',
        'menu'        : 'User 1,User 2,User 3',
        'menu_hover'  : '#ff9966',
        'onclick'     : 'alert("radio1");/alert("radio2");/alert("radio3");',
        'defContent1' : 'RadioControl',
        'defContent2' : 'RadioList',
        'defContent3' : 'RadioStatus',
        'contentRadioList' : {
          'name'     : 'rdioLst',
          'layout'   : 'RadioPlaylist',
          'css'      : 'hometrek_0004,ht0004',
          'headline' : 'Radio List'
        },
        'contentRadioControl' : {
          'name'     : 'rdioCntrl',
          'layout'   : 'RadioControl',
          'css'      : 'hometrek_0004,ht0004',
          'headline' : 'Radio List Control'
        },
        'contentRadioStatus' : {
          'name'     : 'rdioStat',
          'layout'   : 'RadioStatus',
          'css'      : 'hometrek_0004,ht0004',
          'headline' : 'Radio Status'
        }
      }
    }
	}
};

fs = cgi.FieldStorage()

print "Content-type: application/json\n\n"
print json.dumps( screens[ fs.getvalue("page","main") ] )
