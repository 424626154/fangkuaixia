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
        //        var gamenameText = new egret.TextField();
        //        gamenameText.textAlign = egret.HorizontalAlign.CENTER;
        //        gamenameText.size = 40;
        //        gamenameText.text = GameData.game_name;
        //        gamenameText.width = GameData.getBgWidth();
        //        gamenameText.wordWrap = true;
        //        gamenameText.x = 0;
        //        gamenameText.y = 60;
        //        this.addChild(gamenameText);
        var gametipsText = new egret.TextField();
        gametipsText.textAlign = egret.HorizontalAlign.CENTER;
        gametipsText.size = 30;
        gametipsText.text = GameData.start_tips;
        gametipsText.width = GameData.getBgWidth() - 20;
        gametipsText.x = 10;
        gametipsText.y = 40;
        this.addChild(gametipsText);
        var start = new egret.TextField();
        start.textAlign = egret.HorizontalAlign.CENTER;
        start.verticalAlign = egret.VerticalAlign.MIDDLE;
        start.background = true;
        start.backgroundColor = 0xffffff;
        start.border = true;
        start.borderColor = 0x000000;
        start.fontFamily = "Arial";
        start.textColor = 0x000000;
        start.size = 30;
        start.text = "开始游戏";
        start.width = 140;
        start.height = 60;
        start.x = (GameData.getBgWidth() - start.width) / 2;
        start.y = (GameData.getBgHeight() - start.height) / 2;
        this.addChild(start);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclikSatrt, this);
    };
    p.onclikSatrt = function () {
        var sound = RES.getRes("button");
        sound.play(0, 1);
        this.scene.removeChild(this);
        this.scene.gameTime.start();
        GameData.game_state = GameData.Touch;
        GameData.GameTime = 0;
        GameData.timerText.text = GameData.GameTime + "s";
        GameData.obsText.text = GameData.lead_index + "/" + (GameData.Obstacles.length - 1);
    };
    return StartScene;
})(egret.Sprite);
egret.registerClass(StartScene,"StartScene");
