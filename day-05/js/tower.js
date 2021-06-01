function createTower() {

    const tower = {

    };
    return tower;
}

function createEnemy() {

    const enemy = {
        health: 3,
        element: document.createElement('div'),
        myInterval: null,
        readHealth() {
            console.log(this, this.health);
            return this.health;
        },
        createElement() {
            this.element.innerHTML = 'enemy';
            document.body.appendChild(this.element);
            this.element.style.position = 'absolute';
            this.element.style.left = 0;
            this.myInterval = setInterval(  () => {
                console.log(this);
                this.move()
            }, 2000 );
        },
        move() {
            console.log(this.getLeft())
            this.element.style.left = parseInt(this.getLeft()) + 20 + 'px';
            if (parseInt(this.getLeft()) > 200) {
                alert('you lost');
                clearInterval(this.myInterval);
            }
        },
        getLeft() {
            return this.element.style.left;
        },
        takeDamage() {
            this.health -= 1;
            if (this.health < 1) {
            
                clearInterval(this.myInterval);
            }
        }


    };
    return enemy;
}


const enemies = [];

setInterval(function () {
    const enemy1 = createEnemy();
    enemy1.readHealth();
    enemy1.createElement();
    enemies.push(enemy1);
}, 2000);



document.addEventListener('click', () => {

    enemies.forEach( enemy => {
        enemy.takeDamage();
    })
    
})  
