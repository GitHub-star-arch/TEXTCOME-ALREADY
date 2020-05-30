class Game {
    constructor() {}
    getState () {
        var readState = database.ref('gameState');
        readState.on("value",function(data){
            gameState=data.val();
        })
    }
    update (state) {
        data.ref('/').update({
            gameState : state
        })
    }
    start () {
        if (gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}