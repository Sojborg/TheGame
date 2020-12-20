import { Player } from "./Elements/Player";
import { Menu } from "./Menu/Menu";

interface IPressedKeys {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  escape: boolean;
}

interface ICanvas {
  height: number;
  width: number;
}

export interface IGameState {
  pressedKeys: IPressedKeys;
  inMenu: boolean;
  canvas: ICanvas;
}

class TheGame {
  gameCanvas: HTMLCanvasElement = null;
  gameContext: CanvasRenderingContext2D = null;
  lastRender = 0;
  gameState = {
    pressedKeys: {
      left: false,
      right: false,
      up: false,
      down: false,
      escape: false
    },
    inMenu: false,
    canvas: {
      height: 500,
      width: 500
    }
  } as IGameState
  keyMap: {[key: string]: string} = {
    'ArrowRight': 'arrowRight',
    'ArrowLeft': 'arrowLeft',
    'ArrowUp': 'arrowUp',
    'ArrowDown': 'arrowDown',
    'Escape': 'escape',
  }
  menu: Menu = null;
  player: Player = null;

  constructor() {
    this.gameCanvas = document.createElement('canvas');
    this.gameCanvas.width = 500;
    this.gameCanvas.height = 500;
    this.gameContext = this.gameCanvas.getContext('2d');
    this.gameCanvas.classList.add('game-container');
    document.body.appendChild(this.gameCanvas);
    
    window.addEventListener('keydown', (e) => {
      const key = this.keyMap[e.code] as keyof IPressedKeys;
      this.gameState.pressedKeys[key] = true;
    })    

    window.addEventListener('keyup', (e) => {
      const key = this.keyMap[e.code] as keyof IPressedKeys;
      this.gameState.pressedKeys[key] = false;
    })

    this.menu = new Menu();
    this.player = new Player(this.gameContext);
  }

  public run() {
    console.log('game is running');
    
    window.requestAnimationFrame(this.loop);
  }

  update = (progress: number) => {
    this.menu.update(progress, this.gameState);
    this.player.update(progress, this.gameState);
  }

  draw = () => {
    this.menu.draw();
    this.player.draw(this.gameState);
  }

  loop = (timestamp: number) => {
    const progress = timestamp - this.lastRender;

    this.update(progress);
    this.draw();

    this.lastRender = timestamp;
    window.requestAnimationFrame(this.loop);
  }
}

export const theGame = new TheGame();