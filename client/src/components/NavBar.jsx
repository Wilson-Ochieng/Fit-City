import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Logo } from '../styles'

const NavBar = ({ currentUser }) => {

  return (
    <Wrapper>
      <Nav>
        <Logo>{currentUser ? `User: ${currentUser.username}` : null}</Logo>
        <Button as={Link} to='/login' variant='outline'>Switch User?</Button>
        <Button as={Link} to='/logout' variant='fill'>Log Out</Button>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  flex-direction: column;
  letter-spacing: 0.1rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 6px;
  right: 3px;
`;

export default NavBar