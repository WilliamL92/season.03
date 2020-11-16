const http = require('http');
const url = require('url');
const querystring = require('querystring');

const port = process.argv[2];

if(!port){
    console.log('port non renseigné ou invalide');
    process.exit(0);
}

const server = http.createServer((req, res)=>{
    const { query } = url.parse(req.url);
    if(query){
        const queryObject = querystring.parse(query);
        for(const [key, value] of Object.entries(queryObject)){
            console.log(`${key}: ${value}`);
        }
        res.write('done');
    }
    res.end()
});

server.listen(port, ()=>{
    console.log('server start at PORT => '+port);
});