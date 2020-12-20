import { BaseElement } from "../BaseElement";
import { IGameState } from "../thegame";

export class Menu {
  show: boolean;
  container: HTMLDivElement;

  constructor() {    
    this.container = document.createElement('div');    
    this.container.classList.add('menu');
    this.container.innerText = 'paused';
    this.container.style.display = 'none';

    document.body.appendChild(this.container);
    
    window.addEventListener('keydown', (e) => {
      this.show = !this.show;
    })
  }

  update = (progress: number, gameState: IGameState) => {
    
  }

  draw = () => {
    this.container.style.display = this.show ? 'flex' : 'none';    
  }
}