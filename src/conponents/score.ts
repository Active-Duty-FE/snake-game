import Snake from './snake'
import Food from './food'

class Score {
  score = 0
  level = 1
  constructor(){
  }
  changeScore(){
      this.score +=1
      document.getElementById('score')!.innerHTML = this.score.toString()
      this.levelUp()
  }
  levelUp(){
    if(this.score % 2 ===0){
      this.level += 1
      document.getElementById('level')!.innerHTML = this.level.toString()
    }
  }
}
export default Score