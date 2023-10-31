class Food {
  left = 0;
  top = 0;
  constructor(){
    this.change()
  }
  change(){
    this.left = Math.round(Math.random() * 39) * 10
    this.top = Math.round(Math.random() * 39) * 10
    document.getElementById('food')!.style.left = this.left + 'px';
    document.getElementById('food')!.style.top = this.top + 'px';
  }
}
export default Food