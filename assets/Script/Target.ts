
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component 
{
    @property
    level: number = 0;

    @property(cc.Label)
    victoryLabel: cc.Label = null;

    @property(cc.AudioSource)
    winSnd:cc.AudioSource  = null;

    onLoad () 
    {
        cc.director.preloadScene("Level" + this.level.toString());
    }

    start () 
    {

    }

    // update (dt) {}

    // Collider callbacks
    onBeginContact(contact, selfCollider, otherCollider) 
    {
        if (otherCollider.node.name === "Pointer") 
        {
            this.victoryLabel.node.active = true;
            otherCollider.node.destroy();
            this.winSnd.play();
            this.schedule(this.loadNexLevel, 3, 0);
        }
    }

    loadNexLevel()
    {          
        // cargamos la escena
        cc.director.loadScene("Level" + this.level.toString());         
    }

}
