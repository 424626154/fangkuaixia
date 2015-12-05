/**
 * 棍子
 * @author 
 *
 */
class Stick extends egret.Sprite {
    private row: number;//行
    private rect: egret.Shape;
    private index_x: number;
    private scene: GameScene;
    public constructor(index_x: number,scene: GameScene) {
        super();
        this.scene = scene;
        this.index_x = index_x;
        this.init(index_x,scene);
    }
    public init(index_x: number,scene: GameScene) {
        this.row = GameData.stick_base_h;
        this.x = index_x * GameData.base_w + GameData.base_w;
        this.y = GameData.getBgHeight() - GameData.obstacle_h * GameData.base_h + GameData.stick_base_h * GameData.base_h;
        this.rect = new egret.Shape();
        scene.addChild(this);
        this.drawShape();
    }
    public drawShape() {
        this.rect.graphics.clear();
        for(var i = 0;i < this.row;i++) {
//            this.rect.graphics.beginFill(0xffffff);
//            this.rect.graphics.drawRoundRect(0,i * GameData.base_h,GameData.base_w,GameData.base_h,4,4);
//            this.rect.graphics.endFill();
//            this.rect.graphics.beginFill(0x666633);
//            this.rect.graphics.drawRoundRect(1,i * GameData.base_h + 1,GameData.base_w - 2,GameData.base_h - 2,4,4);
//            this.rect.graphics.endFill();
            this.rect.graphics.beginFill(0x666633);
            this.rect.graphics.drawRect(0,i * GameData.base_h,GameData.base_w,GameData.base_h);
            this.rect.graphics.endFill();
            this.addChild(this.rect);
        }


        this.anchorOffsetX = this.width;
        this.anchorOffsetY = this.height;
    }
    /**
     * 增长
     */
    public grow() {
        var sound:egret.Sound = RES.getRes("stick_grow_loop");
        sound.play(0,1);
        this.row += 1;
        this.y = GameData.getBgHeight() - GameData.obstacle_h * GameData.base_h + GameData.stick_base_h * GameData.base_h;
        this.drawShape();
    }
    /**
     * 旋转
     */
    public rotate() {
        GameData.game_state = GameData.StickMove;
        var rect = new egret.Shape();
        rect.graphics.beginFill(0xffff00);
        rect.graphics.drawRect(0,0,this.width,this.height);
        rect.graphics.endFill();
        //创建 Tween 对象
        egret.Tween.get(this,{
            loop: false,//设置循环播放
            onChange: this.onChange,//设置更新函数
            onChangeObj: this//更新函数作用域
        })
            .to({ rotation: 90 },GameData.tween_time)//设置2000毫秒内 rotation 属性变为90
            .wait(GameData.wait_time)//设置等待1000毫秒
            .call(this.onComplete,this);//设置回调函数及作用域，可用于侦听动画完成
    }

    private onChange(): void {
    }

    private onComplete(): void {
        var sound:egret.Sound = RES.getRes("kick");
        sound.play(0,1);
        GameData.game_state = GameData.LeadMove;
        this.scene.moveLead();
    }
    public getRow() :number { 
        return this.row; 
    }
    /**
     * 重置
     */ 
    public reset(index_x: number) { 
        this.row = GameData.stick_base_h;
        this.rotation = 0;
        this.x = index_x * GameData.base_w + GameData.base_w;
        this.y = GameData.getBgHeight() - GameData.obstacle_h * GameData.base_h + GameData.stick_base_h * GameData.base_h;
        this.drawShape();
    }
}
