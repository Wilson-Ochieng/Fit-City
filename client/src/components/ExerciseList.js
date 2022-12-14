import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import NavBar from './NavBar'
import Exercise from './Exercise'
import AddExerciseForm from './AddExerciseForm'
import Errors from './Errors'
import styled from 'styled-components'
import { ExerciseContainer, ScrollBar } from '../styles'

// const ExerciseList = ({ handleNewExercise, exercises, setExercises, currentUser, setCurrentUser }) => {
const ExerciseList = ({ currentUser, setCurrentUser }) => {
    const history = useHistory()
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetch('/exercises')
            .then(resp => resp.json())
            .then(data => setExercises(data))
    }, [])

    const addExercise = (data) => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('/exercises', config)
            .then(resp => resp.json())
            .then(() => setExercises([...exercises, data]))
        // .then(data => handleNewExercise(data))
    }

    const exercisesList = exercises.map((exercise, index) => <Exercise key={index} exercise={exercise} exercises={exercises} setExercises={setExercises} />)

    return (
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <ExerciseContainer>
                <AddExerciseForm addExercise={addExercise} />
            </ExerciseContainer>
            <BackBtn onClick={() => history.push('/userhomepage')}>Go back to Workouts</BackBtn>
            <ScrollBar>
                {exercisesList}
            </ScrollBar>
        </div>
    )
}

const BackBtn = styled.button`
  background: #14163c;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  width: 65%;
  height: 2.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  margin: 1.0em 0 0 3rem;
`;


export default ExerciseList