import * as React from 'react'

import { useLocalStorageState} from '../../utils/syncLocalStorage'
import { calculateStatus, calculateNextValue, calculateWinner } from '../../utils/calculations'

import Board from '../board/board.component'

const Game =()=>{

// initial array/squares values
const initialSquares = Array(9).fill(null)
/** 
 * here we use the custom hook useLocalStorageState to preserve the state in localStorage
 * also we returned here the steps into managed state ... */
const [currentStep, setCurrentStep] = useLocalStorageState('tic-tac-toe:step', 0)
const [history, setHistory] = useLocalStorageState('tic-tac-toe:history', [initialSquares])

const currentSquares = history[currentStep]

/** ... and then we derived other values of state based on that squares state, 
 * and even other derived values of state */
  const nextValue = calculateNextValue(currentSquares)
  const winner = calculateWinner(currentSquares)
/** state value that's derived by state - all put together to get the status */
  const status = calculateStatus(winner, currentSquares, nextValue)

/** This function gets called by the click handler
   * @param {String} square is an index
   * a.e. the center square, will be `4`.*/
function selectSquare(square) {
/** if there's a winner; then we'll return. 
 *  Also, if there's a value in the squares at that particular index, then we'll have that return as well. */
    if (winner || currentSquares[square]) {
        return
    }
    const newHistory = history.slice(0, currentStep + 1)
/** To avoid MUTATION (for more info, see README.md)
 *  Instead of updating the squares directly, here's a copy of the squares.*/
    const squaresCopy = [...currentSquares]
    squaresCopy[square] = nextValue // the value of whoveres turn it was

    setHistory([...newHistory, squaresCopy])
    setCurrentStep(newHistory.length)

    }

function restart() {
    setHistory([initialSquares])
    setCurrentStep(0)
    }

    const moves = history.map((stepSquares, step) => {
        const desc = step === 0 ? 'Go to game start' : `Go to move #${step}`
        const isCurrentStep = step === currentStep
        return( 
        <li key={step} >
        <button className="game__history--btn" disabled={isCurrentStep} onClick={() => setCurrentStep(step)} >
          {desc} {isCurrentStep ? '(current)' : null}
        </button> 
        </li>)
      })

    return (
        <section className="game">
                <div className="game__status">{status}</div> 
                <Board onClick={selectSquare} squares={currentSquares}/>
                <button className="game__restart" onClick={restart}>
                    restart
                </button>
            <div className="game__history--title">Game history</div>
            <div className="game__history">
                <ol className="game__history--orderedList">
                    {moves}
                </ol>
            </div> 
        </section>
    )

}

export default Game
