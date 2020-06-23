import LoopScroll from "../component/LoopScroll/LoopScroll";
import { searchComp } from "./common/UITool";

const {ccclass, property,executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class LoopScrollTest extends cc.Component {

    private _loopScroll:LoopScroll;
    private _loopScroll2:LoopScroll;
    private _data:number[] = [];
    onLoad () {
        //this._data = [50,80,100];
        this._data = [60,80,100,70,60,88,40,80,55,120,110,90,77,68,110,150];
        this._loopScroll = searchComp(this.node,"Loop",LoopScroll);
        this._loopScroll2 = searchComp(this.node,"Loop2",LoopScroll);
    }
       
    onRenderItem(itemIndex:number,dataIndex:number,item:cc.Node){
        item.height = this._data[dataIndex];
        cc.find("Label",item).getComponent(cc.Label).string = dataIndex.toString();
    }
    start () {
        this._loopScroll.initData(this._data.length,this.onRenderItem.bind(this));
        this._loopScroll2.initData(this._data.length,this.onRenderItem2.bind(this));
    }
    onRenderItem2(itemIndex:number,dataIndex:number,item:cc.Node){
        item.width = this._data[dataIndex];
        cc.find("Label",item).getComponent(cc.Label).string = dataIndex.toString();
    }
    onAddBtnClicked(){
        this._data.push(Math.floor(Math.random()*100+50));
        this._loopScroll.initData(this._data.length,this.onRenderItem.bind(this));
        this._loopScroll2.initData(this._data.length,this.onRenderItem2.bind(this));
    }
    // update (dt) {}
}
