import { IGameState } from "./thegame"

export abstract class BaseElement {

  constructor(protected context: CanvasRenderingContext2D) {

  }

  abstract update = (progress: number, gameState: IGameState) => { }
  abstract draw = (gameState: IGameState) => { }
}