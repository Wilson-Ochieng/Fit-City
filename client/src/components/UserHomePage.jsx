import NavBar from './NavBar'
import WorkoutsList from './WorkoutsList'
import styled from 'styled-components'
import { MainContainer, HorizontalLine } from '../styles'

const UserHomePage = ({ errors, setErrors, currentUser }) => {

    return (
        <MainContainer>
            <NavBar currentUser={currentUser} />
            <LogoText>Track Your WorkOut</LogoText>
            <HorizontalLine />
            <WorkoutsList errors={errors} setErrors={setErrors} />
        </MainContainer>
    )
}

const LogoText = styled.h2`
  margin: 0.5rem 0 0 0;
  color: #fff;
`;

export default UserHomePage