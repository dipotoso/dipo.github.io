var pacMen = [];

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    }
}
// Factory to make a PacMan 
function makePac() {
    // returns an object with values scaled {x: 33, y: 21}
    let pacArray = ['./image/PacMan1.png', './image/PacMan2.png',
    './image/PacMan3.png', './image/PacMan4.png'];

    let velocity = setToRandom(10);
    let position = setToRandom(200);
    // Add image to section id = game
    let game = document.getElementById('game');
    let newpac = document.createElement('img');
    newpac.style.position = 'absolute';
    newpac.src = pacArray[Math.floor(Math.random()*pacArray.length)];
    newpac.width = 50;
    newpac.style.left = position.x + 'px';
    newpac.style.top = position.y + 'px';
    game.appendChild(newpac);
    // new style of creating an object
    return {
        position,
        velocity,
        newpac
    };
}

function update() {
    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newpac.style.left = item.position.x + 'px';
        item.newpac.style.top = item.position.y + 'px';
    })
    setTimeout(update, 20);
}

function checkCollisions(item) {
    if (item.position.x + item.velocity.x + item.newpac.width > window.innerWidth ||
        item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
    if (item.position.y + item.velocity.y + item.newpac.height > window.innerHeight ||
        item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
}

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}