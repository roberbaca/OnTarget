
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component 
{

    //start button
    btnStart: cc.Button = null;
    
    //start button
    btnExit: cc.Button = null;

    @property(cc.AudioSource)
    btnSoudn: cc.AudioSource = null;

    onLoad()
    {
        // busca el boton Start
        this.btnStart = this.node.getChildByName("PlayButton").getComponent(cc.Button);
        this.btnStart.node.on(cc.Node.EventType.TOUCH_END,this.touchStartBtn,this);  
        
         // busca el boton Exit
         this.btnExit = this.node.getChildByName("ExitButton").getComponent(cc.Button);
         this.btnExit.node.on(cc.Node.EventType.TOUCH_END,this.touchExitBtn,this); 

         cc.director.preloadScene('TutorialScreen');

     
    }
    start () 
    {

    }

    touchStartBtn()
    {          
        // cargamos la escena
        this.btnSoudn.play();
        cc.director.loadScene("TutorialScreen");         
    }

    touchExitBtn()
    {
        this.btnSoudn.play();
        cc.director.end();
    }

}
