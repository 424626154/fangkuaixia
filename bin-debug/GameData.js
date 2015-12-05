/**
 *
 * @author
 *
 */
var GameData = (function () {
    function GameData() {
    }
    var d = __define,c=GameData;p=c.prototype;
    /**
    * 屏幕宽度
    */
    GameData.getBgWidth = function () {
        if (GameData.bgWidth == 0) {
            GameData.bgWidth = egret.MainContext.instance.stage.stageWidth;
        }
        return GameData.bgWidth;
    };
    /**
    * 屏幕高度
    */
    GameData.getBgHeight = function () {
        if (GameData.bgHeight == 0) {
            GameData.bgHeight = egret.MainContext.instance.stage.stageHeight;
        }
        return GameData.bgHeight;
    };
    GameData.random = function (min, max) {
        return Math.floor(min + Math.random() * (max - min));
    };
    GameData.initTimerText = function (body) {
        GameData.timerText = new egret.TextField();
        GameData.timerText.textAlign = egret.HorizontalAlign.CENTER;
        GameData.timerText.verticalAlign = egret.VerticalAlign.MIDDLE;
        GameData.timerText.fontFamily = "Arial";
        GameData.timerText.textColor = 0xff0000;
        GameData.timerText.size = 40;
        GameData.timerText.text = "";
        GameData.timerText.width = 80;
        GameData.timerText.height = 80;
        GameData.timerText.x = 0;
        GameData.timerText.y = 0;
        body.addChild(GameData.timerText);
    };
    GameData.initObsText = function (body) {
        GameData.obsText = new egret.TextField();
        GameData.obsText.textAlign = egret.HorizontalAlign.CENTER;
        GameData.obsText.verticalAlign = egret.VerticalAlign.MIDDLE;
        GameData.obsText.fontFamily = "Arial";
        GameData.obsText.textColor = 0xff0000;
        GameData.obsText.size = 40;
        GameData.obsText.text = "";
        GameData.obsText.width = 160;
        GameData.obsText.height = 80;
        GameData.obsText.x = 120;
        GameData.obsText.y = 0;
        body.addChild(GameData.obsText);
    };
    GameData.base_w = 20;
    GameData.base_h = 20;
    GameData.bgWidth = 0; //屏幕宽度
    GameData.bgHeight = 0; //屏幕高度
    GameData.Obstacles = new Array();
    GameData.gamebg_w = 6000;
    GameData.gamebg_h = 480;
    GameData.obstacle_w = 4;
    GameData.obstacle_h = 8;
    GameData.obstacle_range = 8; //范围
    GameData.lead_index = 0; //主角位置
    GameData.lead_w = 2;
    GameData.lead_h = 2;
    GameData.stick_w = 1;
    GameData.stick_base_h = 1;
    GameData.game_state = 0; //0 初始化状态 1 触屏状态 2 主角移动状态 3 场景移动状态 4 棍子动画 5死亡 6 开始游戏 7 结束游戏 8 胜利
    GameData.b_touch = false;
    GameData.lead_move_step = 0;
    GameData.base_tween_time = 200;
    GameData.wait_time = 200;
    GameData.tween_time = 300;
    GameData.timer_time = 200;
    GameData.end_state = 0; //1 胜利 2 失败
    GameData.Touch = 1;
    GameData.LeadMove = 2;
    GameData.SceneMove = 3;
    GameData.StickMove = 4;
    GameData.Death = 5;
    GameData.Start = 6;
    GameData.End = 7;
    GameData.Victory = 8;
    GameData.b_life = false; //生命
    GameData.game_timer_time = 1000;
    GameData.GameTime = 0;
    GameData.game_name = "庆安方块侠";
    GameData.start_tips = "作为庆安人考验下你对长度的预估能力，红色方块为主角，黑色方块为柱子，你所要做的就是预判两者之间空隙的长度，然后通过点击屏幕再松开在前进的道路上铺出一条棍桥使其通过，棍子的长度不能太长或太短，否则都会掉进深渊。";
    GameData.link = "http://mp.weixin.qq.com/s?__biz=MzA5MTQ2NjQ2MA==&mid=400587491&idx=1&sn=c24b92a0dfe624692abd7eca78cd491a";
    GameData.imgurl = location.href.split("#")[0] + "/resource/assets/logo32.png";
    return GameData;
})();
egret.registerClass(GameData,"GameData");
