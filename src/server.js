const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura el transporte de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes usar cualquier servicio de email compatible
    auth: {
        user: 'tu_email@gmail.com', // Reemplaza con tu email
        pass: 'tu_contraseña', // Reemplaza con tu contraseña
    },
});

app.post('/send', (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body;

    const mailOptions = {
        from: email,
        to: 'tu_email@gmail.com', // Reemplaza con tu email
        subject: asunto,
        text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Mensaje enviado: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});