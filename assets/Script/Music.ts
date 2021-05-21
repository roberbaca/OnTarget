const {ccclass, property} = cc._decorator;


@ccclass
export default class NewClass extends cc.Component 
{
    
    @property(cc.AudioClip)
    music: cc.AudioClip = null;

    onLoad () 
    {       
        cc.game.addPersistRootNode(this.node);       
    }

    start () 
    {
        cc.audioEngine.playMusic(this.music,true);//Play music (true means loop)
    }

    // update (dt) {}
}
