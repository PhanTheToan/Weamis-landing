import { NextResponse } from 'next/server';
import transporter from '../../../lib/smtp-config';
import { compileTemplate } from '../../../lib/message-template';

interface ContactFormData {
    email: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const data: ContactFormData = await request.json();

        // Compile template với dữ liệu
        const htmlContent = compileTemplate({
            email: data.email,
            message: data.message
        });
        const mailOptions = {
            from: `"Weamis Message Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            // replyTo: data.email,
            subject: `Tin nhắn từ User Client `,
            html: htmlContent
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Gửi tin nhắn thành công' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Lỗi khi gửi tin nhắn:', error);
        return NextResponse.json(
            { error: 'Không thể gửi tin nhắn: ' + error.message },
            { status: 500 }
        );
    }
}
