import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

let emailUser = process.env.EMAIL_USER;
let emailPass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: emailUser,
        pass: emailPass,
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function mailer(mail, pregunta) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: emailUser, // sender address
    to: "mariagloriamarina@yahoo.com.ar", // list of receivers
    subject: "Viajes Sentidos", // Subject line
    html: `
    <b>${mail}</b>
    <p>${pregunta}</p>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export default mailer;