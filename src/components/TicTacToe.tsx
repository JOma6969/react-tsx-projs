import { useEffect, useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState<string[]>([...Array(9).fill("")]);
  const [moveIndex, setMoveIndex] = useState<number[]>([]);
  const [isX, setIsX] = useState<boolean>(true);
  const [winningLine, setWinningLine] = useState<number[]>([]);
  const [isThereAWinner, setIsThereAWinner] = useState<boolean | undefined>(
    undefined
  );
  const [winner, setWinner] = useState<string | null>(null);
  
  console.log(winner);
  
  useEffect(() => {
    const winningLines: number[][] = [
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
      for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
          setWinner(board[a]);
          setWinningLine([a, b, c]);
          return a;
        }
      }
    };

    if (board.every((tile) => tile !== "")) {
      setIsThereAWinner(false);
    }

    checkWinner();
  }, [board]);

  const handleclick = (i: number) => {
    const replica = [...board];
    if (replica[i].trim()) return;
    if (winner !== null) return;
    setMoveIndex((prev) => [...prev, i]);
    replica[i] = isX ? "X" : "O";
    setIsX((prev) => !prev);
    setBoard(replica);
  };

  const handleRestart = () => {
    setBoard([...Array(9).fill("")]);
    setIsX(true);
    setMoveIndex([]);
    setWinningLine([]);
    setWinner(null);
    setIsThereAWinner(undefined);
  };

  const handleUndo = () => {
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
    <div className="flex items-center justify-center flex-col h-screen">
      <h1 className="lg:text-5xl font-bold tracking-[4px] mb-4">
        Tic Tac Toe Game!
      </h1>
      <div className="grid grid-cols-3 gap-2 w-fit">
        {board.map((item, i) => (
          <button
            key={i}
            className={`size-20 cursor-pointer border-4 text-3xl font-semibold rounded-md ${
              winningLine.includes(i) ? "border-green-600" : "border-black"
            } ${
              isThereAWinner === false && winner === null
                ? "border-red-600"
                : "border-black"
            }`}
            onClick={() => handleclick(i)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <button
          onClick={handleRestart}
          disabled={moveIndex.length === 0}
          className="cursor-pointer disabled:opacity-[0.5] border-2 py-2 px-8"
        >
          Restart
        </button>
        <button
          onClick={handleUndo}
          disabled={moveIndex.length === 0}
          className="cursor-pointer disabled:opacity-[0.5] border-2 py-2 px-8"
        >
          Undo
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
