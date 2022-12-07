import styled from 'styled-components'

function AddExerciseBtn({ type, content }) {
  return <AddExerciseBtnStyle type={type}>{content}</AddExerciseBtnStyle>
}

const AddExerciseBtnStyle = styled.button`
  background: #14163c;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 60%;
  height: 2.1rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  margin: 0.8rem 0 0.2rem 4.4rem;
`;

export default AddExerciseBtn