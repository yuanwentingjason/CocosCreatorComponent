import TimerManager from "./common/TimerManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NetLoadingTest extends cc.Component {

    

    onLoad () {}

    start () {

    }

    update (dt) {
        TimerManager.getInstance().update(dt);
    }
}
