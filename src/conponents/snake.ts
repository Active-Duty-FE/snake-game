import Food from './food'
import Score from './score'
class Snake {
  direction = '';
  horPixel = 0
  verPixel = 0
  food = new Food()
  score = new Score()
  speed = 0
  snake = document.getElementById('snake')!
  snakeHead = document.querySelector('#snake > div') as HTMLElement
  constructor(speed = 200){
    this.speed = speed
    this.changeDirection()
    this.myError()
  }
  run(){
    this.transfrom()
    this.snakeStyle()
    switch (this.direction) {
      case 'right':
        this.horPixel += 10
        this.snakeHead.style.left = this.horPixel + 'px'
        break;
      case 'left':
        this.horPixel -= 10
        this.snakeHead.style.left = this.horPixel + 'px'
        break;
      case 'up':
        this.verPixel -= 10
        this.snakeHead.style.top = this.verPixel + 'px'
        break;
      case 'down':
        this.verPixel += 10
        this.snakeHead.style.top = this.verPixel + 'px'
        break;
      default:
        break;
    }
    setTimeout(() => {
      try {
        this.checkCollapse()
        this.myError()
      } catch (error) {
        alert('游戏结束')
        return false
      }
      this.run()
    },this.speed)
  }
  transfrom(){
    if(this.food.left === this.horPixel && this.food.top === this.verPixel){
      this.food.change()
      this.score.changeScore()
      this.makeChild()
    }
  }
  myError(){
    if(this.horPixel < 0 || this.horPixel > 390 || this.verPixel < 0 || this.verPixel > 390){
      throw new Error('nono')
    }
  }
  makeChild(){
    this.snake.insertAdjacentHTML('beforeend','<div></div>')
  }
  snakeStyle(){
    const childern = document.querySelectorAll('#snake > div')
    for(let i = childern.length - 1; i > 0; i--){
      (childern[i] as HTMLElement).style.left = (childern[i - 1] as HTMLElement).style.left;
      (childern[i] as HTMLElement).style.top = (childern[i - 1] as HTMLElement).style.top;
    }
  }
  checkCollapse(){
    const head = document.querySelector('#snake > div') as HTMLDivElement
    const tails = document.querySelectorAll('#snake > div:not(:first-child)')
    if(tails.length >= 4){
      for(let i=0; i < tails.length; i++){
        if(head.style.top === (tails[i] as HTMLElement).style.top && head.style.left === (tails[i] as HTMLElement).style.left){
          throw new Error()
        }
      }
    }
  }
  changeDirection(){
    window.addEventListener('keydown',(e) => {
      if(e.key === 'ArrowUp'){
        if(!this.checkUturn('up')){
          this.direction = 'up'
        }else return
      }else if(e.key === 'ArrowLeft'){
        if(!this.checkUturn('left')){
          this.direction = 'left'
        }else return
      }else if(e.key === 'ArrowRight'){
        if(!this.checkUturn('right')){
          this.direction = 'right'
        }else return
      }else if(e.key === 'ArrowDown'){
        if(!this.checkUturn('down')){
          this.direction = 'down'
        }else return
      }else return;
    })
    this.run()
  }
  checkUturn(direction:string){
    const head = document.querySelector('#snake > div') as HTMLDivElement
    const secondHead = document.querySelector('#snake > div:nth-of-type(2)') as HTMLDivElement
    let uTurn = false;
    const headTop = parseInt(head.style.top.replace('px',''))
    const headLeft = parseInt(head.style.left.replace('px',''))
    if(secondHead){
      if(direction === 'up' && headTop - 10 + 'px' === secondHead.style.top){
        uTurn = true
      }else if(direction === 'down' && headTop + 10 + 'px' === secondHead.style.top){
        uTurn = true
      }else if(direction === 'left' && headLeft - 10 + 'px' === secondHead.style.left){
        uTurn = true
      }else if(direction === 'right' && headLeft + 10 + 'px' === secondHead.style.left){
        uTurn = true
      }
    }
    return uTurn
  }
}
export default Snake