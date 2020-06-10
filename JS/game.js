class Game {
    constructor() {}
    getState () {
        var readState = database.ref('gameState');
        readState.on("value",function(data){
            gameState=data.val();
        })
    }
    update (state) {
        database.ref('/').update({
            gameState : state
        })
    }
    async start () {
        if (gameState === 0) {
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if (playerCountref.exists()) {
                playerCount = playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4]
        car1.addImage(c1i);
        car2.addImage(c3i);
        car3.addImage(c2i);
        car4.addImage(c4i);
    }
    play () {
        form.hide();
        //textSize(30);
        //text("gameStart",120,100);
        Player.playerInfo();
        image(trasck,0,-displayHeight*4,displayWidth,displayHeight*5)
        if (allPlayers!== undefined) {
            var index = 0, x=275, y;
            //var displayPosition = 130;
            for (var plar in allPlayers) {
                index=index+1;
                x=x+260;
                y=displayHeight-allPlayers[plar].distance;
                cars[index-1].x=x
                cars[index-1].y=y;
                if (index === player.index) {
                    cars[index-1].shapeColor="red";
                    fill(255,0,0)
                    ellipse(x,y,60,60)
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
                //if (plar === "player"+player.index) {
                //    fill("red");
                //} else {
                //    fill("black");
                //}   
            //displayPosition+= 20;
            //textSize(15);
            //text(allPlayers[plar].name+":"+allPlayers[plar].distance,120,displayPosition);
            }
        
        }
        if (keyIsDown(UP_ARROW) && player.index!== null) {
            player.distance+= 10;
            player.update();
        }
        drawSprites();
        if (player.distance>5300) {
            gameState = 2;
        }
    }
}