// import the path core-module...
const path = require('path');

//import the path from util folder...
const rootDir = require('../util/path');

exports.get404 = (req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
}