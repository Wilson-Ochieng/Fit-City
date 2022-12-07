import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { MainContainer, HorizontalLine } from '../styles'

const Home = () => {
    const history = useHistory()

    return (
        <MainContainer>
            <LogoText>Fit City</LogoText>
            <HorizontalLine />
            <Instructions>Click to Login</Instructions>
            <LogIn onClick={() => history.push('/login')}>Log In</LogIn>
            <Instructions>Click below to Sign Up</Instructions>
            <SignUp onClick={() => history.push('/signup')}>Sign Up</SignUp>
        </MainContainer>
    )
}

const LogoText = styled.h2`
  margin: 3rem 0 1rem 0;
  color : #14163c;
  font-size:25px;
  font-weight:bold;
`;

const Instructions = styled.h4`
  margin: 1rem 0 0 0;
  color: #000000
`;

const LogIn = styled.button`
  margin: 2rem 0 3rem 0;
  background: #14163c;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 40%;
  height: 3rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: white;
`;

const SignUp = styled.button`
  margin: 2rem 0 1rem 0;
  background: #14163c;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 40%;
  height: 3.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: white;
`;

export default Home