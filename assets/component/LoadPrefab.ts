
const {ccclass, property,executeInEditMode} = cc._decorator;

@ccclass
@executeInEditMode
export default class LoadPrefab extends cc.Component {

    @property(cc.Prefab)
    prefab: cc.Prefab = null;
    @property(cc.Node)
    parent:cc.Node = null;
    @property
    autoLoad: boolean = false;

    private _prefabNode:cc.Node;
    onLoad () {
        if(this.autoLoad){
            this.loadPrefab();
        }
    }
    //实例化预制体，设置父节点
    loadPrefab(){
        this._prefabNode = cc.instantiate(this.prefab);
        this._prefabNode._objFlags |= cc.Object.Flags.DontSave;
        this._prefabNode.parent = this.parent || this.node;
        this._prefabNode.active = true;
        this._prefabNode.setPosition(cc.Vec3.ZERO);
    }
    getPrefabComp(component){
        return this._prefabNode.getComponent(component);
    }
}
