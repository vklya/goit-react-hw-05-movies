import css from './nav.module.scss';
import { NavLink } from "react-router-dom"
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: inherit;

  &.active {
    color: #f97200;
  }
`;

const Nav = () => (
  <header className={css.header}>
    <nav className={css.nav}>
      <StyledLink to="/" end className={css.link}>
        Home
      </StyledLink>
      <StyledLink to="/movies" className={css.link}>
        Movies
      </StyledLink>
    </nav>
  </header>
);

export default Nav;