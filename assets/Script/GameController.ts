
const {ccclass, property} = cc._decorator;

import * as MathUtilities from './Utilities/MathUtilities'


@ccclass
export default class GameController extends cc.Component
{

    @property gravity: number = 0;   

    @property(cc.Prefab)
    bullet: cc.Prefab = null;  
    

    onLoad () 
    {
        let physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        physicsManager.gravity = cc.v2(0, this.gravity);           
    }

    start ()
    {

    }

    
    createBullet(position: cc.Vec2, velocity: number, angle: number) 
    {
        const newBullet = cc.instantiate(this.bullet);
        newBullet.setPosition(position);
        newBullet.rotation = angle;

        const body = newBullet.getComponent(cc.RigidBody);
        body.linearVelocity = cc.v2(MathUtilities.sind(angle) * velocity, MathUtilities.cosd(angle) * velocity);            
        this.node.addChild(newBullet);       
      
    }

    update (dt) 
    {
       
    }
}
