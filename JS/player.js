class Player {
    constructor() {
        this.index=null;
        this.name=null;
        this.distance=0;
        this.Rank=0;
    }
    getCount () {
        var readCount = database.ref('playerCount');
        readCount.on("value",function(data){
            playerCount=data.val();
        })
    }
    updateCount (Count) {
        database.ref('/').update({
            playerCount : Count
        })
    }
    update () {
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        });
    }
    static playerInfo () {
        var playerInforef=database.ref('players');
        playerInforef.on("value",(data)=>{
            allPlayers = data.val();
        });
    }
    static updateRank (Rank) {
        database.ref('/').update({
            playerRank : Rank
        })
    }
    readRank () {
        database.ref('playerRank').on("value",(data)=>{
        this.Rank=data.val();
        });
    }
}