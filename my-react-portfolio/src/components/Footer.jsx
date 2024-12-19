import styled from "styled-components";
import profile from "../assets/mika.jpg";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: 0 auto;
  text-align: center;
  gap: 32px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProfileImage = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
  object-position: center 20%;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  align-items: flex-start;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;

  > a {
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    gap: 32px;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <h1>Let's Talk</h1>
        <ProfileImage src={profile} alt="Profile" />
      </Wrapper>
      <ContactInfo>
        <h3>Mika Eberstein</h3>
        <h3>+46(0)733 10 60 41</h3>
        <h3>mika@sanalabs.com</h3>
      </ContactInfo>
      <SocialLinks>
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
        <a href="#">
          <i className="fab fa-stack-overflow"></i>
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
