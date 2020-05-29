import LoadPrefab from "../component/LoadPrefab";
import Head from "../component/head/Head";

const {ccclass, property} = cc._decorator;

@ccclass
export default class headtest extends cc.Component {


    // LIFE-CYCLE CALLBACKS:
    private _head1:Head;
    private _head2:Head;
    onLoad () {
        
    }

    start () {
        this._head1 = cc.find("head1",this.node).getComponent(LoadPrefab).getPrefabComp(Head) as Head;
        this._head1.width = 100;
        this._head1.height = 100;
        this._head2 = cc.find("head2",this.node).getComponent(LoadPrefab).getPrefabComp(Head) as Head;
        this._head2.width = 200;
        this._head2.height = 200;
    }

    // update (dt) {}
}
