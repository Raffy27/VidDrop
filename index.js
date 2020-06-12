var fs = require('fs'),
    chalk = require('chalk'),
    express = require('express'),
    session = require('express-session'),
    fileup = require('express-fileupload'),
    bodyParser = require('body-parser'),
    http = require('http'),
    https = require('https'),
    
    database = require('./database.js'),
    users = require('./users.js');

const
    error = chalk.redBright('ERROR'),
    warning = chalk.keyword('orange')('WARN'),
    info = chalk.cyan('INFO'),

    HTTPS = true;

var app = express();
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'NaHaEztKitalalodXD',
    resave: false,
    saveUninitialized: false
}));
app.use(fileup({
    safeFileNames: true,
    useTempFiles: true,
    preserveExtension: 4
}));

app.use(express.static('public'));
app.post('/login', users.login);
app.get('/logout', users.logout);
app.get('/dashboard', users.dashboard);
app.post('/upload', users.upload);
app.get('/list', users.list);
app.get('/stats', users.stats);

var httpsrv = http.createServer(HTTPS ? (req, res) => {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
} : app);
httpsrv.listen(80);
console.log(info, 'HTTP module loaded.');

if(HTTPS){
    console.log(info, 'HTTP module is redirect-only.');
    var cred = {
        key: fs.readFileSync('./sslcert/private.key'),
        cert: fs.readFileSync('./sslcert/certificate.crt')
    };
    var httpssrv = https.createServer(cred, app);
    httpssrv.listen(443);
    console.log(info, chalk.keyword('green')('HTTPS'), 'module loaded.');
}