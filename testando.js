var jogador_1 = prompt("Digite o seu nome");
let placar_jogador_1 = 0;
var jogada = 0;
var robo = "Mc Pczinho";
var placar_robo = 0;

iniciarJogo();

//-------
function iniciarJogo(){
    console.log("Iniciou o jogo");
    alert("As regras sao:\n Pedra ganha de Tesoura e perde para papel. \n Tesoura Ganha de Papel \n Papel Ganha de pedra");
    obterJogada(jogador_1);
}

function obterJogada(player){
    console.log("obendo jgoada");
    jogada = prompt("[ 1 PEDRA | 2 PAPEL | 3 TESOURA ] \n Faça a sua jogada " + player);
    verificarJogada(jogada);
}

function verificarJogada(jogada){
    console.log("verificando jogada");
    var jogada_robo = Math.round(Math.random() * 3);
    console.log("A jogada do Robô foi: " + jogada_robo);

    switch(jogada){
        //possibilidades pedra
        case 1:
            if (jogada_robo == 1) {
                alert("Empate!");
            } else if (jogada_robo == 2) {
                alert("Perdeu essa Rodada");
                placar_robo += 1;
            } else if (jogada_robo == 3) {
                alert("Ganhou 1 ponto!");
                placar_jogador_1 += 1;
            }
        break;
        //possibilidades papel
        case '2':
            if (jogada_robo == 1) {
                alert("Ganhou 1 ponto");
                placar_jogador_1 += 1;
            } else if (jogada_robo == 2) {
                alert("Empate!");
            } else if (jogada_robo == 3) {
                alert("Perdeu essa Rodada");
                placar_robo += 1;
            }
        break;
        //possibilidades tesoura
        case '3':
            if (jogada_robo == 1) {
                alert("Perdeu essa Rodada");
                placar_robo += 1;
            } else if (jogada_robo == 2) {
                alert("Ganhou 1 ponto");
                placar_jogador_1 += 1;
            } else if (jogada_robo == 3) {
                alert("Empate!");
            }
        break;
        default:
        alert('Jogada Inválida');
    }

    if (placar_jogador_1 == 2){
        alert("Parabéns ao vencedor, você " + jogador_1);
    }else if (placar_robo == 2)
    { alert("Dessa ver o nosso "+robo+" venceu! kkk")}
    else{ obterJogada(jogador_1);}
    
}
