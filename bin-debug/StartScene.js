/**
 *
 * @author
 *
 */
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene(scene) {
        _super.call(this);
        this.init(scene);
    }
    var d = __define,c=StartScene;p=c.prototype;
    p.init = function (scene) {
        this.scene = scene;
        this.width = GameData.getBgWidth();
        this.height = GameData.getBgHeight();
        this.scene.addChild(this);
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, 0.5);
        shape.graphics.drawRect(0, 0, GameData.getBgWidth(), GameData.getBgHeight());
        shape.graphics.endFill();
        this.addChild(shape);
        var start = new egret.TextField();
        start.textAlign = egret.HorizontalAlign.CENTER;
        start.background = true;
        start.backgroundColor = 0xffffff;
        start.border = true;
        start.borderColor = 0x000000;
        start.fontFamily = "Arial";
        start.textColor = 0x000000;
        start.size = 30;
        start.text = "开始游戏";
        start.width = 140;
        start.x = (GameData.getBgWidth() - start.width) / 2;
        start.y = 180;
        this.addChild(start);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclikSatrt, this);
    };
    p.onclikSatrt = function () {
        this.scene.removeChild(this);
        GameData.game_state = GameData.Touch;
    };
    return StartScene;
})(egret.Sprite);
egret.registerClass(StartScene,"StartScene");
