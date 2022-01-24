import { useDispatch } from 'react-redux'
// Import our toggleTimer action
import { toggleTimer, resetTimer, deleteTimer } from '../actions'
import './TimerView.css';
import { formatTime } from '../utils';

export default function TimerView(props) {
  // Extract these specific props to use in the component
  const { index, timer } = props
  const dispatch = useDispatch()

  return (
    <div className="TimerView">
      <h2>{timer.name}</h2>
      <h1>{formatTime(timer.time)}</h1>
      <button
        onClick={() => dispatch(toggleTimer(index))}
      >
        {timer.isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={() => dispatch(resetTimer(index))}>Reset</button>
      <button onClick={() => dispatch(deleteTimer(index))}>Delete</button>
    </div>
  )
}