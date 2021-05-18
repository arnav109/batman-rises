class Umbrella {
    constructor(x,y){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.image=loadImage("images/walking_1.png,images/walking_2.png,images/walking_3.png,images/walking_4.png,images/walking_5.png,images/walking_6.png,images/walking_7.png,images/walking_8.png");
        World.add(world, this.body)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
