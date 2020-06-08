const {ccclass, property, executeInEditMode} = cc._decorator;

const RADIAN = Math.PI / 180;
@ccclass
export default class LineEmitter extends cc.Component {

    @property(cc.Prefab)
    prefab: cc.Prefab = null;

    @property({type:cc.Float,tooltip:"发射间隔"})
    rate: number = 1;
    @property({type:cc.Float,tooltip:"移动速度"})
    speed:number = 1000;
    @property({tooltip:"偏移"})
    offset:cc.Vec3 = cc.Vec3.ZERO;
    @property({type:cc.Float,tooltip:"子弹的初始角度"})
    rotation:number = 0;
    @property({type:cc.Float,tooltip:"旋转速度"})
    rotSpeed:number = 0;

    start () {
        this.schedule(this.emmitNode,this.rate);
    }
    private emmitNode(){
        //实例化节点， 设置位置&父节 
        let node = cc.instantiate(this.prefab); 
        node.position = this.offset.add(this.node.position); 
        node.parent = this.node.parent;
        node.rotation = this.rotation;

        //计算终点
         let endPoint = cc.v3();
         endPoint.x = cc.winSize.height * Math.sin(this.rotation * RADIAN); 
         endPoint.y = cc.winSize.height * Math.cos(this.rotation * RADIAN);

         //计算飞行持续时间
         let distance = endPoint.sub(node.position).mag();
         let duration = distance / this.speed;
        
        //使用moveBy动作， 完成后删除子弹节点
        let moveBy = cc.moveBy(duration, cc.v2(endPoint.x,endPoint.y)); 
        let removeSelf = cc.removeSelf(); 
        let sequence = cc.sequence(moveBy, removeSelf); 
        node.runAction(sequence);
    }
    update(dt){
        if(this.rotSpeed <= 0){
            return;
        }
        this.rotation += dt * this.rotSpeed;
    }
}
