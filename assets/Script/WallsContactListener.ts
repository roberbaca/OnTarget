
const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends cc.Component
{

   numOfContacts: number = 0;

   isRebound: boolean = false;

   //@property(cc.label)
   //reboundsLabel: cc.label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () 
    {

    }

    onBeginContact(contact, selfCollider, otherCollider) 
    {
        if (otherCollider.node.name === "wall") 
        {
            this.isRebound = true;                    
        }
    }

    onEndContact(contact, selfCollider, otherCollider) 
    {
        if (otherCollider.node.name === "wall") 
        {
            this.isRebound = false;                  
        }
    }

    update (dt) 
    {           
        if (this.isRebound)
        {
            this.numOfContacts++;
            cc.log(this.numOfContacts);
        }

        

        //this.reboundsLabel.string = "Score: " + this.numOfContacts.toString();
    }
}
