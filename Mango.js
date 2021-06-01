class Mango {
    constructor(x,y,radius) {
        var options = {
            isstatic:true,
            restitution:0,
            friction:1,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("mango.png");
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);
        pop();
    } 

}