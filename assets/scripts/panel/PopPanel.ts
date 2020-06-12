import BasePanel from "../uiframe/BasePanel";
import { UILayerType } from "../uiframe/LayerType";
import { searchNode } from "../common/UITool";
import { UILayerManager } from "../uiframe/UILayerManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PopPanel extends BasePanel {

    constructor(){
        super();
        this._resName = "panel/PopPanel";
        this._layer = UILayerType.Second;
    }
    onCreate(msg?: any){
        super.onCreate(msg);

        this.setCloseButton("_btnClose");
    }
    onHide(){
        UILayerManager.pop(this);
    }
}
