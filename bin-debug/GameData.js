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
    GameData.base_w = 20;
    GameData.base_h = 20;
    GameData.bgWidth = 0; //屏幕宽度
    GameData.bgHeight = 0; //屏幕高度
    GameData.Obstacles = new Array();
    GameData.gamebg_w = 900;
    GameData.gamebg_h = 480;
    GameData.obstacle_w = 4;
    GameData.obstacle_h = 8;
    GameData.obstacle_range = 8; //范围
    GameData.lead_index = 0;
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
    return GameData;
})();
egret.registerClass(GameData,"GameData");
