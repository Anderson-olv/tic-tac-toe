const mostrador = document.getElementById('display');
const posicoes = document.getElementsByClassName('slot');
let jogoEstaAcontecendo = true;
let jogadorAtual = 'X';
const caminhoDoJogo = 'file:///home/andersonvaz/projects/tic-tac-toe/index.html';

const inverterJogador = () => {
	return jogadorAtual === 'X' ? 'O' : 'X';
};

const posicoesJaJogadas = [];

const removerEscutadorDeEventos = () => {
	Array.from(posicoes).forEach(elementoAtual => {
		elementoAtual.removeEventListener('click', () => {}, false);
	});
};

const comecarJogo = () => {
	mostrador.innerText = jogadorAtual;

	for (let indexAtual = 0; indexAtual < posicoes.length; indexAtual++) {
		const posicaoAtual = posicoes[indexAtual];

		posicaoAtual.addEventListener('click', () => {
			if (posicoesJaJogadas.indexOf(indexAtual) === -1) {
				posicoesJaJogadas.push(indexAtual);
				posicaoAtual.innerHTML += `<button class="action">${jogadorAtual}</button>`;
				jogadorAtual = inverterJogador();
				mostrador.innerText = jogadorAtual;
			} else {
				alert('Posição invalida!')
			}

			jogoEstaAcontecendo = posicoesJaJogadas.length < 9;

			if(!jogoEstaAcontecendo) {
				removerEscutadorDeEventos();
				alert("Fim de jogo!");
			}

			console.log(posicoesJaJogadas)
		});
	};
};
