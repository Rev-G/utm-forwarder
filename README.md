# utm-forwarder

A javascript library named "utm forwarder" to enable utm codes to be forwarded easily to other pages on their site so they are not lost.

uf = utm forwarder

## How to

set `?uf=true` at the end of any href link on a web page to forward all utm codes

## Test

clone the repository

`cd` to the directory you cloned

spin up a quick web server 

`python3 -m http.server 8080`

navigate to the page

`http://localhost:8080/?utm_campaign=buystuff&test=foo&utm_source=instagram&cool=bar&utm_content=sendmoney`

OR

just open index.html in your browser

add the following to the end of the url

`?utm_campaign=buystuff&test=foo&utm_source=instagram&cool=bar&utm_content=sendmoney`
