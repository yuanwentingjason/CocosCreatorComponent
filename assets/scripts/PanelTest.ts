import WindowManager from "./uiframe/WindowManager";
import MainPanel from "./panel/MainPanel";
import PopPanel from "./panel/PopPanel";
import Pop2Panel from "./panel/Pop2Panel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PanelTest extends cc.Component {
    onLoad () {

    }

    start () {
        WindowManager.open(MainPanel);
        WindowManager.open(PopPanel);
        WindowManager.open(Pop2Panel);
        WindowManager.open(PopPanel);
        WindowManager.open(Pop2Panel);
    }
    onOpenPanel(){
        WindowManager.open(Pop2Panel);
    }
    // update (dt) {}
}
