import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #E495B0;
    color: #ffffff;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
`;

const FooterSection = styled.div`
    margin: 20px;
    flex: 1;
    min-width: 200px;
`;

const FooterTitle = styled.h4`
    margin-bottom: 15px;
    font-size: 18px;
    color: #f8f9fa;
`;

const FooterLink = styled.a`
    display: block;
    color: #d3d3d3;
    margin: 5px 0;
    text-decoration: none;

    &:hover {
        color: #f8f9fa;
        text-decoration: underline;
    }
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
`;

const SocialIcon = styled.a`
    color: #ffffff;
    font-size: 24px;
    text-decoration: none;

    &:hover {
        color: #d3d3d3;
    }
`;

const FooterCompoent = () => {
    return (
        <FooterContainer>
            <FooterSection>
                <FooterTitle>Liên Hệ</FooterTitle>
                <p>Địa chỉ: 123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>
                <p>Email: info@banhcaulong.com</p>
                <p>Điện thoại: (84) 123-456-789</p>
            </FooterSection>

            <FooterSection>
                <FooterTitle>Thông Tin</FooterTitle>
                <FooterLink href="#">Về Chúng Tôi</FooterLink>
                <FooterLink href="#">Chính Sách Bảo Mật</FooterLink>
                <FooterLink href="#">Điều Khoản Sử Dụng</FooterLink>
                <FooterLink href="#">Liên Hệ</FooterLink>
            </FooterSection>

            <FooterSection>
                <FooterTitle>Hỗ Trợ Khách Hàng</FooterTitle>
                <FooterLink href="#">Câu Hỏi Thường Gặp</FooterLink>
                <FooterLink href="#">Hướng Dẫn Mua Hàng</FooterLink>
                <FooterLink href="#">Chính Sách Đổi Trả</FooterLink>
                <FooterLink href="#">Chính Sách Vận Chuyển</FooterLink>
            </FooterSection>

            <FooterSection>
                <FooterTitle>Theo Dõi Chúng Tôi</FooterTitle>
                <SocialLinks>
                    <SocialIcon href="#" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </SocialIcon>
                    <SocialIcon href="#" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </SocialIcon>
                    <SocialIcon href="#" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </SocialIcon>
                    <SocialIcon href="#" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                    </SocialIcon>
                </SocialLinks>
            </FooterSection>
        </FooterContainer>
    );
};

export default FooterCompoent;
