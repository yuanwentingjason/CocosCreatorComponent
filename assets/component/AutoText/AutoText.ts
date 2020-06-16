const {ccclass, property,executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class AutoText extends cc.Component {

    
    private _label: cc.Label = null;
    @property({type:cc.Vec3})
    get pos():cc.Vec3{
        return this._label.node.position;
    }
    set pos(value:cc.Vec3){
        this._label.node.position = value;
    }
    @property({type:cc.Integer})
    interval: number = 100;

    private _timeKey:number = null;
    private _allStr:string = null;
    onLoad () {
        this._label = cc.find("_Label",this.node).getComponent(cc.Label);
        this.node.on(cc.Node.EventType.TOUCH_END,()=>{
            this._label.string = this._allStr;
            this._timeKey&&clearInterval(this._timeKey);
        });

        let str = '我是异名这是\nLabel打字效果反对反对法的发的说法放大发发的说法啊发的说法斗法大赛';
        this.startShow(str);
    }
    startShow(str:string){
        this._allStr = str;
        let charArr = str.split("");
        let charIndex = 0;
        this._timeKey&&clearInterval(this._timeKey);
        this._timeKey = setInterval(()=>{
            if(charIndex >= charArr.length){
                this._timeKey&&clearInterval(this._timeKey);
            }else{
                ++charIndex;
                this._label.string = charArr.slice(0, charIndex).join('');
            }
        },this.interval);
    }
}
