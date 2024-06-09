import GameBoard from "./component/GameBoard.jsx"
import Player from "./component/Player.jsx"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player intialName="player1" symbol="X" />
          <Player intialName="player2" symbol="O" />
        </ol>
        <GameBoard/>
      </div> 
    </main>
  )
}

export default App
