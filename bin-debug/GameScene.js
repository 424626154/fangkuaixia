/**
 *
 * @author
 *
 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=GameScene;p=c.prototype;
    p.init = function () {
        this.x = 0;
        this.y = 0;
        this.width = GameData.getBgWidth();
        this.height = GameData.getBgHeight();
        var gameBg = new GameBg(GameData.gamebg_w, GameData.gamebg_h, this);
        this.addChild(gameBg);
        this.addObstacle();
        this.addStick();
        this.addLead();
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touch, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touch, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touch, this);
        this.timer = new egret.Timer(GameData.timer_time, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this.timer.start();
        GameData.game_state = GameData.Start;
        this.startScene = new StartScene(this);
    };
    /**
     * 添加障碍物
     */
    p.addObstacle = function () {
        var o_x = 0;
        var o_num_w = 0;
        var o_num_h = 0;
        var column = Math.floor(GameData.gamebg_w / GameData.base_w);
        var obs_num = Math.ceil(column / GameData.obstacle_range);
        for (var i = 0; i < obs_num; i++) {
            var index_x = i * GameData.obstacle_range + GameData.random(0, GameData.obstacle_range - GameData.obstacle_w);
            var obs = new Obstacle(index_x, this);
        }
    };
    /**
     * 添加主角
     */
    p.addLead = function () {
        GameData.b_life = true;
        var obs = GameData.Obstacles[GameData.lead_index];
        this.lead = new Lead(obs.index_x + (GameData.obstacle_w - GameData.lead_w) / 2, this);
    };
    /**
     * 添加棍子
     */
    p.addStick = function () {
        //        egret.log("addStick:",GameData.lead_index);
        var obs = GameData.Obstacles[GameData.lead_index];
        this.stick = new Stick(obs.index_x + (GameData.obstacle_w - GameData.stick_w), this);
    };
    /**
     * 棍子生长
     */
    p.growStick = function () {
        this.stick.grow();
    };
    p.touch = function (event) {
        if (GameData.game_state != GameData.Touch) {
            return;
        }
        switch (event.type) {
            case egret.TouchEvent.TOUCH_BEGIN:
                GameData.b_touch = true;
                break;
            case egret.TouchEvent.TOUCH_MOVE:
                //                if(!GameData.b_touch) {
                //                }
                GameData.b_touch = true;
                break;
            case egret.TouchEvent.TOUCH_END:
                GameData.b_touch = false;
                this.stick.rotate();
                break;
        }
    };
    p.timerFunc = function (event) {
        if (GameData.b_touch) {
            this.growStick();
        }
    };
    /**
     * 主角移动
     */
    p.moveLead = function () {
        var from_obs = GameData.Obstacles[GameData.lead_index];
        var to_obs = GameData.Obstacles[GameData.lead_index + 1];
        var move_x = to_obs.index_x - from_obs.index_x - GameData.obstacle_w - this.stick.getRow();
        //        egret.log("move_x:",move_x);
        //        egret.log("GameData.Obstacles.length:" ,GameData.Obstacles.length);
        if (move_x <= 0 && move_x >= -GameData.obstacle_w) {
            GameData.lead_move_step = to_obs.index_x - from_obs.index_x;
            //            egret.log("GameData.lead_index",GameData.lead_index);
            if (GameData.lead_index == GameData.Obstacles.length - 2) {
                GameData.b_life = false;
                GameData.end_state = 1;
            }
            else {
                GameData.b_life = true;
            }
        }
        else {
            GameData.lead_move_step = this.stick.getRow() + (GameData.obstacle_w - GameData.lead_w) / 2;
            GameData.b_life = false;
            GameData.end_state = 2;
        }
        this.lead.move();
    };
    /**
     * 重置棍子
     */
    p.resetStick = function () {
        GameData.lead_index += 1;
        var obs = GameData.Obstacles[GameData.lead_index];
        this.stick.reset(obs.index_x + (GameData.obstacle_w - GameData.stick_w));
    };
    p.moveScene = function () {
        var move_w = GameData.lead_move_step * GameData.base_w;
        var to_x = this.x - GameData.lead_move_step * GameData.base_w;
        //        egret.log("to_x",to_x);
        //        egret.log("-(GameData.gamebg_w - GameData.getBgWidth())",-(GameData.gamebg_w - GameData.getBgWidth()));
        if (to_x < -(GameData.gamebg_w - GameData.getBgWidth())) {
            to_x = -(GameData.gamebg_w - GameData.getBgWidth());
        }
        egret.Tween.get(this, {
            loop: false,
            onChange: this.onChange,
            onChangeObj: this //更新函数作用域
        })
            .to({ x: to_x }, GameData.tween_time) //设置2000毫秒内 rotation 属性变为90
            .wait(GameData.wait_time) //设置等待1000毫秒
            .call(this.onComplete, this); //设置回调函数及作用域，可用于侦听动画完成
    };
    p.onChange = function () {
    };
    p.onComplete = function () {
        GameData.game_state = GameData.Touch;
    };
    p.endgame = function () {
        GameData.game_state = GameData.End;
        this.endScene = new EndScene(this);
        this.endScene.x = -this.x;
    };
    p.again = function () {
        this.x = 0;
        for (var i = 0; i < GameData.Obstacles.length; i++) {
            var obs = GameData.Obstacles[i];
            this.removeChild(obs);
        }
        GameData.Obstacles = new Array();
        GameData.lead_index = 0;
        this.removeChild(this.stick);
        this.removeChild(this.lead);
        this.addObstacle();
        this.addStick();
        this.addLead();
        GameData.game_state = GameData.Touch;
    };
    return GameScene;
})(egret.Sprite);
egret.registerClass(GameScene,"GameScene");
