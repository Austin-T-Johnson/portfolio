const express = require("express");
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
    
    const { email, name, message } = req.body;
        let transporter = nodemailer.createTransport({
          service: "gmail",
          secure: false,
          port: 25,
          auth: {
            user: "austintjohnson92@gmail.com",
            pass: "zanrexqjrcixlhmu"
          },
          tls: {
            rejectUnauthorized: false
          }
        });
  
        const emailOutputToUser = `
    <div style="background:#fff; width:100%; text-align: center; padding:30px 0px;box-sizing: border-box;">
    <style>
      /* Remove space around the email design. */
      html,
      body {
          margin: 0 auto !important;
          padding: 0 !important;
          height: 100% !important;
          width: 100% !important;
      }
  
      /* Stop Outlook resizing small text. */
      * {
          -ms-text-size-adjust: 100%;
      }
  
      /* Stop Outlook from adding extra spacing to tables. */
      table,
      td {
          mso-table-lspace: 0pt !important;
          mso-table-rspace: 0pt !important;
      }
  
      /* Use a better rendering method when resizing images in Outlook IE. */
      img {
          -ms-interpolation-mode:bicubic;
      }
  
      /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
      a {
          text-decoration: none;
      }
  </style>
   <div>
   name: ${name}
   </div>
   <div>
   email: ${email}
   </div>
   <div>
   message: ${message}
   </div>
        `;
  
        let mailOptionsToUser = {
          from: 'austintjohnson92@gmail.com',
          to: 'austintjohnson92@gmail.com', 
          attachments: [],
          subject: `${name}, ${email}`,
          text: "", 
          html: emailOutputToUser
        };
  
        transporter.sendMail(mailOptionsToUser, (error, info) => {
          if (error) {
            res.status(500).send({ message: 'error' })
            return console.log(error);
          }
          console.log("User sent: %s", info.messageId);
          
          res.status(200).send({ message: 'success' })
        });
    
});



app.use((req, res, next) => {
const error = new Error("Not Found");
res.status(404);
next(error);
});

app.use((error, req, res, next) => {
res.status(error.status || 500);
res.json({
    error: {
        message: error.message
    }
});
});




module.exports = app;