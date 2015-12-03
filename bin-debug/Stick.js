/**
 * 棍子
 * @author
 *
 */
var Stick = (function (_super) {
    __extends(Stick, _super);
    function Stick(index_x, scene) {
        _super.call(this);
        this.scene = scene;
        this.index_x = index_x;
        this.init(index_x, scene);
    }
    var d = __define,c=Stick;p=c.prototype;
    p.init = function (index_x, scene) {
        this.row = GameData.stick_base_h;
        this.x = index_x * GameData.base_w + GameData.base_w;
        this.y = GameData.getBgHeight() - GameData.obstacle_h * GameData.base_h + GameData.stick_base_h * GameData.base_h;
        this.rect = new egret.Shape();
        scene.addChild(this);
        this.drawShape();
    };
    p.drawShape = function () {
        this.rect.graphics.clear();
        for (var i = 0; i < this.row; i++) {
            this.rect.graphics.beginFill(0xffffff);
            this.rect.graphics.drawRoundRect(0, i * GameData.base_h, GameData.base_w, GameData.base_h, 4, 4);
            this.rect.graphics.endFill();
            this.rect.graphics.beginFill(0x666633);
            this.rect.graphics.drawRoundRect(1, i * GameData.base_h + 1, GameData.base_w - 2, GameData.base_h - 2, 4, 4);
            this.rect.graphics.endFill();
            this.addChild(this.rect);
        }
        this.anchorOffsetX = this.width;
        this.anchorOffsetY = this.height;
    };
    /**
     * 增长
     */
    p.grow = function () {
        var sound = RES.getRes("stick_grow_loop");
        sound.play(0, 1);
        this.row += 1;
        this.y = GameData.getBgHeight() - GameData.obstacle_h * GameData.base_h + GameData.stick_base_h * GameData.base_h;
        this.drawShape();
    };
    /**
     * 旋转
     */
    p.rotate = function () {
        GameData.game_state = GameData.StickMove;
        var rect = new egret.Shape();
        rect.graphics.beginFill(0xffff00);
        rect.graphics.drawRect(0, 0, this.width, this.height);
        rect.graphics.endFill();
        //创建 Tween 对象
        egret.Tween.get(this, {
            loop: false,
            onChange: this.onChange,
            onChangeObj: this //更新函数作用域
        })
            .to({ rotation: 90 }, GameData.tween_time) //设置2000毫秒内 rotation 属性变为90
            .wait(GameData.wait_time) //设置等待1000毫秒
            .call(this.onComplete, this); //设置回调函数及作用域，可用于侦听动画完成
    };
    p.onChange = function () {
    };
    p.onComplete = function () {
        var sound = RES.getRes("kick");
        sound.play(0, 1);
        GameData.game_state = GameData.LeadMove;
        this.scene.moveLead();
    };
    p.getRow = function () {
        return this.row;
    };
    /**
     * 重置
     */
    p.reset = function (index_x) {
        this.row = GameData.stick_base_h;
        this.rotation = 0;
        this.x = index_x * GameData.base_w + GameData.base_w;
        this.y = GameData.getBgHeight() - GameData.obstacle_h * GameData.base_h + GameData.stick_base_h * GameData.base_h;
        this.drawShape();
    };
    return Stick;
})(egret.Sprite);
egret.registerClass(Stick,"Stick");
