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
    public static gamebg_w = 900;
    public static gamebg_h = 480;
    public static obstacle_w = 4;
    public static obstacle_h = 8;
    public static obstacle_range = 8;//范围
    public static lead_index = 0;
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
}
