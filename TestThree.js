// Прототипное наследование
function Animal(name) {
    this.name = name;
    this.speed = 0;
}
Animal.prototype.stop = function () {
    this.speed = 0;
    console.log('Стоит');
}
Animal.prototype.run = function (speed) {
    this.speed += speed;
    console.log(this.name + ' бежит, скорость ' + this.speed); 
}

function Rabbit(name) {
    Animal.apply(this, arguments);
    this.mast = 'желтый';
 }
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;
Rabbit.prototype.jump = function () {
    console.log('Прыгает');
}
Rabbit.prototype.run = function (speed) {
    Animal.prototype.run.apply(this, arguments);
    this.jump();
}

rabbitВася = new Rabbit('Вася');
rabbitВася.jump;
rabbitВася.run(500);

