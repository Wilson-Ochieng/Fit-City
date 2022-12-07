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
            <Instructions>Please Log in</Instructions>
            <LogIn onClick={() => history.push('/login')}>Log In</LogIn>
            <Instructions>Or click below to Sign Up</Instructions>
            <SignUp onClick={() => history.push('/signup')}>Sign Up</SignUp>
        </MainContainer>
    )
}

const LogoText = styled.h2`
  margin: 3rem 0 1rem 0;
  color : blue;
`;

const Instructions = styled.h4`
  margin: 1rem 0 0 0;
  color: #000000
`;

const LogIn = styled.button`
  margin: 2rem 0 3rem 0;
  background: linear-gradient(to right, #0ec727 0%, #062c9e 70%);
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
  background: linear-gradient(to right, #062c9e 0%,   #0ec727 70%);
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