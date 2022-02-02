let plumber = {
    right: true,
    left: false,
    moving: false,
    up: false,
    down: false,
}

const game = {
    animation: null,
}
export const animate = () => {
    plumber = document.getElementById('plumber');
    document.addEventListener("keydown", (e) => {
        plumber.moving = true;
        if (e.code === 'ArrowRight') plumber.right = true;
        if (e.code === 'ArrowLeft') plumber.left = true;
        if (e.code === 'ArrowUp') plumber.up = true;
        if (e.code === 'ArrowDown') plumber.down = true;
    })
    document.addEventListener('keyup', function (e) {
        plumber.moving = false;
        if (e.code === 'ArrowRight') plumber.right = false;
        if (e.code === 'ArrowLeft') plumber.left = false;
        if (e.code === 'ArrowUp') plumber.up = false;
        if (e.code === 'ArrowDown') plumber.down = false;

    })
    let i = 0;
    setInterval(() => {
        plumber.classList.remove(...moves)
        if (plumber.moving) {
            plumber.classList.add(moves[i % moves.length])
            i++
        } else {
            i = 0;
        }
    }, 100);
    game.animation = window.requestAnimationFrame(move);
}
const moves = ['move1', 'move2'];
const directions = ['right', 'left', 'vertical'];

function move() {
    let pCurrentH = plumber.offsetLeft;
    let pCurrentV = plumber.offsetTop;
    if (plumber.right) {
        plumber.classList.remove(...directions);
        plumber.classList.add('right');
        pCurrentH += 5;
    }
    if (plumber.left) {
        plumber.classList.remove(...directions);
        plumber.classList.add('left');
        pCurrentH -= 5;
    }
    if (plumber.up) {
        plumber.classList.remove(...directions);
        plumber.classList.add('vertical');
        pCurrentV -= 5;
    }
    if (plumber.down) {
        plumber.classList.remove(...directions);
        plumber.classList.add('vertical');
        pCurrentV += 5;
    }
    plumber.style.top = pCurrentV +'px';
    plumber.style.left = pCurrentH + 'px';
    game.animation = window.requestAnimationFrame(move);
}