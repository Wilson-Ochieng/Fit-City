import styled from 'styled-components'

function AddBtn({ type, content }) {
    return <AddBtnStyle type={type}>{content}</AddBtnStyle>
}

const AddBtnStyle = styled.button`
  background:#14163c;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 40%;
  height: 1.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  margin: 1.1rem 0 0 0;
`;

export default AddBtn