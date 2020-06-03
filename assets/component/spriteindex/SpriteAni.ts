import SpriteEx from "./SpriteEx";

const {ccclass, property, executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class SpriteAni extends SpriteEx {

    @property
    interval: number = 0.1;

    private _deltaTime:number = 0;
    onLoad () {
        cc.log("onLoad")
        //this.schedule(this.next,this.interval);
    }
    onDestroy(){
        //this.unschedule(this.next);
    }
    update(dt){
        //cc.log(`dt = ${dt}`)
        this._deltaTime += dt;
        if(this._deltaTime >= this.interval){
            this.next();
            this._deltaTime = 0;
        }
        
    }
}
