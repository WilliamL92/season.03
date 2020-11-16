const http = require('http')

const server = http.createServer(function(request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {
    request.on('data', function(data) {
      console.log("Heisenberg")
    })
  } else {
    console.log("<h>Hello World!</h>")
  }
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)