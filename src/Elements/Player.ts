import { BaseElement } from "../BaseElement";
import { IGameState } from "../thegame";

export class Player extends BaseElement {
  constructor(gameContainer: CanvasRenderingContext2D) {
    super(gameContainer);
  }

  update = (progress: number, gameState: IGameState) => {
    if (gameState.pressedKeys.right) {

    }
  }

  draw = (gameState: IGameState) => {
    const ctx = this.context;
    const {width, height} = gameState.canvas;
    ctx.clearRect(0, 0, width, height)

    ctx.save()
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(15, 30)
    ctx.lineTo(30, 0)
    ctx.lineTo(15, 10)
    ctx.closePath()
    ctx.stroke()
    ctx.restore()
  }
}