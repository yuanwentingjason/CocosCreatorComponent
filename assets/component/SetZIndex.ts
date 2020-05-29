const {ccclass, property} = cc._decorator;

@ccclass
export default class SetZIndex extends cc.Component {


    @property({type:cc.Integer})
    zIndex: number = 0;
    onLoad () {
        this.node.zIndex = this.zIndex;
    }
}
