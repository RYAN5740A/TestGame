const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function preload(){

}
function setup(){
    createCanvas(windowWidth,windowHeight)
    engine = Engine.create()
    world=engine.world;
    sprite=new Prop(870,120,150, -PI/7);
    
}
function draw(){
    Engine.update(engine);
    background("Navy")
    sprite.display()


}