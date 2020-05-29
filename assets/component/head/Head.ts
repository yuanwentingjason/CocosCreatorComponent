import SpriteEx from "../spriteindex/SpriteEx";

const {ccclass, property} = cc._decorator;
enum SexType{
    ST_MAN,  //男
    ST_WOMAN    //女
}
@ccclass
export default class Head extends cc.Component {

    @property({type:cc.Integer})
    //头像的宽度
    get width(){
        return this._width;
    }
    set width(value){
        if(value > 0){
            this._width = value;
        }
        this.node.width = this._width;
    }
    @property({type:cc.Integer})
    //头像的高度
    get height(){
        return this._height;
    }
    set height(value){
        if(value > 0){
            this._height = value;
        }
        this.node.height = this._height;
    }
    private _width = 100;
    private _height = 100;
    private _headIcon:cc.Sprite = null;
    private _sex:SpriteEx = null;
    onLoad(){
        //查找头像节点
        let headNode = cc.find("headMask/_headIcon",this.node);
        this._headIcon = headNode.getComponent(cc.Sprite);
        this._sex = cc.find("_sex",this.node).getComponent(SpriteEx);
        this._sex.node.active = false;
    }
    /*
    * 通过玩家ID获取玩家信息
    */
    setUin(uin:number){
        
    }
}
