import { NextResponse } from 'next/server';
import transporter from '../../../lib/smtp-config';
import { compileTemplate } from '../../../lib/response-message-template';

interface ContactFormData {
    // name: string;
    email: string;
    // service: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const data: ContactFormData = await request.json();

        // Compile template với dữ liệu
        const htmlContent = compileTemplate({
            // name: data.email,
            email: data.email,
            //service: data.service,
            message: data.message
        });
        const mailOptions = {
            from: `"Weamis Submit Message Form" <${process.env.EMAIL_USER}>`,
            to: data.email,
            replyTo: process.env.EMAIL_TO,
            subject: `Cảm ơn quý khách hàng `,
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
