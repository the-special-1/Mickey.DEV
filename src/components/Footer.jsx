import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #0f172a; /* bg-slate-900 */
  padding: 1.5rem 0; /* py-6 */
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem; /* px-4 */
  text-align: center;
  color: #6b7280; /* text-gray-500 */
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
