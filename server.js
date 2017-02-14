var http= require('http');
var fs= require('fs');
var path= require('path');
http.createServer(function(request,response){
                  var filePath ='.'+request.url;
                  if(filePath=='./')
                    filePath='./index.html';
                    var extname= path.extname(filePath);
                    var contentType='text/html';
                    switch(extname){
                        case '.js':
                            contentType= 'text/javascript';
                            break;
                        case '.css':
                            contentType= 'text/css';
                            break;
                         case '.png':
                            contentType= 'text/png';
                            break;
                    
                        case '.jpg':
                            contentType= 'text/jpg';
                            break;
                    }
        fs.readFile(filePath,function(error,content){
           if(error){
               if(error.code=='ENOENT'){
               fs.readFile('./404.html',function(error,content){
                   response.writeHead(200,{'ContentType':contentType});
             
        });
        }else{
                response.writeHead(500);
                response.end('sorry error'+ error.code+'../n');
                response.end();
                }
            }else{
                response.writeHead(200,{'ContentType':contentType});
                response.end(content,'utf-8');
            }
                  
                  });
        }).listen(8888);
console.log('server running on 127.0.0.1:8888');