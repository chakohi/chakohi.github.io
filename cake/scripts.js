function preload() {
    img = loadImage('shah.png');
    cakeImage = loadImage('cake.png');
    adhamImage = loadImage('adham.png');
    nadaImage = loadImage('nada.png');
    sadafImage = loadImage('sadaf.png');
    michaelImage = loadImage('michael.png');
    talaImage = loadImage('tala.png');
    lateefaImage = loadImage('lateefa.png');
    aliaImage = loadImage('alia.png');
    yousraImage = loadImage('yousra.png');
}

let w;
let cakeLeft = 6;
let startMode = true;
let endMode = false;
let adham;
let nada;
let sadaf;
let michael;
let tala;
let lateefa;
let alia; 
let yousra;

let adhamDir = false;
let nadaDir = false;
let sadafDir = false;
let michaelDir = false;
let talaDir = false;
let lateefaDir = false;
let aliaDir = false;
let yousraDir = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    w = 220;
    shah = new Shah(w, w);
    cake = new Cake(windowWidth / 2, windowHeight / 2 - 50, w / 1.5, w / 1.5);
    start = new Clickable();
    frameRate(30);
}

function draw() {
    background(0);
    if (cakeLeft <= 0) {
        endMode = true;
    }
    if (startMode) {
        textSize(80);
        fill(255);
        textAlign(CENTER, CENTER);
        text("Help The Shah", windowWidth / 2, windowHeight / 2 - 300);
        text("eat the cake", windowWidth / 2, windowHeight / 2 - 200);
        fill(255, 198, 153);
        // text("START", windowWidth/2, windowHeight/2+100);
        start.color = "#000000"; //Background color of the clickable (hex number as a string)
        start.cornerRadius = 0; //Corner radius of the clickable (float)
        start.strokeWeight = 2; //Stroke width of the clickable (float)
        start.stroke = "#FFFFFF"; //Border color of the clickable (hex number as a string)
        start.text = "START"; //Text of the clickable (string)
        start.textColor = "#E1C699"; //Color of the text (hex number as a string)
        start.textSize = 80; //Size of the text (integer)
        start.textFont = "sans-serif"; //Font of the text (string)
        start.textScaled = true; //Whether to scale the text with the clickable (boolean)
        start.resize(250,100);
        start.locate(windowWidth / 2 - start.width/2, windowHeight / 2 + 100);
        start.onPress = function(){
            startMode = false;
        }

        start.draw();
    }

    if (!startMode && !endMode) {
        cake.show();
        shah.show(mouseX, mouseY);
        textSize(64);
        fill(255);
        textAlign(LEFT,TOP);
        text(cakeLeft + " slices of cake left.", 10, 100);
        if (shah.x + shah.w > cake.x && shah.y + shah.h > cake.y && shah.x < cake.x + cake.w && shah.y < cake.y + cake.h && shah.collidable) {
            cakeLeft--;
            shah.reset();
        }
    }

    if (endMode){
        textAlign(CENTER,CENTER);
        textSize(80);
        fill(255);
        text("Damn dude. Leave some", windowWidth/2, windowHeight/2 - 100);
        text("cake for the rest of us", windowWidth/2, windowHeight/2);
        textSize(64);
        fill(255, 198, 153);
        text("Happy Birthday from ur", windowWidth/2, windowHeight/2 + 200);
        text("Qowboys", windowWidth/2, windowHeight/2 + 300);
        fill(255);

        imageMode(CENTER);
        angleMode(DEGREES);

        adham = [windowWidth/2 - 405, windowHeight/2 - 800];
        nada = [windowWidth/2 + 100, windowHeight/2 - 500];
        sadaf = [windowWidth/2, windowHeight/2 - 700];
        michael = [windowWidth/2 + 300, windowHeight/2 - 580];
        tala = [windowWidth/2 + 200, windowHeight/2 - 750];
        lateefa = [windowWidth/2 - 300, windowHeight/2 - 550];
        alia = [windowWidth/2 - 200, windowHeight/2 - 750];
        yousra = [windowWidth/2 - 100, windowHeight/2 - 500];
        push()
        if (millis()%2200 == 0){
            adhamDir = !adhamDir;
        }
        translate(adham[0],adham[1]);
        if (adhamDir){
            rotate(20);
        } else {
            rotate(-20);
        }
        image(adhamImage, 0, 0, 150, (150/adhamImage.width) * adhamImage.height);
        pop();
        
        push();
        if (millis()%1800 == 0){
            nadaDir = !nadaDir;
        }
        translate(nada[0],nada[1]);
        if (nadaDir){
            rotate(0);
        } else {
            rotate(-60);
        }
        image(nadaImage, 0, 0, 150, (150/nadaImage.width) * nadaImage.height);
        pop();

        push();
        if (millis()%1000 == 0){
            sadafDir = !sadafDir;
        }
        translate(sadaf[0],sadaf[1]);
        if (sadafDir){
            rotate(20);
        } else {
            rotate(-20);
        }
        image(sadafImage, 0, 0, 150, (150/sadafImage.width) * sadafImage.height);
        pop();

        push();
        if (millis()%1200 == 0){
            michaelDir = !michaelDir;
        }

        translate(michael[0],michael[1]);
        if (michaelDir){
            rotate(20);
        } else {
            rotate(-20);
        }
        image(michaelImage, 0, 0, 150, (150/michaelImage.width) * michaelImage.height);
        pop();

        push();
        if (millis()%2000 == 0){
            talaDir = !talaDir;
        }
        translate(tala[0],tala[1]);
        if (talaDir){
            rotate(0);
        } else {
            rotate(-40);
        }
        image(talaImage, 0, 0, 150, (150/talaImage.width) * talaImage.height);
        pop();

        push();
        if (millis()%1500 == 0){
            lateefaDir = !lateefaDir;
        }
        translate(lateefa[0],lateefa[1]);
        if (lateefaDir){
            rotate(20);
        } else {
            rotate(-20);
        }
        image(lateefaImage, 0, 0, 150, (150/lateefaImage.width) * lateefaImage.height);
        pop();

        push();
        if (millis()%1600 == 0){
            aliaDir = !aliaDir;
        }
        translate(alia[0],alia[1]);
        if (aliaDir){
            rotate(20);
        } else {
            rotate(-20);
        }
        image(aliaImage, 0, 0, 150, (150/aliaImage.width) * aliaImage.height);
        pop();
        
        push();
        if (millis()%2200 == 0){
            yousraDir = !yousraDir;
        }
        translate(yousra[0],yousra[1]);
        if (yousraDir){
            rotate(20);
        } else {
            rotate(-20);
        }
        image(yousraImage, 0, 0, 150, (150/yousraImage.width) * yousraImage.height);
        pop();
    }
}

function mousePressed() {
    shah.pressed(mouseX, mouseY);
}

function mouseReleased() {
    shah.notPressed();
}

class Shah {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.x = random(this.w, width - this.w);
        this.y = random(this.h, height - this.h);
        this.offsetX = 0;
        this.offsetY = 0;
        this.dragging = false;
        this.rollover = false;
        this.collidable = true;
    }

    show(px, py) {
        if (this.dragging) {
            this.x = px + this.offsetX;
            this.y = py + this.offsetY;
        }
        stroke(255);
        noFill();
        image(img, this.x, this.y, this.w, this.h);
    }

    pressed(px, py) {

        if (px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h) {
            this.dragging = true;
            this.offsetX = this.x - px;
            this.offsetY = this.y - py;
        }
    }

    notPressed(px, py) {
        this.dragging = false;
        this.collidable = true;
    }
    reset() {
        this.dragging = false;
        this.x = random(this.w, width - this.w);
        this.y = random(this.h, height - this.h);
        this.collidable = false;
        this.show();
    }
}



class Cake {
    constructor(x, y, w, h) {
        this.w = w;
        this.h = h;
        this.x = x - (w / 2);
        this.y = y - (h / 2);
    }

    show() {
        image(cakeImage, this.x, this.y, this.w, this.h);
    }
}