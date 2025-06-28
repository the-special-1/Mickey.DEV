import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledHeader = styled.header`
  background-color: rgba(15, 23, 42, 0.5); /* bg-slate-900 bg-opacity-50 */
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1.5rem; /* space-x-6 */
`;

const NavLink = styled(Link)`
  color: #d1d5db; /* text-gray-300 */
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #ffffff; /* hover:text-white */
  }

  &.active {
    color: #60a5fa; /* activeClass:text-blue-400 */
    font-weight: 600; /* font-semibold */
  }
`;

const Header = () => {
  const navLinks = ['About', 'Projects', 'Contact'];

  return (
    <StyledHeader>
      <Container>
        <NavLink to="hero" smooth={true} duration={500} style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
          Your Name
        </NavLink>
        <nav>
          <NavList>
            {navLinks.map((link) => (
              <li key={link}>
                <NavLink
                  to={link.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </NavList>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
