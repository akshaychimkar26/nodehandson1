var http=require('http')
function simpledata(req,res){

    const url=req.url;

    if(url==='/message'){
        res.write("message")
        return res.end()
    }
    if(url === '/html'){
        res.write("<html>")
        res.write("<head><title>home</title></head>")
        res.write("<body><h1>NODE</h1></br><p>What is Node.js?</br>Node.js is an open source server environment</br>js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</br>Node.js uses JavaScript on the server</br>Why Node.js?</br>Node.js uses asynchronous programming!</br>A common task for a web server can be to open a file on the server and return the content to the client.</br>Here is how PHP or ASP handles a file request:</br>Sends the task to the computer's file system.</br>Waits while the file system opens and reads the file.</br>Returns the content to the client.</br>Ready to handle the next request.</br>Here is how Node.js handles a file request:</br>Sends the task to the computer's file system.</br>Ready to handle the next request.</br>When the file system has opened and read the file, the server returns the content to the client.</br>Node.js eliminates the waiting, and simply continues with the next request.</br>Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.</br>What Can Node.js Do?</br>Node.js can generate dynamic page content</br>Node.js can create, open, read, write, delete, and close files on the server</br>Node.js can collect form data</br>Node.js can add, delete, modify data in your databaseWhat is a Node.js File?Node.js files contain tasks that will be executed on certain eventsA typical event is someone trying to access a port on the serverNode.js files must be initiated on the server before having any effectNode.js files have extension '.js'</p></body>")
        res.write("</html>")

        return res.end()
    }
    else if(url === '/json'){
        res.write(JSON.stringify({title:"node.js",
        description:"Node.js is an open source server environment</br>js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</br>Node.js uses JavaScript on the server</br>Why Node.js?</br>Node.js uses asynchronous programming!</br>A common task for a web server can be to open a file on the server and return the content to the client.</br>Here is how PHP or ASP handles a file request:</br>Sends the task to the computer's file system.</br>Waits while the file system opens and reads the file.</br>Returns the content to the client.</br>Ready to handle the next request.</br>Here is how Node.js handles a file request:</br>Sends the task to the computer's file system.</br>Ready to handle the next request.</br>When the file system has opened and read the file, the server returns the content to the client.</br>Node.js eliminates the waiting, and simply continues with the next request.</br>Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.</br>What Can Node.js Do?</br>Node.js can generate dynamic page content</br>Node.js can create, open, read, write, delete, and close files on the server</br>Node.js can collect form data</br>Node.js can add, delete, modify data in your databaseWhat is a Node.js File?Node.js files contain tasks that will be executed on certain eventsA typical event is someone trying to access a port on the serverNode.js files must be initiated on the server before having any effectNode.js files have extension '.js'"},
        ))
        

        return res.end()
    }

    res.write("default")
    res.end()
}
const server=http.createServer(simpledata)
    

server.listen(2300,()=>{
    console.log('port 2300');
})
