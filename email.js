var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'*****@gmail.com' ,//where your gmail id is set
        pass: '****'//you should insert your password here
    }
})

var mail={
    from: '*****@gmail.com',//your mail id
    to: 'soyimo9158@mail8app.com',//recievers mail id
    subject: 'sending mail through node.js',//subject to your mail
    text: 'hi iam testing node.js using mail functions.'//body of the mail
}

transporter.sendMail(mail, function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log('email has been sent:' + info.response);
    }
});