class Polygon{
    constructor(x,y,r){
        var options = {

        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon_img, 50, 200, 20);
    }
}