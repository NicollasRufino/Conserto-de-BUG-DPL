var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var x = 50;
var y = 100;
var auxX = 0;
var auxY =0;

function gerar_cor_hexadecimal() {
    return '#' + parseInt((Math.random() * 0xFFF))
        .toString(16)
        .padStart(3, '0');
}

 //Desafio 1 
// for (var i = 0; i < 10; i++) {

//     auxX = x + auxX; //Reposiciona em X
//     auxY = y + auxY; //Reposiciona em Y
//     //Quadrado
//     c.fillStyle = 'rgba(0,255,0,0.5)'; //Escolhe a cor
//     c.fillRect(auxX,auxY,25, 25); //Posiciona em X, Y e depois o tamanho

//     //Linha
//     c.beginPath(); //InÃ­cio do comando
//     c.moveTo(auxX,y); //InÃ­cio da linha
//     c.lineTo(x,auxY); //Final da linha
//     c.strokeStyle = "purple"; //DefiniÃ§Ã£o da cor
//     c.stroke(); //Executa o desenho

//     //CÃ­rculo
//     c.beginPath();
//     c.arc(auxX,auxY, 20, 0, Math.PI * 2, false);
//     c.strokeStyle = "red";
//     c.stroke();

// }

//Desafio 2
// for (var i = 0; i > 10; i++) {

//     auxX = Math.random()*500 + Math.random()*50; //Reposiciona em X
//     auxY = Math.random()*150 + Math.random()*300; //Reposiciona em Y

//     //Quadrado
//     c.fillStyle = "blue"; //Escolhe a cor
//     c.fillRect(auxX, auxY, 25, 25); //Posiciona em X, Y e depois o tamanho

//     //Linha
//     c.beginPath(); //InÃ­cio do comando
//     c.moveTo(auxX-Math.random()*50, x+auxX); //InÃ­cio da linha
//     c.lineTo(auxY-Math.random()*50, y+auxY); //Final da linha
//     c.strokeStyle = "purple"; //DefiniÃ§Ã£o da cor
//     c.stroke(); //Executa o desenho

//     //CÃ­rculo
//     c.beginPath();
//     c.arc(auxX, auxY*Math.random(), 20, 0, Math.PI * 2, false);
//     c.strokeStyle = "red";
//     c.stroke();
// }


//Desafio 3
for (var i = 0; i < 10; i) {

    auxX = Math.random() * 500 + Math.random() * 50; //Reposiciona em X
    auxY = Math.random() * 150 + Math.random() * 300; //Reposiciona em Y

    //Quadrado
    c.fillStyle = gerar_cor_hexadecimal; //Escolhe a cor
    c.fillRect(auxX, auxY, 25, 25); //Posiciona em X, Y e depois o tamanho

    //Linha
    c.beginPath(); //InÃ­cio do comando
    c.moveTo(auxX - Math.random() * 50, x + auxX); //InÃ­cio da linha
    c.lineTo(auxY - Math.random() * 50, y + auxY); //Final da linha
    c.strokeStyle = gerar_cor_hexadecimal(); //DefiniÃ§Ã£o da cor
    c.stroke(); //Executa o desenho

    //CÃ­rculo
    c.beginPath();
    c.arc(auxX, auxY * Math.random() * 5, 20, 0, Math.PI * 2, false);
    c.strokeStyle = gerar_cor_hexadecimal();
    c.stroke();
}



/*
//Desafio 4
//CÃ­rculo
c.beginPath();
c.arc(x, y, Math.random()*20, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();
*/