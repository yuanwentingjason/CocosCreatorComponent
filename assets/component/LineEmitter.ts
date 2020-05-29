const {ccclass, property} = cc._decorator;

@ccclass
export default class LineEmitter extends cc.Component {

    @property(cc.Prefab)
    prefab: cc.Prefab = null;

    @property
    rate: number = 1;
    @property
    speed:number = 1000;
    @property
    offsetX:number = 0;

    start () {
        this.schedule(this.emmitNode,this.rate);
    }
    private emmitNode(){
        //实例化节点， 设置位置&父节 
        let node = cc.instantiate(this.prefab); 
        node.position = this.node.position; 
        node.x += this.offsetX; 
        node.parent = this.node.parent; 
        //计算子弹需要飞行的距离， 飞行时间 = 距离 / 速度 
        let distance = ((cc.winSize.height / 2) - this.node.y); 
        let duration = distance / this.speed; 
        //使用moveBy动作， 完成后删除子弹节点
        let moveBy = cc.moveBy(duration, cc.v2(0, distance)); 
        let removeSelf = cc.removeSelf(); 
        let sequence = cc.sequence(moveBy, removeSelf); 
        node.runAction(sequence);
    }
}
