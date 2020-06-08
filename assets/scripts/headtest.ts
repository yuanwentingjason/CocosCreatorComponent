import LoadPrefab from "../component/LoadPrefab";
import Head from "../component/head/Head";
import { searchComp } from "./common/UITool";

const {ccclass, property,executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class headtest extends cc.Component {


    // LIFE-CYCLE CALLBACKS:
    private _head1:Head;
    private _head2:Head;
    onLoad () {
        
    }

    start () {
        this._head1 = searchComp<LoadPrefab>(this.node,"head1",LoadPrefab).getPrefabComp(Head);
        this._head1.width = 100;
        this._head1.height = 100;
        this._head2 = searchComp<LoadPrefab>(this.node,"head2",LoadPrefab).getPrefabComp(Head);
        this._head2.width = 200;
        this._head2.height = 200;
    }

    // update (dt) {}
}
