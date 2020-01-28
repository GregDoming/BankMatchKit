const nodemailer = require("nodemailer");

exports.sendList = (req, res, next) => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4357a3ef763790",
      pass: "cb2bbf3105c5c7"
    }
  });

  console.log(req.body)

  const mailOptions = {
    from: '"Example Team" <from@example.com>',
    to: req.body,
    subject: 'BankMatch Email Test',
    text: 'Hey there, it’s our first message sent with Nodemailer ',
    html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
    attachments: []
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

  res.send("Email sent")
};