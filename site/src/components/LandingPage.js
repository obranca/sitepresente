import styled, { keyframes } from 'styled-components';

const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  text-align: center;
  color: white;
  background: linear-gradient(-45deg, #0d1b2a, #1b263b, #415a77, #778da9);
  background-size: 400% 400%;
  animation: ${animatedGradient} 15s ease infinite;
  overflow: hidden; /* Garante que nada saia da tela */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Espaço entre os elementos */
`;

const Headline = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem); /* Fonte responsiva */
  font-weight: 700;
  margin: 0;
  letter-spacing: -1px;
  opacity: 0;
  animation: ${fadeInUp} 0.8s 0.2s ease-out forwards;
`;

const Subheadline = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem); /* Fonte responsiva */
  font-weight: 400;
  max-width: 600px;
  color: #e0e1dd;
  margin: 0;
  opacity: 0;
  animation: ${fadeInUp} 0.8s 0.4s ease-out forwards;
`;

 const CtaButton = styled.a`
  display: inline-block;
  padding: 15px 35px;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: 700;
  color: #0d1b2a;
  background-color: #bde0fe; /* Cor de destaque chamativa */
  border: none;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeInUp} 0.8s 0.6s ease-out forwards;
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    background-color: #ffffff;
    box-shadow: 0 10px 20px rgba(189, 224, 254, 0.2);
  }
`;

const linkDeDestino = "https://t.me/obranca";

const LandingPage = () => {
  const handleButtonClick = () => {
    if (typeof window.ttq !== 'undefined') {
      window.ttq.track('CompletePayment'); 
    }
  };
  return (
    <PageContainer>
      <ContentWrapper>
        <Headline>Sua curiosidade está prestes a ser recompensada.</Headline>
        <Subheadline>
          Acreditamos que as melhores coisas da vida são inesperadas. Preparei algo especial que você não vai querer perder.
        </Subheadline>
        <CtaButton href={linkDeDestino} onClick={handleButtonClick}>
          REVELAR A SURPRESA 🎁
        </CtaButton>
      </ContentWrapper>
    </PageContainer>
  );
};

export default LandingPage;