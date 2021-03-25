class Paper {
    constructor(x, y, radius) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.paper1 = loadImage("paper.png");
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
       
        const pos = this.body.position;
        fill("white");
        image(this.paper1, pos.x, pos.y, 50, 50);
    }
}