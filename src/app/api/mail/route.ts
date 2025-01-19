import { NextResponse } from 'next/server';
import transporter from '../../../lib/smtp-config';
import { compileTemplate } from '../../../lib/email-template';
interface ContactFormData {
    name: string;
    email: string;
    service: string;
    description: string;
}

export async function POST(request: Request) {
    try {
        const data: ContactFormData = await request.json();

        // Compile template với dữ liệu
        const htmlContent = compileTemplate({
            name: data.name,
            email: data.email,
            service: data.service,
            description: data.description
        });
        const mailOptions = {
            from: `"Weamis Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: data.email,
            subject: `Liên hệ mới từ ${data.name}`,
            html: htmlContent
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json(
            { message: 'Gửi email thành công' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Lỗi khi gửi email:', error);
        return NextResponse.json(
            { error: 'Không thể gửi email: ' + error.message },
            { status: 500 }
        );
    }
}
