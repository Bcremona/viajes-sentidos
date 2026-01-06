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

async function mailer(mail, pregunta) {
  const info = await transporter.sendMail({
    from: emailUser, // sender address
    to: "mariagloriamarina@yahoo.com.ar", // list of receivers
    subject: "Viajes Sentidos", // Subject line
    html: `
    <b>${mail}</b>
    <p>${pregunta}</p>
    `, 
  });

  console.log("Message sent: %s", info.messageId);
}

export default mailer;