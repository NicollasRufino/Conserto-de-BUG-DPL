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


// //Desafio 3
// for (var i = 0; i < 10; i++) {

//     auxX = Math.random() * 500 + Math.random() * 50; //Reposiciona em X
//     auxY = Math.random() * 150 + Math.random() * 300; //Reposiciona em Y

//     //Quadrado
//     c.fillStyle = gerar_cor_hexadecimal(); //Escolhe a cor
//     c.fillRect(auxX, auxY, 25, 25); //Posiciona em X, Y e depois o tamanho

//     //Linha
//     c.beginPath(); //InÃ­cio do comando
//     c.moveTo(auxX - Math.random() * 50, x + auxX); //InÃ­cio da linha
//     c.lineTo(auxY - Math.random() * 50, y + auxY); //Final da linha
//     c.strokeStyle = gerar_cor_hexadecimal(); //DefiniÃ§Ã£o da cor
//     c.stroke(); //Executa o desenho

//     //CÃ­rculo
//     c.beginPath();
//     c.arc(auxX, auxY * Math.random() * 5, 20, 0, Math.PI * 2, false);
//     c.strokeStyle = gerar_cor_hexadecimal();
//     c.stroke();
// }



/*
//Desafio 4
//CÃ­rculo
c.beginPath();
c.arc(x, y, Math.random()*20, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();
*/

//Desafio Desenho

ctx.beginPath();
ctx.moveTo(75,40);
ctx.bezierCurveTo(75,37,70,25,50,25);
ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
ctx.bezierCurveTo(20,80,40,102,75,120);
ctx.bezierCurveTo(110,102,130,80,130,62.5);
ctx.bezierCurveTo(130,62.5,130,25,100,25);
ctx.bezierCurveTo(85,25,75,37,75,40);
ctx.fill();


ctx.transform( 1 , 0 , 0 , -1 , canvas.width * 0.5 , canvas.height * 0.5 ); // more info at https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform
ctx.save( ); // stores canvas state - importantly it saves the direction of y-axis increasing

/* mark the origin for reference */
ctx.fillStyle = 'red';
ctx.fillRect( -2 , -2 , 4 , 4 );

/* marks a simple axis */
ctx.beginPath( );
ctx.moveTo( canvas.width * -0.5, 0 );
ctx.lineTo( canvas.width * 0.5, 0 );
ctx.moveTo( 0, canvas.width * -0.5 );
ctx.lineTo( 0, canvas.width * 0.5 );
ctx.strokeStyle = '#F5F5F5';
ctx.stroke( );

/* draw author watermark text on canvas */
ctx.scale( 1, -1 ); // makes y-axis increasing downwards so text can be written upright
ctx.font = '15px Arial';
var authorName = 'RENATIN LINDO';
var authorNameMeasured = ctx.measureText( authorName );
ctx.fillStyle = '#10C4C4'; // design by day green
ctx.textBaseline = 'bottom'; // allows to be manpulated from bottom-left
ctx.fillText( authorName, ( authorNameMeasured.width * -0.5 ), ( canvas.height * 0.5 - 25 ) ); // positions author attribute
ctx.restore( ); // makes y-axis increasing upwards again

/* define the pencil properties */
var pencil = {
'thickness': 1, // thickness of line
'color': {
'black': '#000000',
'blue': 'blue',
'pink': 'pink',
'orange': 'orange',
'green': '#58f721',
'red': '#fb4b4b',
'purple': '#c07eff'
}
};

/* customise output */
a = 40; // bat-scale (batman logo scale) or known as arbitary constant in mathematics

var graph = {
'step': 0.5, // decrease step value to get greater points plotted but will cause browser lag due to increase in number of calculations 0.1 gives best result
plot: function( curveObject ) {
/* equation is drawn via an interation method - same concept as plotting known coordinates on a graph */
ctx.beginPath( );
ctx.lineWidth = pencil.thickness;
ctx.strokeStyle = curveObject.pencilColor; // allows stroke to have a custom color
for( var i = curveObject.lowerLimit ; i <= curveObject.upperLimit ; i += this.step  ) {

  switch( curveObject.inequalityFor ) {

    case 'x_axis':
      ctx.lineTo( i , curveObject.func( i ) ); // i is the x-coordinate as y = f(x)
      break;

    case 'y_axis':
      ctx.lineTo( curveObject.func( i ) , i ); // i is the y-coordinate as x = f(y)
      break;

    default:
      console.log( 'Curve object is missing inequalityFor property or has a value other than x_axis and y_axis' );

  };
    ctx.stroke( );
};
},
clear: function( ) {
/* clears the canvas if needed */
ctx.clearRect( canvas.width * -0.5 , canvas.height * -0.5 , canvas.width , canvas.height );
}
};

/* I was thinking about creating new objects to acheive the same result more efficiently and minifying code */

var curve_1 = {
'inequalityFor': 'y_axis',
func: function( y ) {
return - 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
},
'lowerLimit': -1 * ( ( 3 * Math.sqrt( 33 ) ) / 7 ) * a,
'upperLimit': 0,
'pencilColor': pencil.color.blue
};

var curve_2 = {
'inequalityFor': 'y_axis',
func: function( y ) {
return 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
},
'lowerLimit': -1 * ( ( 3 * Math.sqrt( 33 ) ) / 7 ) * a,
'upperLimit': 0,
'pencilColor': pencil.color.blue
};

var curve_3 = {
'inequalityFor': 'x_axis',
func: function( x ) {
return a * ( -( ( ( 3 * Math.sqrt( 33 ) ) - 7 ) * Math.pow( x , 2 ) ) / ( 112 * Math.pow( a , 2 ) ) + ( Math.abs( x / a ) / 2) + ( Math.sqrt( 1 - ( Math.pow( ( Math.abs( Math.abs( x / a ) - 2 ) - 1 ) , 2 ) ) ) ) - 3 );
},
'lowerLimit': -4 * a,
'upperLimit': 4 * a,
'pencilColor': pencil.color.black
};

var curve_4 = {
'inequalityFor': 'y_axis',
func: function( y ) {
return 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
},
'lowerLimit': 0,
'upperLimit': ( ( 6 * Math.sqrt( 10 ) ) / 7 ) * a,
'pencilColor': pencil.color.pink
};

var curve_5 = {
'inequalityFor': 'y_axis',
func: function( y ) {
return - 7 * ( Math.sqrt( Math.pow( a , 2 ) - ( Math.pow( y , 2 ) / 9 ) ) );
},
'lowerLimit': 0,
'upperLimit': ( ( 6 * Math.sqrt( 10 ) ) / 7 ) * a,
'pencilColor': pencil.color.pink
};

var curve_6 = {
'inequalityFor': 'x_axis',
func: function( x ) {
return a * ( 9 - 8 * ( Math.abs( x / a ) ) );
},
'lowerLimit': 0.75 * a,
'upperLimit': a,
'pencilColor': pencil.color.green
};

var curve_7 = {
'inequalityFor': 'x_axis',
func: function( x ) {
return a * ( 9 - 8 * ( Math.abs( x / a ) ) );
},
'lowerLimit': -a,
'upperLimit': -0.75 * a,
'pencilColor': pencil.color.green
};

var curve_8 = {
'inequalityFor': 'x_axis',
func: function( x ) {
return 3 * a * ( Math.abs( x / a ) + 0.25 );
},
'lowerLimit': 0.5 * a,
'upperLimit': 0.75 * a,
'pencilColor': pencil.color.red
};

var curve_9 = {
'inequalityFor': 'x_axis',
func: function( x ) {
return 3 * a * ( Math.abs( x / a ) + 0.25 );
},
'lowerLimit': -0.75 * a,
'upperLimit': -0.5 * a,
'pencilColor': pencil.color.red
};

var curve_10 = {
'inequalityFor': 'x_axis',
func: function( x ) {
return 2.25 * a;
},
'lowerLimit': -0.5 * a,
'upperLimit': 0.5 * a,
'pencilColor': pencil.color.purple
};

var curve_11 = {
'inequalityFor': 'x_axis',
func: function( x ) {
return a * ( ( Math.abs( x / a ) / -2 ) - ( ( 3 * Math.sqrt( 10 ) / 7 ) * ( Math.sqrt( 4 - Math.pow( ( Math.abs( x / a ) - 1 ) , 2 ) ) ) )  + ( 6 * Math.sqrt( 10 ) / 7 ) + 1.5 );
},
'lowerLimit': a,
'upperLimit': 3 * a,
'pencilColor': pencil.color.orange
};

var curve_12 = {
'inequalityFor': 'x_axis',
func: function( x ) {
return a * ( ( Math.abs( x / a ) / -2 ) - ( ( 3 * Math.sqrt( 10 ) / 7 ) * ( Math.sqrt( 4 - Math.pow( ( Math.abs( x / a ) - 1 ) , 2 ) ) ) )  + ( 6 * Math.sqrt( 10 ) / 7 ) + 1.5 );
},
'lowerLimit': -3 * a,
'upperLimit': -a,
'pencilColor': pencil.color.orange
};

function drawBatLogo( curveArray ) {
/* call draw method of graph object to outpout curves on canvas */
for( var i = 0; i < curveArray.length; i++ ) {
graph.plot( curveArray[i] );
};
};

drawBatLogo( [curve_1, curve_2, curve_3, curve_4, curve_5, curve_6, curve_7, curve_8, curve_9, curve_10, curve_11, curve_12] );