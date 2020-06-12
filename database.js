var sqlite3 = require('sqlite3'),
    chalk = require('chalk');

const
    error = chalk.redBright('ERROR'),
    warning = chalk.keyword('orange')('WARN'),
    info = chalk.cyan('INFO');

function dbError(err){
    if(err){
        console.log(error, 'Database:', err.message);
    }
}

let db = new sqlite3.Database('./db/viddrop.db', (err) => {
    dbError(err);
    console.log(info, 'Connected to viddrop.db.');
});

function closing(){
    console.log(info, 'Shutting down...');
    db.close();
    console.log(info, 'Disconnected from viddrop.db.');
    process.exit(0);
}

process.on('SIGINT', closing);
process.on('SIGHUP', closing);
process.on('SIGTERM', closing);

exports.login = function(user, pass, callback){
    db.get('SELECT ID id FROM Users WHERE Username=? AND Password=?', [user, pass], (err, row) => {
        dbError(err);
        callback(row);
    });
}

exports.getVideos = function(callback){
    db.all('SELECT ID id, Solves solves, Date date FROM Videos', (err, rows) => {
        dbError(err);
        callback(rows);
    });
}

function getSolves(num, callback){
    db.get('SELECT Solves solves, Date date FROM Videos WHERE ID=?', [num], (err, row) => {
        dbError(err);
        callback(row);
    });
}

function getTime(){
    let date = new Date();
    let min = date.getMinutes().toString().padStart(2, '0');
    let sec = date.getSeconds().toString().padStart(2, '0');
    return date.getMonth()+1 + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + min + ':' + sec;
}

exports.markVideo = function(num, time, solver, later){
    if(num < 1) return; //Tasks -> 0.txt
    getSolves(num, (row) => {
        let solves = row.solves ? row.solves + ', ' + solver : solver;
        if(row.date == 'Később') solves = solver;
        if(later){
            db.run('UPDATE Videos SET Solves=?, Date="Később" WHERE ID=?', [solves, num], dbError);
            console.log(info, solver, chalk.keyword('orange')('claimed'), 'video #' + num + '.');
        } else {
            time = time ? getTime() : null;
            db.run('UPDATE Videos SET Solves=?, Date=? WHERE ID=?', [solves, time, num], dbError);
            if(!row.solves){ // User is the first to solve this
                db.run('UPDATE Users SET Videos = Videos + 1 WHERE Username=?', [solver], dbError);
            }
            console.log(info, solver, chalk.keyword('green')('marked'), 'video #' + num + '.');
        }
    });
}

exports.getStats = function(callback){
    db.all('SELECT Username user, Videos videos FROM USERS', (err, rows) => {
        dbError(err);
        callback(rows);
    });
}