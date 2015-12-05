/**
 *
 * @author 
 *
 */
class GameData {
    public static base_w: number = 20;
    public static base_h: number = 20;
    private static bgWidth: number = 0;   //屏幕宽度
    private static bgHeight: number = 0;  //屏幕高度
    public static Obstacles = new Array<Obstacle>();
    public static gamebg_w = 6000;
    public static gamebg_h = 480;
    public static obstacle_w = 4;
    public static obstacle_h = 8;
    public static obstacle_range = 8;//范围
    public static lead_index = 0;//主角位置
    public static lead_w = 2;
    public static lead_h = 2;
    public static stick_w = 1;
    public static stick_base_h = 1;
    public static game_state = 0;//0 初始化状态 1 触屏状态 2 主角移动状态 3 场景移动状态 4 棍子动画 5死亡 6 开始游戏 7 结束游戏 8 胜利
    public static b_touch = false;
    public static lead_move_step = 0;
    public static base_tween_time = 200;
    public static wait_time = 200;
    public static tween_time = 300;
    public static timer_time = 200;
    public static end_state = 0;//1 胜利 2 失败
    
    public static Touch = 1;
    public static LeadMove = 2;
    public static SceneMove = 3;
    public static StickMove = 4;
    public static Death = 5;
    public static Start = 6;
    public static End = 7;
    public static Victory = 8;
    
    public static b_life = false;//生命
    
    public static game_timer_time = 1000;
    public static GameTime = 0;
    
    public static timerText: egret.TextField;
    public static obsText: egret.TextField;
    
    public static game_name = "庆安方块侠";
    public static start_tips = "作为庆安人考验下你对长度的预估能力，红色方块为主角，黑色方块为柱子，你所要做的就是预判两者之间空隙的长度，然后通过点击屏幕再松开在前进的道路上铺出一条棍桥使其通过，棍子的长度不能太长或太短，否则都会掉进深渊。";
    
    public static link = "http://mp.weixin.qq.com/s?__biz=MzA5MTQ2NjQ2MA==&mid=400587491&idx=1&sn=c24b92a0dfe624692abd7eca78cd491a";
    public static imgurl = location.href.split("#")[0]+"/resource/assets/logo32.png";
    public constructor() {
    }
	
    /**
    * 屏幕宽度
    */
    public static getBgWidth(): number {
        if(GameData.bgWidth == 0) {
            GameData.bgWidth = egret.MainContext.instance.stage.stageWidth;
        }
        return GameData.bgWidth;
    }
    /**
    * 屏幕高度
    */
    public static getBgHeight(): number {
        if(GameData.bgHeight == 0) {
            GameData.bgHeight = egret.MainContext.instance.stage.stageHeight;
        }
        return GameData.bgHeight;
    }

    public static random(min,max): number {
        return Math.floor(min + Math.random() * (max - min));
    }
    public static initTimerText(body:egret.DisplayObjectContainer ) { 
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
    }
    public static initObsText(body:egret.DisplayObjectContainer ) { 
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
    }
}
