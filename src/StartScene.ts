/**
 *
 * @author 
 *
 */
class StartScene extends egret.Sprite{
    private scene: GameScene;
	public constructor(scene: GameScene) {
        super();
        this.init(scene)
	}
    public init(scene: GameScene) { 
        this.scene = scene;
        this.width = GameData.getBgWidth();
        this.height = GameData.getBgHeight();
        this.scene.addChild(this);
                
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0x000000,0.5);
        shape.graphics.drawRect(0, 0, GameData.getBgWidth(),GameData.getBgHeight());
        shape.graphics.endFill();
        this.addChild(shape);
                
               
        var start:egret.TextField = new egret.TextField();
        start.textAlign = egret.HorizontalAlign.CENTER;
        start.background = true;
        start.backgroundColor = 0xffffff;
        start.border = true;
        start.borderColor = 0x000000;
        start.fontFamily = "Arial";
        start.textColor = 0x000000;
        start.size = 30;
        start.text = "开始游戏";
        start.width = 140;
        start.x = (GameData.getBgWidth() - start.width) / 2;
        start.y = 180;  
        this.addChild(start);
        start.touchEnabled = true;
        start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclikSatrt,this)
    }
    public onclikSatrt() { 
        var sound:egret.Sound = RES.getRes("button");
        sound.play(0,1);
        this.scene.removeChild(this);
        this.scene.gameTime.start();
        GameData.game_state = GameData.Touch;
    }
}
