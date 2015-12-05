/**
 *
 * @author 
 *
 */
class GameBg extends egret.Sprite{
    private bg_w: number;
    private bg_h: number;
    private row: number;//行
    private column: number;//列
    private scene: GameScene;
	public constructor(w:number,h:number,scene:GameScene) {
        super();
        this.scene = scene;
        this.init(w,h);
	}
    public init(w:number,h:number) { 
        var bg: egret.Shape = new egret.Shape();
        bg.graphics.beginFill(0x000000);
        bg.graphics.drawRect(0,0,GameData.getBgWidth(),GameData.getBgHeight());
        bg.graphics.endFill();
        this.addChild(bg)
        
        this.bg_w = w;
        this.bg_h = h;
        this.column = Math.floor(this.bg_w / GameData.base_w);
        this.row = Math.floor(this.bg_h/ GameData.base_h);
//        egret.log("column :",this.column);
//                egret.log("row :",this.row);
//        this.addRect(0,0);
        for(var i = 0;i < this.column; i++){ 
            for(var j = 0;j < this.row; j++){ 
                this.addRect(i*GameData.base_w,GameData.getBgHeight()-(j+1)*GameData.base_h);
            }
        }
    }
    
    public addRect(x:number,y:number) { 
        var rect: egret.Shape = new egret.Shape();
//        rect.graphics.beginFill(0x000000);
//        rect.graphics.drawRoundRect(x,y,GameData.base_w,GameData.base_h,4,4);
//        rect.graphics.endFill();
//        rect.graphics.beginFill(0xffffff);
//        rect.graphics.drawRoundRect(x+1,y+1,GameData.base_w-2,GameData.base_h-2,4,4);
//        rect.graphics.endFill();
        rect.graphics.beginFill(0xCCCCCC);
        rect.graphics.drawRect(x,y,GameData.base_w,GameData.base_h);
        rect.graphics.endFill();
        this.addChild(rect);
    }   

}
