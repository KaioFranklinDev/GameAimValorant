document.addEventListener('DOMContentLoaded', function () {
    const target = document.getElementById('target');
    const gameContainer = document.getElementById('game-container');
    const scoreElement = document.getElementById('score');
    const txtTempoReacao = document.getElementById('txtTempoReacao');
    const gameWidth = gameContainer.offsetWidth - target.offsetWidth;
    const gameHeight = gameContainer.offsetHeight - target.offsetHeight;
    let score = 0;
    let recorde = 0;
    let ocorreu;

    function record() {
        recorde = Math.max(score, recorde);
    }

    function updateScore() {
        scoreElement.textContent = `Sua pontuação é de ${score} e o recorde é ${recorde}.`;
    }

    function generateRandomPosition() {
        const x = Math.random() * gameWidth;
        const y = Math.random() * gameHeight;
        return { x, y };
    }

    function moveTarget() {
        const { x, y } = generateRandomPosition();
        target.style.left = x + 'px';
        target.style.top = y + 'px';
        target.style.backgroundColor = 'red';
        ocorreu = setTimeout(() => {
            if(recorde != 0){
                alert('Perdeu!');
            } else{
                alert(`Novo jogo!`)
            }
            score = 0;
            updateScore();
        }, tempoReacao);
    }

    target.addEventListener('click', function () {
        clearTimeout(ocorreu);
        moveTarget();
        score++;
        record();
        updateScore();
    });

    moveTarget();
    updateScore();
});

let tempoReacao = 700;

function maisVel() {
    tempoReacao += 100;
    txtTempoReacao.textContent = `Tempo de Reação é de ${tempoReacao}ms`;
     
}

function menosVel() {
    if (tempoReacao > 100) {
        tempoReacao -= 100;
        txtTempoReacao.textContent = `Tempo de Reação é de ${tempoReacao}ms`;
    }
}
