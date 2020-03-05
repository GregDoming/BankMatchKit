
const mailgun = require("mailgun-js");

exports.sendList = (req, res, next) => {

  const { contactList, subjectText, bodyText } = req.body;

  const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_API_BASE_URL });
  const data = {
    from: "Greg <greg@bantcher.com>",
    to: contactList,
    subject: subjectText,
    text: bodyText
  };
  mg.messages().send(data, function(error, body) {
    if (error) {
      console.log(error)
      res.send(error)
    }
    res.send("email sent")
    console.log("email sent")
  });
};
