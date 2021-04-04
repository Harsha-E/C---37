class Game {
    constructor(){
    }
    getState(){
    var gameStateRef = database.ref('gameState');

    gameStateRef.on("value", function(data){
        gameState = data.val();
    });

    }

    update(state){
        database.ref('/').update({
            gameState : state
        });
    }

    play(){
        
        form.hide();
        textSize(30);
        text(" ||>>~Ready On Your Keys! ", 120 , 150);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var display_position = 130;
            for(var plr in allPlayers){
                if(plr === "player" + player.index){
                    fill('red');
                }else{
                    fill('black');
                }
            }

            display_position += 20;
            
            textSize(15);
            text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_position);
        }
        
        if(keyDown(UP_ARROW) && Player.index !== null){
            player.distance = player.distance + 30;
            player.update();
            
        }
    }

    async state(){
       if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }

    }
}


/////////////////////////////////////////////////////////////////////////////
/*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-database.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB2QuyQ_C9M33rfqpymHMae_Ex3H_f1Mww",
    authDomain: "project-35-31784.firebaseapp.com",
    databaseURL: "https://project-35-31784-default-rtdb.firebaseio.com",
    projectId: "project-35-31784",
    storageBucket: "project-35-31784.appspot.com",
    messagingSenderId: "305865294828",
    appId: "1:305865294828:web:acf5293bc20abea24cb6c9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/