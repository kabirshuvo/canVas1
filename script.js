const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Symbol {
    constructor(x, y, fontSize, canvasHeight){
        this.characters = `
        アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン
        0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ ♔♕♖♗♘♙CHESS♚♛♜♝♞♟ ☀☁❆WEATHER❅❄ ♪MUSIC♫`

    }
    draw(){

    }
}


class Effect {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 25;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
    }

    #initialize(){
        for (let i = 0; i <this.columns.length; i++){
            this.symbols[i] = new Symbol();
        }
    }
}

