import { NEW_TIMER, TOGGLE_TIMER, UPDATE, RESET_TIMER, DELETE_TIMER } from '../actions';
import Timer from '../components/Timer'

const timersReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_TIMER:
      // Add a new timer, return a copy of state
      const name = action.payload.name ? action.payload.name : `Timer ${state.length}`
      return [...state, new Timer(name)]

    case TOGGLE_TIMER:
      // Invert the isRunning property of timer at index, return a copy of state
      const newState = state.map((timer, index) => {
        if (action.payload.index === index) {
          return {...timer, isRunning: !timer.isRunning}
        }
        return timer
      })
      return newState

    case RESET_TIMER:
        const updatedState = state.map((timer, index) => {
          if (action.payload.index === index) {
            return {...timer, time: 0}
          }
          return timer
        })
      return updatedState

    case UPDATE:
        return state.map((timer) => {
          if (timer.isRunning) {
            timer = { ...timer, time: timer.time += action.payload.deltaTime }
          }
          return timer
      })

    case DELETE_TIMER:
        return state.filter((timer, index) => {
          return action.payload.index !== index
    })

    default:
      return state;
  }
}

export default timersReducer;