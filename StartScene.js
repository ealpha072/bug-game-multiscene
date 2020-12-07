class StartScene extends Phaser.scene {
  constructor(){
    super({key:'StartScene'})
  }
  create(){
    this.add.text(100,100, 'Welcome to the game');
    this.input.on('ponterup',()=>{
      this.scene.stop('StartScene');
      this.scene.start('GameScene')
    })
  }
}