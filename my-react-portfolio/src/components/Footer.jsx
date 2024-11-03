import styled from "styled-components";
import profile from "../assets/mika.jpg";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 0;
  width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
  margin-top: 64px;
  object-position: center 20%;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;

  > a {
    color: #000;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Let's Talk</h2>
      <ProfileImage src={profile} alt="Profile" />
      <ContactInfo>
        <h3>Mika Eberstein</h3>
        <p>+46(0)733 10 60 41</p>
        <p>mika@sanalabs.com</p>
      </ContactInfo>
      <SocialLinks>
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </SocialLinks>
    </FooterWrapper>
  );
};
