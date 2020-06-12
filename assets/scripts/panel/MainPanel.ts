import BasePanel from "../uiframe/BasePanel";
import { UILayerType } from "../uiframe/LayerType";
import { searchNode } from "../common/UITool";
import { UILayerManager } from "../uiframe/UILayerManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainPanel extends BasePanel {

    constructor(){
        super();
        this._resName = "panel/MainPanel";
        this._layer = UILayerType.Main;
    }
    onCreate(msg?: any){
        super.onCreate(msg);

        this.setCloseButton("_btnClose");
    }
}
