
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component 
{
    
   @property(cc.Node)
   resetNode: cc.Node = null;

   @property(cc.Node)
   shootNode: cc.Node = null;

   @property(cc.Node)
   targetNode: cc.Node = null;

    onLoad()
    {       
       cc.director.preloadScene('Level1');       
    }
   
    start () 
    {
        this.schedule(this.shootTutorial, 3, 0);        
    }   

    resetTutorial()
    {
        this.resetNode.active = true;
        this.schedule(this.startGame,10,0); 
    }

    shootTutorial()
    {
        this.shootNode.active = true;
        this.schedule(this.targetTutorial, 3, 0);
    }

    targetTutorial()
    {
        this.targetNode.active = true;
        this.schedule(this.resetTutorial, 3, 0);
    }

    startGame()
    {          
        // cargamos la escena
        cc.director.loadScene("Level1");         
    }
}
 
    