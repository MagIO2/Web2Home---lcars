#!D:/Programme/Python27/python

import sys, json
import cgi
from socket import *

HOST = '192.168.2.5'
PORT = 7777
ADDR = (HOST,PORT)
BUFSIZE = 4096

fs = cgi.FieldStorage()
command = fs.getvalue("cmd","exelist")

client = socket( AF_INET, SOCK_STREAM )
client.connect( (ADDR) )

for c in command:
  client.send( c );
  client.recv( 1 )
client.send( "\r" );
client.recv( 1 )

ch = ""
data = ""
while ch != ">":
  ch = client.recv( 1 )
  data = data + ch

# read the space after the prompt
client.recv(1)
client.close()

jsonData = {
  'success' : 'true',
  'cmd'     : command,
  'data'    : data
};

print "Content-type: application/json\n\n"
print json.dumps( jsonData )
