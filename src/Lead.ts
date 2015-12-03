/**
 * 主角
 * @author 
 *
 */
class Lead extends egret.Sprite {
    private index_x: number;
    private scene: GameScene;
    public constructor(index_x: number,scene:GameScene) {
        super();
        this.index_x = index_x;
        this.scene = scene;
        this.init(index_x,scene);
    }
    public init(index_x: number,scene:GameScene) {
        this.x = index_x * GameData.base_w;
        this.y = GameData.getBgHeight() - GameData.obstacle_h * GameData.base_h - GameData.lead_h * GameData.base_h;
        for(var i = 0;i < GameData.lead_w;i++) {
            for(var j = 0;j < GameData.lead_h;j++) {
                var rect: egret.Shape = new egret.Shape();
                rect.graphics.beginFill(0xffffff);
                rect.graphics.drawRoundRect(i * GameData.base_w,j * GameData.base_h,GameData.base_w,GameData.base_h,4,4);
                rect.graphics.endFill();
                rect.graphics.beginFill(0xff0000);
                rect.graphics.drawRoundRect(i * GameData.base_w + 1,j * GameData.base_h + 1,GameData.base_w - 2,GameData.base_h - 2,4,4);
                rect.graphics.endFill();
                this.addChild(rect);
            }
        }
        scene.addChild(this);
    }
    public move() {
        var to_x = this.x + GameData.lead_move_step * GameData.base_w;
        var tween_time = GameData.lead_move_step * GameData.base_tween_time;
        //创建 Tween 对象
        egret.Tween.get(this,{
            loop: false,//设置循环播放
            onChange: this.onChange,//设置更新函数
            onChangeObj: this//更新函数作用域
        })
            .to({ x: to_x },tween_time)//设置2000毫秒内 rotation 属性变为90
            .wait(500)//设置等待1000毫秒
            .call(this.onComplete,this);//设置回调函数及作用域，可用于侦听动画完成
    }

    private onChange(): void {
        //        egret.log("onChange");
    }

    private onComplete(): void {
        if(GameData.b_life) {
            GameData.game_state = GameData.SceneMove;
            this.scene.resetStick();
            this.scene.moveScene();
        } else { 
//            egret.log("GameData.end_state",GameData.end_state);
            if(GameData.end_state == 1) {
                GameData.game_state = GameData.Victory;
                this.victory();
            } else { 
                GameData.game_state = GameData.Death;
                this.death();
            }
  
        }
    }
    
    public death() { 
        //创建 Tween 对象
        egret.Tween.get(this,{
            loop: false,//设置循环播放
            onChange: this.onDeathChange,//设置更新函数
            onChangeObj: this//更新函数作用域
        })
        .to({ y: GameData.getBgHeight() },GameData.tween_time)//设置2000毫秒内 rotation 属性变为90
        .wait(GameData.wait_time)//设置等待1000毫秒
            .call(this.onDeathComplete,this);//设置回调函数及作用域，可用于侦听动画完成
    }
    private onDeathChange() { 
        
    }
    private onDeathComplete() { 
        this.scene.endgame();
    }
    public victory() { 
        //创建 Tween 对象
        egret.Tween.get(this,{
            loop: false,//设置循环播放
            onChange: this.onDeathChange,//设置更新函数
            onChangeObj: this//更新函数作用域
        })
        .to({ scaleX:2.0,scaleY:2.0},GameData.tween_time)//设置2000毫秒内 rotation 属性变为90
        .wait(GameData.wait_time)//设置等待1000毫秒
            .call(this.onDeathComplete,this);//设置回调函数及作用域，可用于侦听动画完成
        }
        private onVictoryChange() { 
                    
            }
            private onVictoryComplete() { 
                this.scene.endgame();
            }
    
}
