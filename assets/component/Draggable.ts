
const {ccclass, property} = cc._decorator;

@ccclass
export default class Draggable extends cc.Component {

    @property(cc.Node)
    target:cc.Node = null;

    private _oldPosition:cc.Vec3;
    
    onLoad () {
        this._oldPosition = this.node.position;
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this);
        this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this);
    }
    private onTouchMove(touchEvent:cc.Event.EventTouch){
        //通过touchEvent获取当前触摸坐标点
        let location = touchEvent.getLocation();
        //修改节点位置，注意要使用父节点进行对触摸点进行坐标转换
        this.node.position = this.node.parent.convertToNodeSpaceAR(new cc.Vec3(location.x,location.y,0));
    }
    private onTouchEnd(touchEvent:cc.Event.EventTouch){
        if(!this.target){
            return;
        }
        //获取target节点在父容器的包围盒，返回一个矩形对象
        let rect = this.target.getBoundingBox();
        //使用target转换触摸坐标
        let location = touchEvent.getLocation();
        let point = this.target.parent.convertToNodeSpaceAR(location);
        if(rect.contains(point)){
            //在目标矩形内，修改节点坐标
            point = this.target.convertToNodeSpaceAR(location);
            this.node.position = new cc.Vec3(point.x,point.y,0);
            //修改父节点
            this.node.parent = this.target;
            return;
        }
        //不在矩形内还原节点位置
        this.node.position = this._oldPosition;
    }
}
