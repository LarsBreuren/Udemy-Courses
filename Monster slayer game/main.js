new Vue({
    el: '#app',
    data: {
      HP: { youHp: 100, monsterHp: 100,},
      log: [],
      pColor: 'green',
      mColor: 'green'
   },
methods: {
    hit: function(attack, max){
    let hitOnYou = Math.floor(Math.random() * max)
    let hitOnMonster = Math.floor(Math.random() * max)

    this.HP.youHp = this.HP.youHp - hitOnYou
    this.HP.monsterHp = this.HP.monsterHp - hitOnMonster

    this.log.unshift('Player got ' + attack + ' for ' + hitOnYou + '!')
    this.log.unshift('Monster got ' + attack + ' for ' + hitOnMonster + '!')
      
    if(this.HP.youHp < 1){
      this.pColor ='red'
      this.log.unshift('Player died! ')
    } else if (this.HP.monsterHp < 1){
      this.mColor ='red'
      this.log.unshift('Monster died! ')
    }
    },
     heal: function(){
      let healPlayer = Math.floor(Math.random() * 30)
      let healMonster= Math.floor(Math.random() * 30)
  
      this.HP.youHp = this.HP.youHp + healPlayer
      this.HP.monsterHp = this.HP.monsterHp + healMonster

      if (this.HP.youHp > 100){
        this.HP.youHp = 100;
        this.log.unshift('Player got max HP!')
      } else{
        this.log.unshift('Player got healed for ' + healPlayer + '!')
      }

      if (this.HP.monsterHp > 100){
        this.HP.monsterHp = 100;
        this.log.unshift('Monster got max HP!')
      } else{
        this.log.unshift('Monster got healed for ' + healMonster + '!')
      }
     },
     newGame: function(){
       this.HP.youHp = 100;
       this.HP.monsterHp = 100;
       this.log = [];
       this.pColor ='green'
       this.mColor ='green'
     },
     giveUp: function(){
      this.HP.youHp = 0;
      this.pColor ='red'
      alert('You gave up!')
     }
    }   
  });
  