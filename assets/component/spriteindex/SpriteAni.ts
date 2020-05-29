import SpriteEx from "./SpriteEx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SpriteAni extends SpriteEx {

    @property
    interval: number = 0.1;

    onLoad () {
        this.schedule(this.next,this.interval);
    }
    onDestroy(){
        this.unschedule(this.next);
    }
}
