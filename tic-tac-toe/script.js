var container = document.getElementById("container");

var turn = 0;

var board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];


for(var i = 0; i < 9; i++) {
  //cria uma div q representa o quadrado
  var square = document.createElement('div');

  square.className = "square";
  square.onclick = changeColor;

  //o i abaixo é o mesmo i que esta dentro do "for", ou seja, ele eh 1, dps 2, dps 3...até 8.
  square.row = Math.floor(i  / 3); // i / 3 divide o índice pelo número de colunas no tabuleiro (que é 3 no jogo da velha). Isso resulta em um número decimal que representa em qual linha o quadrado está.
  square.col = i % 3; // i % 3 calcula o resto da divisão do índice pelo número de colunas no tabuleiro (3 no jogo da velha). O resto da divisão é um valor que representa a coluna em que o quadrado está.


  //adiciona o elemento "square" ao container
  container.appendChild(square);


}

function checkWinner() {
  for(var index = 0; index < 3; index++){
    // vertical e horizontal
    if ((board[index][0] !== 0 && board[index][0] === board[index][1] && board[index][1] === board[index][2]) || (board[0][index] !== 0 && board[0][index] === board[1][index] && board[1][index] === board[2][index])) {
      return board[index][0]; //retorna o valor do jogador (1 ou -1)
    }
  // diagonal
  } if ((board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) || (board[0][2] !== 0 && board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
    return board[1][1];
  }
}

function changeColor() {
  if (this.pintado) {
    return;
  }

  if (turn % 2 == 0) {
      this.style.backgroundColor = "black";
      board[this.row][this.col] = 1;
  } else {
      this.style.backgroundColor = "red";
      board[this.row][this.col] = -1;
  }
  this.pintado = true; //atribui ao quadrado pintado o "true"
  turn++;

  if (turn == 9) {
    if (checkWinner !== 1 || -1) {
    alert("Velha!")
    location.reload();
    }
  }

  var winner = checkWinner();
  if (winner !== 0) {
      if (winner === 1) {
        alert("Jogador preto ganhou!");
        location.reload();
      }else if (winner === -1){
        alert("Jogador vermelho ganhou!");
        location.reload();
      }
  }
}
