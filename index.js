//Required modules
const http = require('http'),
      url  = require('url'),
      path = require('path'),
      fs   = require('fs'),
      gzip = request('zlib').createGzip(),

//Array(or object) of M(multipurpose) I(internet) M(mail) E(extensions) - MIME types
      mimeTypes = {
        'html' : 'text/html',
        'js'   : 'text/javascript',
        'css'  : 'text/css',
        'png'  : 'image/png',
        'jpg'  : 'image/jpeg',
        'jpeg' : 'image/jpeg'
      };

http.createServer((req, res) => {

    var pathName = url.parse(req.url).pathname,
        fileName = path.join(__dirname, decodeURIComponent(pathName)),
        stats;

    console.log(`Loading ${pathName}`);

    try {
        stats = fs.statSync(fileName);
    } catch(err) {
        console.log(err.message);
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end(err.message);
        return;
    }

    if(stats.isFile()){

        var mimeType = mimeTypes[path.extname(fileName).slice(1)];

        res.writeHead(200, {'Content-type': mimeType});
        var readStream = fs.createReadStream(fileName);
        readStream.pipe(gzip).pipe(res);
        readStream.on('end', () => {
            console.log("All data are send properly and streaming is ended. Shut down the response!");
            res.end();
        });

    } else if(stats.isDirectory()){

        res.writeHead(302, {
          Location: '/index.html'
        });
        res.end();

    } else {
        res.writeHead(500, {'Content-type': 'text/plain'});
        res.write('500 Internal Error');
        res.end();
    }

}).listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});



