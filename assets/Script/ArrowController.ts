
const {ccclass, property} = cc._decorator;

import Game from './GameController'
import * as MathUtilities from './Utilities/MathUtilities'

@ccclass
export default class NewClass extends cc.Component 
{  

    // declaracion de variables 
    @property
    rotationAngleFactor: number = 0
 
    rotateLeft:number = 0;
    rotateRight:number = 0;
    rotationAngle: number = 0; 

    isShoot: boolean = false;  

    @property(cc.Prefab)
    pointerPrefab:cc.Prefab  = null;

    @property(cc.AudioSource)
    shootSnd:cc.AudioSource  = null;
    
    component: cc.Component;

    @property
    impulseForce: number = 400;

    gameController: Game = null;

    // eventos del teclado
    rotate(event)
    {
        
            switch(event.keyCode)
            {
                
                case cc.macro.KEY.left:
                    this.rotateLeft = 1;
                    this.rotationAngle -=  this.rotationAngleFactor;
                    break;
                case cc.macro.KEY.right:
                    this.rotateRight = 1;
                    this.rotationAngle +=  this.rotationAngleFactor;
                    break;     
                    
                case cc.macro.KEY.r:
                    this.retry();
                    break; 
                    
                case cc.macro.KEY.space:                       
                                       
                    if (!this.isShoot)
                    {
                        const barrelPosition = this.node.getPosition();                    
                        const angle = this.node.rotation;
                        const barrelLength = this.node.height;
                        const barrelWidth = this.node.width;
                        barrelPosition.x + barrelLength * MathUtilities.sind(angle) -barrelWidth/2;
                        barrelPosition.y = barrelLength * MathUtilities.cosd(angle) + barrelLength/4;
    
                        const barrelTipWorld = this.node.convertToWorldSpaceAR(barrelPosition);
                        const bulletPosition = this.gameController.node.convertToNodeSpaceAR(barrelTipWorld);
                            
                        this.gameController.createBullet(bulletPosition, this.impulseForce, angle);
                        
                        this.shootSnd.play();
                        this.isShoot = true;
                    }
                    break;
            }
        
        
    }     

    stopRotation(event)
    {
        switch(event.keyCode)
        {
            case cc.macro.KEY.left:
                this.rotateLeft = 0;                             
                break;
            case cc.macro.KEY.right:
                this.rotateRight = 0;               
                break;   
            case cc.macro.KEY.space:                                       
                break;        
        }           
    }

    onLoad () 
    {      
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.rotate,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.stopRotation,this);  
        this.gameController = cc.Canvas.instance.node.getComponent("GameController");            
    }

    update(dt)
    {        

        // rotacion
        if(this.rotateLeft == 1)
        {                   
            this.node.setRotation(this.rotationAngle);
        }

        if(this.rotateRight == 1)
        {
            this.node.setRotation(this.rotationAngle);
        }          
    } 

    retry()
    {
        cc.director.loadScene(cc.director.getScene().name);
    }

}
