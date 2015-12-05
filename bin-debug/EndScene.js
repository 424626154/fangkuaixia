/**
 *
 * @author
 *
 */
var EndScene = (function (_super) {
    __extends(EndScene, _super);
    function EndScene(scene) {
        _super.call(this);
        this.init(scene);
    }
    var d = __define,c=EndScene;p=c.prototype;
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
        var endText = new egret.TextField();
        endText.textAlign = egret.HorizontalAlign.CENTER;
        endText.verticalAlign = egret.VerticalAlign.MIDDLE;
        endText.background = true;
        endText.backgroundColor = 0xffffff;
        endText.border = true;
        endText.borderColor = 0x000000;
        endText.fontFamily = "Arial";
        endText.textColor = 0x000000;
        endText.size = 30;
        endText.text = "重新开始";
        endText.width = 200;
        endText.height = 80;
        endText.x = (GameData.getBgWidth() - endText.width) / 2;
        endText.y = (GameData.getBgHeight() - endText.height) / 2;
        this.addChild(endText);
        endText.touchEnabled = true;
        endText.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclikSatrt, this);
        var end_text = "你用了" + GameData.GameTime + "S通过了" + GameData.lead_index + "个方块";
        var showTimerText = new egret.TextField();
        showTimerText.textAlign = egret.HorizontalAlign.CENTER;
        showTimerText.verticalAlign = egret.VerticalAlign.MIDDLE;
        showTimerText.fontFamily = "Arial";
        //        showTimerText.textColor = 0xff0000;
        showTimerText.size = 30;
        showTimerText.text = end_text;
        showTimerText.width = GameData.getBgWidth();
        showTimerText.x = 0;
        showTimerText.y = 120;
        this.addChild(showTimerText);
        var img = new egret.Bitmap();
        img.texture = RES.getRes("arrow");
        img.x = GameData.getBgWidth() - 50;
        this.addChild(img);
        var shareText = new egret.TextField();
        shareText.textAlign = egret.HorizontalAlign.CENTER;
        shareText.verticalAlign = egret.VerticalAlign.MIDDLE;
        shareText.fontFamily = "Arial";
        shareText.textColor = 0xffffff;
        shareText.size = 30;
        shareText.text = "分享到朋友圈，看看谁是下一个方块侠";
        shareText.width = GameData.getBgWidth() - 20;
        shareText.x = 0;
        shareText.y = 60;
        this.addChild(shareText);
        this.setWeixinShaseCustomInfo();
    };
    p.onclikSatrt = function () {
        var sound = RES.getRes("button");
        sound.play(0, 1);
        this.scene.removeChild(this);
        this.scene.again();
        this.scene.gameTime.start();
        GameData.GameTime = 0;
        GameData.timerText.text = GameData.GameTime + "s";
        GameData.obsText.text = GameData.lead_index + "/" + (GameData.Obstacles.length - 1);
    };
    p.setWeixinShaseCustomInfo = function () {
        var title = "谁是下一个庆安方块侠，我用了" + GameData.GameTime + "S通过了" + GameData.lead_index + "个方块,你也来试试！";
        var desc = "谁是下一个庆安方块侠，我用了" + GameData.GameTime + "S通过了" + GameData.lead_index + "个方块,你也来试试！";
        //        egret.log(desc);
        //获取“分享给朋友
        var shareAppMessage = new BodyMenuShareAppMessage();
        shareAppMessage.title = title;
        shareAppMessage.desc = desc;
        shareAppMessage.link = GameData.link;
        shareAppMessage.imgUrl = GameData.imgurl;
        wx.onMenuShareAppMessage(shareAppMessage);
        //“分享到QQ
        var shareqq = new BodyMenuShareQQ();
        shareqq.title = title;
        shareqq.desc = desc;
        shareqq.link = GameData.link;
        shareqq.imgUrl = GameData.imgurl;
        wx.onMenuShareQQ(shareqq);
        //“分享到微博”
        var shareweibo = new BodyMenuShareWeibo();
        shareweibo.title = title;
        shareweibo.desc = desc;
        shareweibo.link = GameData.link;
        shareweibo.imgUrl = GameData.imgurl;
        wx.onMenuShareWeibo(shareweibo);
        //“分享到朋友圈
        var sharet = new BodyMenuShareTimeline();
        sharet.title = title;
        sharet.link = GameData.link;
        sharet.imgUrl = GameData.imgurl;
        wx.onMenuShareTimeline(sharet);
    };
    return EndScene;
})(egret.Sprite);
egret.registerClass(EndScene,"EndScene");
