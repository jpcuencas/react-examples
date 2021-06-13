const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();


app.use(session({
    secret: 'Es secreto',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());

app.get('/', (req, res) => {
    
req.session.cuenta = req.session.cuenta? req.session.cuenta + 1 : 1;
req.session.reves = req.session.reves? req.session.reves - 1 : 0;

res.cookie('count', req.cookies.count? (parseInt(req.cookies.count) + 1) : 1);
    res.send('visutado:'+req.cookies.count+' / '+req.session.cuenta);
});

app.get('/una', (req, res) => {
    
    req.session.cuenta = req.session.cuenta? req.session.cuenta + 1 : 1;
    req.session.reves = req.session.reves? req.session.reves + 1 : 0;
    res.cookie('count', parseInt(req.cookies.count)+1);
    
    res.redirect('/dos');
    //res.send('visutado:' + req.cookies.count);
});
app.get('/dos', (req, res) => {
    res.session.cuenta = req.session.cuenta? req.session.cuenta + 1 : 1;
    req.session.reves = req.session.reves? req.session.reves + 1 : 0;
    res.cookie('count', parseInt(req.cookies.count)+1);
    res.send('visutado:'+req.cookies.count+' / '+req.session.cuenta);
});

app.listen(3000, ()=>{
    console.log('Port:3000');
});