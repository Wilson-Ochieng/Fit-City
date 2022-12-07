import styled from 'styled-components'

function AddBtn({ type, content }) {
    return <AddBtnStyle type={type}>{content}</AddBtnStyle>
}

const AddBtnStyle = styled.button`
  background: ;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 40%;
  height: 1.1rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: #2b3099;
  font-weight: bold;
  margin: -0.5rem 0 0 0;
`;

export default AddBtn