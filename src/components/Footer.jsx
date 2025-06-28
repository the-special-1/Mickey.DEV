import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 2rem 1rem; /* py-8 px-4 */
  text-align: center;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem; /* px-4 */
  text-align: center;
  color: ${({ theme }) => theme.textGray500}; /* text-gray-500 */
`;

const Footer = () => {
  const { t } = useTranslation();
  return (
    <StyledFooter>
      <Container>
        <p>{t('footer_text', { year: new Date().getFullYear() })}</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
