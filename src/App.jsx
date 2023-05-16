import { useState, useEffect } from 'react';
import { Cell } from "./components/Cell"


function App() {
  const [ cells, setCells ] = useState(["","","","","","","","",""]);
  const [ go, setGo ] = useState('circle');
  const [winnigMessage, setWinnigMessage] = useState('');

  const message = `it is now ${ go }'s go`;

  const checkScore = () => {
    const winningCombos = [
      [0,1,2],[3,4,5], [0,3,6], 
      [2,5,8], [6,7,8], [1,4,7],
      [0, 4, 8], [2, 4, 6]
    ]

    winningCombos.forEach( array => {
      let circleWins = array.every( cell => cells[cell] === 'circle' )
      if( circleWins ){
        setWinnigMessage( 'Circle wins' )
        return;
      }
    } )

    winningCombos.forEach( array => {
      let crossWins = array.every( cell => cells[cell] === 'cross' )
      if( crossWins ){
        setWinnigMessage( 'Cross Wins' )
        return;
      }
    } )
  }

  useEffect( () => {
    checkScore();
  },  [cells])


  

  return (
    <div className="app">
      <div className="gameboard">
        {
          cells.map( (cell, index) => (
            <Cell 
              key={index}
              id={index}
              cell={cell}
              cells={cells}
              setCells={setCells}
              setGo={setGo}
              go={go}
              winnigMessage={winnigMessage}
            />
          ) )
        }
      </div>
      <p>{ winnigMessage || message}</p>
    </div>
  )
}

export default App
