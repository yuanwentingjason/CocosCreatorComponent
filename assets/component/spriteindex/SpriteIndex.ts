
const {ccclass, property,requireComponent} = cc._decorator;

@ccclass
@requireComponent(cc.Sprite)    //前置要求精灵组件
export default class SpriteIndex extends cc.Component {

    @property({type:cc.SpriteFrame})
    spriteFrames = [];
    @property
    get index(){
        return this._index;
    }
    set index(value){
        if(value < 0){
            return;
        }
        //根据spriteFrames组件长度计算this._index
        this._index = value % this.spriteFrames.length;
        //获取当前节点上的Sprite组件对象
        let sprite = this.node.getComponent(cc.Sprite);
        //设置Sprite组件的spriteFrame属性， 变换图片
        sprite.spriteFrame = this.spriteFrames[this._index];
    }
    private _index = 0;
    /*
    next方法， 调用index++切换图片，
    可以方便被cc.Button组件的事件调用
    */
    next(){
        this.index++;
    }
}
