const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const cw = canvas.width
const ch = canvas.height
const rectWidth = 75
const rectHeight = 86

ctx.fillStyle = "green"
// ctx.strokeRect(10, 10, 100, 100);
ctx.fillRect(50,50,80,120)

ctx.strokeStyle = "#90a"
ctx.font= '30px Arial'
ctx.fillStyle = "red"
ctx.strokeText("ALGOSUP", 50,30,150)
ctx.fillText("ALGOSUP", 200,50,300)

ctx.fillStyle = "blue"
ctx.fillRect((cw / 2 - rectWidth /2), (ch/ 2 - rectHeight/2), rectWidth, rectHeight)

ctx.fill()

ctx.beginPath();
ctx.setLineDash([10, 5])
ctx.moveTo(475, 25)
ctx.lineTo(25,225)

ctx.moveTo(cw * 0.85, ch * 0.85)
ctx.lineTo(cw * 0.5, ch * 0.5)
ctx.lineTo(cw * 0.2, ch * 0.7)
ctx.lineTo(cw * 0.85, ch * 0.85)
ctx.stroke();

const image = new Image();
image.src = 'image.jpg';
image.addEventListener('load', () => {
     ctx.drawImage(image, 0, (ch - 50) /2, 50, 50);
});


shape  
x = 0; y: center
w: 50; h: 50

const rH = 50
const rW = 50
let x = 0
let y = (ch - rH)/2

ctx.fillStyle = "red"
ctx.fillRect(x, y, rW, rH)

// class Daki {
// 	image = null

// 	constructor(w, h, source) {
// 		this.w = w;
// 		this.h = h;

// 		this.x = 0;
// 		this.y = (ch - this.h) / 2;

// 		this.image = new Image();
// 		this.image.src = source;
// 		this.image.addEventListener('load', () => {
// 			this.drawImage();
// 		});
// 	}

// 	saveRect() {
// 		this.rect = {
// 			x: this.x, y: this.y, w:this.w, h: this.h
// 		};
// 	}

// 	drawImage() {
// 		ctx.clearRect(this.rect.x, this.rect.y, this.rect.w, this.rect.h);
// 		ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
// 	}

// 	moveRight() {
// 		if (this.x < cw - this.W) {
// 			this.saveRect();
// 			this.x += 10;
// 		}
// 	}
// 	moveLeft() {
// 		if (this.x > 0) {
// 			this.saveRect()
// 			this.x -= 10
// 		}
// 	}
// 	moveUp() {
// 		if (this.y > 0) {
// 			this.saveRect()
// 			this.y -= 10
// 		}
// 	}
// 	moveDown() {
// 		if (this.y < ch - this.H) {
// 			this.saveRect()
// 			this.y += 10
// 		}
// 	}
// }

// const daki = new Daki(50, 50, 'daki.png');

// document.addEventListener("keydown", (e) => {
// 	if (e.key === "ArrowRight") {
// 		daki.moveRight();
// 	} else if (e.key === "ArrowLeft") {
// 		daki.moveLeft();
// 	} else if (e.key === "ArrowUp") {
// 		daki.moveUp();
// 	} else if (e.key === "ArrowDown") {
// 		daki.moveDown();
// 	} 
// 	// else if (e.key === " ") {
// 	// }
// 	daki.drawImage();
// })