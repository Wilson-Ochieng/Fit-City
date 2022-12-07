import styled from 'styled-components'

function LoginPageBtn({ type, content, onClick }) {
  return <LoginPageBtnStyle type={type} onClick={onClick}>{content}</LoginPageBtnStyle>
}

const LoginPageBtnStyle = styled.button`
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

export default LoginPageBtn