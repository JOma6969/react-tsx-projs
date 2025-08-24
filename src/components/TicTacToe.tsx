import React, { useEffect, useState } from "react";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<string[]>([...Array(9).fill("")]); // the board
  const [moveIndex, setMoveIndex] = useState<number[]>([]); // the array to store the indexes of the boxes clicked
  const [isX, setIsX] = useState<boolean>(true); // determine if it is X's turn or O's turn
  const [winningLine, setWinningLine] = useState<number[]>([]); // get the winning line and set it to green
  const [isThereAWinner, setIsThereAWinner] = useState<boolean | undefined>(
    undefined
  ); // check if there is a winner (The name isn't all that descriptive)
  const [winner, setWinner] = useState<string | null>(null); // get the winner when the winner wins

  useEffect(() => {
    const winningLines: number[][] = [
      // the lines that will determine when the user has won
      // vertical:
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // horizontal:
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // diagonal:
      [0, 4, 8],
      [2, 4, 6],
    ];

    const checkWinner = () => {
      // a function to check if there is a winner
      for (let i = 0; i < winningLines.length; i++) {
        // looping through it to get each line instance
        const [a, b, c] = winningLines[i]; // destructure for easy access
        // checking if they match (i.e have the same val)
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
          setWinner(board[a]); // set the winner to the letter and not the index
          setWinningLine([a, b, c]); // set the winning line to the indexs
          return a; // return the index
        }
      }
    };

    if (board.every((tile) => tile !== "")) {
      // check if the board is full and there is no winner
      setIsThereAWinner(false); // then setting the "isThereWInner" state to false
    }

    checkWinner(); // call the checkWInner function
  }, [board]); // run everytime the board changes

  const handleclick = (i: number) => {
    const replica = [...board]; // replicate the board
    if (replica[i].trim()) return; // check if the tile is already occupied, if so, do nothing and exit the function
    if (winner !== null) return; // checking if there is already a winner, if so, do nothing and exit the function
    setMoveIndex((prev) => [...prev, i]); // updating hte moveIndex array to store the last move
    replica[i] = isX ? "X" : "O"; // then modify to replica by setting the index to either "X" or "O" depending on the isX state
    setIsX((prev) => !prev); // change the isX state
    setBoard(replica); // update the board state by setting it to replica
  };

  const handleRestart = () => {
    // a function to rest all vals
    setBoard([...Array(9).fill("")]);
    setIsX(true);
    setMoveIndex([]);
    setWinningLine([]);
    setWinner(null);
    setIsThereAWinner(undefined);
  };

  const handleUndo = () => {
    // function that uses the movesIndex arr to handle the undo
    const movesReplica = [...moveIndex];
    const boardReplica = [...board];
    const lastEle = movesReplica[movesReplica.length - 1];
    boardReplica[lastEle] = "";
    movesReplica.pop();
    setMoveIndex(movesReplica);
    console.log(moveIndex);
    setIsX((prev) => !prev);
    setBoard(boardReplica);
  };

  return (
    <div className="flex tictactoe items-center justify-center flex-col h-screen">
      <h1 className="lg:text-5xl font-bold tracking-[4px] mb-4">
        Tic Tac Toe Game!
      </h1>
      <div className="grid grid-cols-3 gap-2 w-fit">
        {board.map((item, i) => (
          <button
            key={i}
            className={`size-20 cursor-pointer border-4 text-3xl font-semibold rounded-md ${
              winningLine.includes(i) ? "border-green-600" : "border-white"
            } ${
              isThereAWinner === false && winner === null
                ? "!border-red-900"
                : "border-black"
            }`}
            onClick={() => handleclick(i)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 mb-5 gap-2 mt-4">
        <button
          onClick={handleRestart}
          disabled={moveIndex.length === 0}
          className="cursor-pointer disabled:opacity-[0.5] border-2 py-2 w-28 hover:rounded-md hover:text-white hover:font-bold transition-all duration-700 hover:bg-red-400"
        >
          Restart
        </button>
        <button
          onClick={handleUndo}
          disabled={
            moveIndex.length === 0 ||
            winner !== null ||
            (isThereAWinner === false && board.every((tile) => tile !== ""))
          }
          className="cursor-pointer disabled:opacity-[0.5] border-2 py-2 px-8"
        >
          Undo
        </button>
      </div>
      {isThereAWinner === false &&
        board.every((tile) => tile !== "") &&
        !winner && <p>It is a tie!. kindly restart the game to continue.</p>}
      {!winner && !board.every((tile) => tile !== "") && (
        <p>The next player is {isX ? "X" : "O"}</p>
      )}
      {winner && <p>The winner is {winner} kindly restart the game</p>}
    </div>
  );
};

export default TicTacToe;
