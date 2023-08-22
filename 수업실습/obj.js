const me = {
    height : 161,
    cooking : good,
    favorate: peachBingsu,
    coding : function(lang){
        lang.levelUp()
    }
}

const js = {
    level: 1,
    levelUp : function(){
        this.level++;
    }
}

function RobotFactory(fruit) {
    this.name = fruit[Math.floor(Math.random()*(fruit.length))]
}
const fruit = ['복숭아','망고','배']
const robot= new RobotFactory(fruit)
console.log(robot)