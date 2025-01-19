/* eslint-disable react/no-unescaped-entities */
"use client";

import Accordion from "react-bootstrap/Accordion";

const FAQSection = () => {
  return (
    <div className="section zubuz-section-padding2">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Đồng hành cùng bạn trên con đường chuyển đổi số</h2>
        </div>
        <div className="zubuz-accordion-wrap zubuz-accordion-wrap2">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Q: Điểm mạnh của giải pháp phần mềm Weamis là gì?
              </Accordion.Header>
              <Accordion.Body>
                <ul style={{
                  listStyleType: 'disc',
                  paddingLeft: '20px',
                  zIndex: '999'
                }}>
                  <li>• Wifi Marketing: Hệ thống tự động thu thập thông tin khách hàng khi họ kết nối wifi, giúp bạn hiểu rõ hành vi, thói quen và xây dựng chiến lược marketing hiệu quả.</li>
                  <li>• Thiết kế Website: Weamis mang đến dịch vụ thiết kế website chuyên nghiệp, tối ưu SEO và tương thích đa nền tảng, giúp doanh nghiệp tăng khả năng tiếp cận khách hàng và tỷ lệ chuyển đổi.</li>
                  <li>• Chatbot WeAI: Giải pháp này hoạt động 24/7, tự động trả lời các câu hỏi mà không cần tới kịch bản có trước, tiết kiệm chi phí nhân sự và nâng cao trải nghiệm khách hàng.</li>
                  <li>• Weamis VR: Giúp doanh nghiệp tạo ra những trải nghiệm tương tác độc đáo, ấn tượng, giúp thương hiệu của bạn nổi bật giữa hàng ngàn đối thủ cạnh tranh.</li>
                  <li>• Thiết kế Branding: Từ thiết kế logo, bộ nhận diện thương hiệu đến chiến lược truyền thông đa kênh, chúng tôi giúp doanh nghiệp tạo dựng hình ảnh chuyên nghiệp và nhất quán.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Q: Những lợi ích của việc sử dụng Weamis cho doanh nghiệp của chúng tôi là gì?
              </Accordion.Header>
              <Accordion.Body>
                Weamis tối đa hóa thời gian, tác vụ của bạn và mang lại nhiều lợi ích kinh doanh thông qua việc cải thiện mức độ tương tác với khách hàng, giảm chi phí hỗ trợ, khả dụng 24/7 và đồng thời marketing tới tất cả các khách hàng đã, đang sử dụng dịch vụ của bạn.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Q: Quy trình phát triển sản phẩm của công ty diễn ra như thế nào?
              </Accordion.Header>
              <Accordion.Body>
                Chúng tôi áp dụng phương pháp Agile trong quy trình phát triển sản phẩm, giúp chúng tôi nhanh chóng đáp ứng nhu cầu của khách hàng và thích ứng với sự biến đổi của thị trường. Bằng cách thường xuyên thu thập phản hồi từ người dùng, chúng tôi không ngừng cải tiến sản phẩm để mang lại giá trị tốt nhất.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
