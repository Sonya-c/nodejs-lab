// aditional reference: https://nodemailer.com/about/

const nodemailer = require('nodemailer');

async function main() {
    let testAccount = await nodemailer.createTestAccount();
  
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  
    let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>',
        to: 'sonya.castro.gomez@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }
    });
  }
  
  main().catch(console.error);