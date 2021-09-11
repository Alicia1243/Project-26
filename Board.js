class Board{

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        board = Bodies.rectangle(15, 13, windowWidth - 100, windowHeight/2);
        image("js/Board.js");
    }
}

display()
var pos = Matter.Body.pos;
push();
imageMode(CENTER);
image("js/Board.js");
pop();

