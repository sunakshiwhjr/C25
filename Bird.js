class Bird extends BaseClass
{

    //To create the object we use constructor

    constructor(x,y)
    {
        
        super(x,y,50 ,50);
        //overriding 
        this.image = loadImage("sprites/bird.png");

    }

    display()
    {
        //Bird's own functionality.hence overriding 
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}