/**
 * 主角
 * @author
 *
 */
var Lead = (function (_super) {
    __extends(Lead, _super);
    function Lead(index_x, scene) {
        _super.call(this);
        this.index_x = index_x;
        this.scene = scene;
        this.init(index_x, scene);
    }
    var d = __define,c=Lead;p=c.prototype;
    p.init = function (index_x, scene) {
        this.x = index_x * GameData.base_w;
        this.y = GameData.getBgHeight() - GameData.obstacle_h * GameData.base_h - GameData.lead_h * GameData.base_h;
        for (var i = 0; i < GameData.lead_w; i++) {
            for (var j = 0; j < GameData.lead_h; j++) {
                var rect = new egret.Shape();
                //                rect.graphics.beginFill(0xffffff);
                //                rect.graphics.drawRoundRect(i * GameData.base_w,j * GameData.base_h,GameData.base_w,GameData.base_h,4,4);
                //                rect.graphics.endFill();
                //                rect.graphics.beginFill(0xff0000);
                //                rect.graphics.drawRoundRect(i * GameData.base_w + 1,j * GameData.base_h + 1,GameData.base_w - 2,GameData.base_h - 2,4,4);
                //                rect.graphics.endFill();
                rect.graphics.beginFill(0xff0000);
                rect.graphics.drawRect(i * GameData.base_w, j * GameData.base_h, GameData.base_w, GameData.base_h);
                rect.graphics.endFill();
                this.addChild(rect);
            }
        }
        scene.addChild(this);
    };
    p.move = function () {
        var to_x = this.x + GameData.lead_move_step * GameData.base_w;
        var tween_time = GameData.lead_move_step * GameData.base_tween_time;
        var sound = RES.getRes("kick");
        sound.play(0, GameData.lead_move_step - 1);
        //创建 Tween 对象
        egret.Tween.get(this, {
            loop: false,
            onChange: this.onChange,
            onChangeObj: this //更新函数作用域
        })
            .to({ x: to_x }, tween_time) //设置2000毫秒内 rotation 属性变为90
            .wait(500) //设置等待1000毫秒
            .call(this.onComplete, this); //设置回调函数及作用域，可用于侦听动画完成
    };
    p.onChange = function () {
        //        egret.log("onChange");
    };
    p.onComplete = function () {
        if (GameData.b_life) {
            GameData.game_state = GameData.SceneMove;
            this.scene.resetStick();
            this.scene.moveScene();
            GameData.obsText.text = GameData.lead_index + "/" + (GameData.Obstacles.length - 1);
        }
        else {
            //            egret.log("GameData.end_state",GameData.end_state);
            if (GameData.end_state == 1) {
                GameData.game_state = GameData.Victory;
                this.victory();
            }
            else {
                GameData.game_state = GameData.Death;
                this.death();
            }
        }
    };
    p.death = function () {
        var sound = RES.getRes("death");
        sound.play(0, 1);
        //创建 Tween 对象
        egret.Tween.get(this, {
            loop: false,
            onChange: this.onDeathChange,
            onChangeObj: this //更新函数作用域
        })
            .to({ y: GameData.getBgHeight() }, GameData.tween_time) //设置2000毫秒内 rotation 属性变为90
            .wait(GameData.wait_time) //设置等待1000毫秒
            .call(this.onDeathComplete, this); //设置回调函数及作用域，可用于侦听动画完成
    };
    p.onDeathChange = function () {
    };
    p.onDeathComplete = function () {
        this.scene.endgame();
    };
    p.victory = function () {
        var sound = RES.getRes("victory");
        sound.play(0, 1);
        //创建 Tween 对象
        egret.Tween.get(this, {
            loop: false,
            onChange: this.onDeathChange,
            onChangeObj: this //更新函数作用域
        })
            .to({ scaleX: 2.0, scaleY: 2.0 }, GameData.tween_time) //设置2000毫秒内 rotation 属性变为90
            .wait(GameData.wait_time) //设置等待1000毫秒
            .call(this.onDeathComplete, this); //设置回调函数及作用域，可用于侦听动画完成
    };
    p.onVictoryChange = function () {
    };
    p.onVictoryComplete = function () {
        this.scene.endgame();
    };
    return Lead;
})(egret.Sprite);
egret.registerClass(Lead,"Lead");
