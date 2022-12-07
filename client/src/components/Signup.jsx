import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Errors from './Errors'
import styled from 'styled-components'
import { MainContainer, HorizontalLine, InputForm, LoginPageBtn, LogoText, SignInput, SignupPageBtn } from '../styles'

const Signup = ({ errors, handleUserLoginAndSignup }) => {
  const history = useHistory()
  const [state, setState] = useState({})

  const onChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(state)
    }
    fetch('/users', config)
      .then(resp => resp.json())
      .then(data => handleUserLoginAndSignup(data))
  }

  return (
    <MainContainer>
      <HorizontalLine />
      <LogoText>Track your workouts any day, Anywhere!</LogoText>
      <HorizontalLine />
      <br />
      <Errors errors={errors} />
      <InputForm onSubmit={onSubmit}>
        <LabelText>Create your Username:</LabelText>
        <SignInput onChange={onChange} name='username' type='text' />
        <LabelText>Create your Password:</LabelText>
        <SignInput onChange={onChange} name='password' type='password' />
        <ConfirmText>Confirm your Password:</ConfirmText>
        <SignInput onChange={onChange} name='password_confirmation' type='password' />
        <SignupPageBtn type='submit' content='Signup' onClick={() => history.push('/userhomepage')} />
        <HorizontalLine />
      </InputForm>
      <FooterText>Already have an account?</FooterText>
      <LoginPageBtn type='submit' content='Log In' onClick={() => history.push('/login')} />
    </MainContainer>
  )
}

const LabelText = styled.h5`
  margin: 0.4rem 0 0 0;
  color: white;
`;

const ConfirmText = styled.h5`
  margin: 0.4rem 0 0 0;
  color: white;
  font-style: italic;
`;

const FooterText = styled.h5`
  margin: -2rem 0 0 0;
  color: white;
  letter-spacing: 0.2rem;
`;

export default Signup