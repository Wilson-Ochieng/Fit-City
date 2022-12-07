import styled from 'styled-components'

function LoginButton({ type, content }) {
  return <LoginButtonStyle type={type}>{content}</LoginButtonStyle>
}

const LoginButtonStyle = styled.button`
  background: #14163c;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  width: 50%;
  height: 3.5rem;
  border: none;
  border-radius: 8rem;
  cursor: pointer;
  color: white;
  margin: 0.3rem 0 0 0;
`;

export default LoginButton