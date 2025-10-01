import { useEffect, useRef, useState } from "react";
import Doll from '@/components/doll';
import Contestant from '@/components/contestant/index';
import Finish from '@/components/finish/index';
import PlayGround from '@/components/playground/index';
import DollMusic from './sounds/DollMusic';

type ContestantType = {
  x: number
  y: number
  name: string
  gameOver: boolean
  speed: number
}

export default function RedLightGreenCom() {
  const [gameStarted, setGameStarted] = useState(false); // Track game state
  const [state, setState] = useState({});
  const contestants = useRef<ContestantType[]>([]);
  const finishedContestants = useRef<ContestantType>();
  const playerConstant = useRef<ContestantType>(
    { x: Math.random() * (960 - 50), y: 660, name: 'player', gameOver: false, speed: 2 }
  );
  const greenLight = useRef(true);
  const greenLightCounter = useRef(100);
  const divRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const render = (timeStamp: number) => {
    greenLightCounter.current--;

    if (greenLightCounter.current < 0) {
      greenLight.current = !greenLight.current;
      greenLightCounter.current = 100 + Math.random() * 100;
    }

    if (playerConstant.current.y < 100) {
      finishedContestants.current = playerConstant.current;
    }

    for (let i = 0; i < 50; i++) {
      if (contestants.current[i].y < 100) {
        finishedContestants.current = contestants.current[i];
      }
      if (greenLight.current && !contestants.current[i].gameOver) {
        contestants.current[i].y -= contestants.current[i].speed;
      } else {
        if (Math.random() * 1000 < 1) {
          contestants.current[i].gameOver = true;
        }
      }
    }

    setState({});
    if (!finishedContestants.current) {
      animationRef.current = requestAnimationFrame(render);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    contestants.current = [];
    for (let i = 0; i < 50; i++) {
      contestants.current.push(
        { x: Math.random() * 1460, y: 660, name: i.toString(), gameOver: false, speed: 0.5 + Math.random() * 0.3 }
      );
    }
    divRef.current?.focus();
    animationRef.current = requestAnimationFrame(render);
  };

  const stopGame = () => {
    setGameStarted(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (greenLight.current && !playerConstant.current.gameOver) {
      playerConstant.current.y -= playerConstant.current.speed;
    } else {
      playerConstant.current.gameOver = true;
    }
  };

  return (
    <div tabIndex={0} ref={divRef} onKeyDown={onKeyDown}>
      {!gameStarted ? (
        <button onClick={startGame} className="bg-green-500 text-white px-4 py-2 rounded">
          Start Game
        </button>
      ) : (
        <>
          <button onClick={stopGame} className="bg-red-500 text-white px-4 py-2 rounded">
            Stop Game
          </button>
          <DollMusic greenLight={greenLight.current} greenLightDuration={greenLightCounter.current} />
          {finishedContestants.current && (
            <div className='absolute z-10 top-0 right-0 left-0 bottom-0 bg-[rgba(195,109,109,0.7)] grid items-center flex justify-center'>
              {finishedContestants.current.name} has finished
            </div>
          )}
          <PlayGround>
            <Finish />
            <Doll />
            <Contestant x={playerConstant.current.x} y={playerConstant.current.y} name={playerConstant.current.name} gameOver={playerConstant.current.gameOver} />
            {contestants.current.map(c => (
              <Contestant key={c.name} x={c.x} y={c.y} name={c.name} gameOver={c.gameOver} />
            ))}
          </PlayGround>
        </>
      )}
    </div>
  );
}
