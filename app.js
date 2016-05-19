(function () {

    var Item = function (name, resistance) {
        this.name = name;
        this.resistance = resistance;
    }

    
    var health = 100;
    document.getElementById('playersHealth').innerHTML = health
    var name = "Scottie"
    document.getElementById('playersName').innerHTML = name;
    var hit = 0;
    document.getElementById('playersHits').innerHTML = hit;
    var playerItem = null;

    var healthyImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stick_Figure.svg/2000px-Stick_Figure.svg.png"
    var injuredImage = "http://media.merchantcircle.com/40609387/CALIFORNIA%20ACCIDENT%20INJURY%20LEGAL%20CENTER%201_full.jpeg";

    var statements = ["You Suck!", "Ouch", "@$$", "Not Again", "Argg!"];
    var items = [
        new Item('shield', 1),
        new Item('helmet', 2),
        new Item('armor', 5)
    ]
    
    document.getElementById('slapButton').addEventListener("click", function () {
        inflictDamage(1);
    });
    document.getElementById('punchButton').addEventListener("click", function () {
        inflictDamage(5)
    });
    document.getElementById('kickButton').addEventListener("click", function () {
        inflictDamage(10)
    });
    document.getElementById('itemButton').addEventListener("click", function(){
        var itemIndex = Math.floor(Math.random() * statements.length);
        playerItem = items[itemIndex]
    })
    
    document.getElementById('resetButton').addEventListener("click", function () {
        health = 100;
        hit = 0;
        playerItem = null;
        updateImage();
        updatePanel()
        document.getElementById('ouch').innerHTML = "";
        document.getElementById('playersHealth').innerHTML = health;
        document.getElementById('playersHits').innerHTML = hit;
    });

    function inflictDamage(damage) {
        if(playerItem){
            damage -= playerItem.resistance;
            damage = damage < 0 ? 0 : damage;
        }
        
        health -= damage;
        hit++
        health = health < 0 ? 0 : health;
        document.getElementById('playersHealth').innerHTML = health;
        document.getElementById('playersHits').innerHTML = hit;
        updateImage();
        updatePanel()
        randomStatements();
    }

    function updateImage() {
        if (health <= 75) {
            document.getElementById('stickGuy').getAttributeNode("src").value = injuredImage;
        }
        else {
            document.getElementById('stickGuy').getAttributeNode("src").value = healthyImage;
        }
    }

    function randomStatements() {
        var cussIndex = Math.floor(Math.random() * statements.length);
        return document.getElementById('ouch').innerHTML = statements[cussIndex]
    }

    function updatePanel() {
        if (health >= 35 && health < 75) {
            document.getElementById("player-panel").classList.remove("panel-success");
            document.getElementById("player-panel").classList.add("panel-warning");
        } else if (health < 25) {
            document.getElementById("player-panel").classList.remove("panel-warning");
            document.getElementById("player-panel").classList.add("panel-danger");
        }
        else {
            document.getElementById("player-panel").classList.remove("panel-warning")
            document.getElementById("player-panel").classList.remove("panel-danger")
            document.getElementById("player-panel").classList.add("panel-success");
        }
    }

})();



// var hit = 0;

// function slap(howMuch) {
//     health -= howMuch;
//     update();
// }

// function update() {
//     hit++
//     document.getElementById('playersHealth').innerHTML = health;
//     document.getElementById('playersHits').innerHTML = hit;
//     if (health >= 50) {
//         document.getElementById("player-panel").classList.add("panel-success");
//     }
//     else if (health >= 25 && health < 50) {
//         document.getElementById("player-panel").classList.remove("panel-success");
//         document.getElementById("player-panel").classList.add("panel-warning");
//     } else if (health < 25) {
//         document.getElementById("player-panel").classList.remove("panel-warning");
//         document.getElementById("player-panel").classList.add("panel-danger");
//     }
//     else {
//         document.getElementById("player-panel").classList.remove("panel-warning")
//         document.getElementById("player-panel").classList.remove("panel-danger")
//     }
// }

// function reset() {
//     health = 100;
//     hit = 0;
//     document.getElementById("player-panel").classList.remove("panel-warning")
//     document.getElementById("player-panel").classList.remove("panel-danger")
//     update();
// }