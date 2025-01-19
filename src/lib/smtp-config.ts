import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({

    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false  // Thêm dòng này
    }
});
transporter.verify(function (error, success) {
    if (error) {
        console.log('Lỗi kết nối SMTP:', error);
    } else {
        console.log('Máy chủ SMTP sẵn sàng nhận tin nhắn');
    }
});

export default transporter;
