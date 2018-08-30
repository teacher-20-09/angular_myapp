var express=require('express');
var app=express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname+'/dist/myapp'));
//підключаємо body-parser
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var User=require('./models/user');

app.get('/',function(req,res){
	res.sendFile(__dirname+'/dist/myapp/index.html');
})
app.get('/getusers',(req,res)=>{
    console.log('datausers:');
    User.find((err,data)=>{
        console.log(data);
        res.send(data);
    })
})
app.post('/adduser',(req,res)=>{
    console.log(req.body);
    var user=new User(req.body);
    user.save((err,data)=>{
        console.log(data);
        res.send('adduser');
    })
})
app.post('/removeuser',(req,res)=>{
    console.log(req.body);
    User.remove({_id:req.body.id},(err,data)=>{
        res.send('remove user');
    })
})


app.listen(process.env.PORT||8080);
console.log('server is run!');