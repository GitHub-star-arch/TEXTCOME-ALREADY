class Player {
    constructor() {}
    getCount () {
        var readCount = database.ref('playerCount');
        readCount.on("value",function(data){
            playerCount=data.val();
        })
    }
    updateCount (Count) {
        data.ref('/').update({
            playerCount : Count
        })
    }
    update (name) {
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name : name
        });
    }
}