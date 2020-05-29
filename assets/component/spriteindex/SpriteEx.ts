const {ccclass, property} = cc._decorator;

@ccclass
export default class SpriteEx extends cc.Sprite {

    @property({type:cc.SpriteFrame})
    spriteFrames = [];
    @property({type:cc.Integer})
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

//下面是控制SpriteEx组件在属性检查器中的属性显示 
//不显示spriteFrame属性 
cc.Class["Attr"].setClassAttr(SpriteEx, 'spriteFrame', 'visible', false); 
//不显示Atlas属性 
cc.Class["Attr"].setClassAttr(SpriteEx, '_atlas', 'visible', false); 
//根据函数返回值控制属性显示、隐藏 
cc.Class["Attr"].setClassAttr(SpriteEx, 'fillType', 'visible', function() { return this._type === cc.Sprite.Type.FILLED; }); 
cc.Class["Attr"].setClassAttr(SpriteEx, 'fillCenter', 'visible', function() { return this._type === cc.Sprite.Type.FILLED; }); 
cc.Class["Attr"].setClassAttr(SpriteEx, 'fillStart', 'visible', function() { return this._type === cc.Sprite.Type.FILLED; }); 
cc.Class["Attr"].setClassAttr(SpriteEx, 'fillEnd', 'visible', function() { return this._type === cc.Sprite.Type.FILLED; }); 
cc.Class["Attr"].setClassAttr(SpriteEx, 'fillRange', 'visible', function() { return this._type === cc.Sprite.Type.FILLED; }); 
cc.Class["Attr"].setClassAttr(SpriteEx, 'srcBlendFactor', 'visible', function() { return this._type === cc.Sprite.Type.FILLED; }); 
cc.Class["Attr"].setClassAttr(SpriteEx, 'dstBlendFactor', 'visible', function() { return this._type === cc.Sprite.Type.FILLED; });
