
const Game =()=>{

    return (

        <section className="game">
        <div className="game__status">Next player X</div>
        <div className="game__board"> 
            <div className="game__board--rowsContainer">
                <div className="game__board--row">
                    <button className="game__board--square" > O </button>
                    <button className="game__board--square" > X </button>
                    <button className="game__board--square" > X </button>
                </div>
                <div className="game__board--row">
                    <button className="game__board--square" > O </button>
                    <button className="game__board--square" > O </button>
                    <button className="game__board--square" > O </button>
                </div>
                <div className="game__board--row">
                    <button className="game__board--square" > X </button>
                    <button className="game__board--square" > O </button>
                    <button className="game__board--square" > X </button>
                </div>
              </div>
        </div>
        <button className="game__restart">restart</button>
        <div className="game__history--title">Game history</div>
        <div className="game__history">
            <ol className="game__history--orderedList">
                <li > <button className="game__history--btn" >Go to game start</button> </li>
                <li > <button className="game__history--btn" >Go to move #1</button> </li>
                <li > <button className="game__history--btn" >Go to move #2</button> </li>
                <li > <button className="game__history--btn" >Go to move #3</button> </li>
                <li > <button className="game__history--btn" >Go to move #4</button> </li>
                <li > <button className="game__history--btn" >Go to move #5</button> </li>
                <li > <button className="game__history--btn" >Go to move #6</button> </li>
                <li > <button className="game__history--btn" >Go to move #7</button> </li>
                <li > <button className="game__history--btn" >Go to move #8</button> </li>
                <li > <button className="game__history--btn" >Go to move #9</button> </li>
            </ol>
        </div>
    </section>

    )


}

export default Game