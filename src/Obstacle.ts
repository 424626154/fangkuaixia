/**
 *
 * @author 
 *
 */
class Obstacle extends egret.Sprite {
    private body: egret.Sprite;
    public index_x: number;
    public constructor(index_x: number,body: egret.Sprite) {
        super();
        this.body = body;
        this.index_x = index_x
        this.init(index_x);
        GameData.Obstacles.push(this);
    }
    public init(index_x: number) {
        this.x = index_x*GameData.base_w;
        this.y = GameData.getBgHeight() - GameData.obstacle_h * GameData.base_h;
        this.drawObstacle();
    }
    public drawObstacle() {

        for(var i = 0;i < GameData.obstacle_w;i++) {
            for(var j = 0;j < GameData.obstacle_h;j++) {
                var rect: egret.Shape = new egret.Shape();
                rect.graphics.beginFill(0xffffff);
                rect.graphics.drawRoundRect(i * GameData.base_w,j * GameData.base_h,GameData.base_w,GameData.base_h,4,4);
                rect.graphics.endFill();
                rect.graphics.beginFill(0x000000);
                rect.graphics.drawRoundRect(i * GameData.base_w + 1,j * GameData.base_h + 1,GameData.base_w - 2,GameData.base_h - 2,4,4);
                rect.graphics.endFill();
                this.addChild(rect);
            }
        }
        this.body.addChild(this);
    }

}
