var database = require('./database.js'),
    fs = require('fs'),
    chalk = require('chalk');

const
    error = chalk.redBright('ERROR'),
    warning = chalk.keyword('orange')('WARN'),
    info = chalk.cyan('INFO');

function checkLogin(req, res){
    if(!req.session.ID){
        console.log(warning, 'Refused access to a protected resource.');
        res.redirect('/?failed=1');
        return false;
    }
    return true;
}

exports.login = function(req, res){
    if(req.session.ID){
        res.redirect('/dashboard');
        return;
    }
    database.login(req.body.user, req.body.pass, function(data){
        if(data){
            console.log(info, req.body.user, 'logged in.');
            req.session.ID = data.id;
            req.session.user = req.body.user;
            res.redirect('/dashboard');
        } else {
            console.log(warning, req.body.user, 'entered invalid credentials.');
            res.redirect('/?failed=0');
        }
    });
}

exports.logout = function(req, res){
    console.log(info, req.session.user || 'Invalid-user', 'logged out.');
    req.session.destroy();
    res.redirect('/?failed=2');
}

exports.dashboard = function(req, res){
    if(!checkLogin(req, res)) return;
    database.getVideos(function(data){
        let t = 0, s = 0;
        for(t = 1; t<data.length; t++){
            if(data[t-1].date){
                s += (data[t-1].date != 'Később');
            }
        }
        res.render('dashboard.pug', {
            user: {
                name: req.session.user
            },
            videos: data,
            stats: {
                solved: s,
                total: t,
                precent: Math.round(s*100/t)
            }
        });
    });
}

function getFileName(num, name){
    let ext = '.' + name.split('.').pop();
    if(!fs.existsSync('./public/uploads/' + num + ext)) return num + ext;
    let i = 1;
    while(fs.existsSync('./public/uploads/' + num + '_' + i + ext)){
        i += 1;
    }
    return num + '_' + i + ext;
}

exports.upload = function(req, res){
    if(!checkLogin(req, res)) return;
    if(!req.body.number){
        console.log(warning, req.session.user, 'did not provide a number.');
        res.send('0');
        return;
    }
    if(!req.body.later){
        if(req.files ? (req.files.videoFile ? req.files.videoFile.size > 0 : false) : false){
            let fn = getFileName(req.body.number, req.files.videoFile.name);
            req.files.videoFile.mv('./public/uploads/' + fn, (err) => {
                if(err){
                    console.log(error, 'File upload of', fn, '(' + req.files.videoFile.name +') failed.');
                    res.send('2');
                } else {
                    database.markVideo(req.body.number, req.body.time, req.session.user, false);
                    res.send('3');
                }
            });
        } else {
            console.log(warning, req.session.user, 'did not provide a file.');
            res.send('1');
        }
    } else {
        database.markVideo(req.body.number, req.body.time, req.session.user, true);
        res.send('3');
    }
}

exports.list = function(req, res){
    if(!checkLogin(req, res)) return;
    fs.readFile('./public/uploads/0.txt', 'utf-8', (err, data) =>{
        if(err){
            console.log(warning, 'Failed to get the contents of 0.txt.');
            data = 'Nincs adat.';
        }
        fs.readdir('./public/uploads', (_err, files) => {
            if(_err){
                console.log(error, 'Failed to enumerate task files.');
            }
            files = files.filter((val) => {
                return /^0[._][0-9]*\.*jpg/.test(val);
            });
            res.render('list.pug', {
                images: files,
                text: data
            });
        });
    });
}

exports.stats = function(req, res){
    if(!checkLogin(req, res)) return;

    _ = (arr) => {return "['" + arr.join("', '") + "']"}

    function getColors(k){
        var a = [];
        let x = 340/k;
        for(let i = 0; i<k; i++){
            a.push('hsl(' + i*x + ', 100%, 67%)');
        }
        return a;
    }

    database.getStats((rows) => {

        let users = [], data = [];

        rows.forEach(row => {
            users.push(row.user);
            data.push(row.videos);
        });

        res.render('stats.pug', {
            users: _(users),
            colors: _(getColors(users.length)),
            data: _(data)
        });
    });
}