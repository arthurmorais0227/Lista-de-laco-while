const numeroSecreto = 12;
let quantidadeTentativas = 0;
let palpite = Math.floor(Math.random() * 99);

while (palpite !== numeroSecreto) {
    palpite = Math.floor(Math.random() * 99);
    quantidadeTentativas++;
    console.log()
}