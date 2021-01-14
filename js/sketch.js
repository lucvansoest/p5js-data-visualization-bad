
function preload() {

    steamStats = loadJSON('js/steam-stats.json');
}

function setup() {

    createCanvas(800, 600);

    textAlign(CENTER, CENTER)
    textSize(16);

}
  
function draw() {

    background(240);

    fill('black');

    if (steamStats) {

        let barHeight = 0;

        // bar 1
        barHeight = map(steamStats.data[0].currentPlayers, 0, 600000, 0, 600);
        fill('red');
        rect(60, 600, 50, -barHeight);
        if (mouseIsPressed) {
            fill('black');
            text(steamStats.data[0].game + ' (' + steamStats.data[0].currentPlayers + ')', 0, 50, 600, 50);
        }

        // bar 2
        barHeight = map(steamStats.data[1].currentPlayers, 0, 600000, 0, 600);
        fill('red');
        rect(120, 600, 50, -barHeight);
        if (mouseIsPressed) {
            fill('black');
            text(steamStats.data[1].game + ' (' + steamStats.data[1].currentPlayers + ')', 0, 50, 600, 50);
        }

        // bar 3
        barHeight = map(steamStats.data[2].currentPlayers, 0, 600000, 0, 600);
        fill('red');
        rect(180, 600, 50, -barHeight);
        if (mouseIsPressed) {
            fill('black');
            text(steamStats.data[2].game + ' (' + steamStats.data[2].currentPlayers + ')', 0, 50, 600, 50);
        }

        // bar 4
        barHeight = map(steamStats.data[3].currentPlayers, 0, 600000, 0, 600);
        fill('red');
        rect(240, 600, 50, -barHeight);
        if (mouseIsPressed) {
            fill('black');
            text(steamStats.data[3].game + ' (' + steamStats.data[3].currentPlayers + ')', 0, 50, 600, 50);
        }

        // bar 5
        barHeight = map(steamStats.data[4].currentPlayers, 0, 600000, 0, 600);
        fill('red');
        rect(300, 600, 50, -barHeight);
        if (mouseIsPressed) {
            fill('black');
            text(steamStats.data[4].game + ' (' + steamStats.data[4].currentPlayers + ')', 0, 50, 600, 50);
        }

        // bar 6
        barHeight = map(steamStats.data[5].currentPlayers, 0, 600000, 0, 600);
        fill('red');
        rect(360, 600, 50, -barHeight);
        if (mouseIsPressed) {
            fill('black');
            text(steamStats.data[5].game + ' (' + steamStats.data[5].currentPlayers + ')', 0, 50, 600, 50);
        }

        // bar 7
        barHeight = map(steamStats.data[6].currentPlayers, 0, 600000, 0, 600);
        fill('red');
        rect(420, 600, 50, -barHeight);
        if (mouseIsPressed) {
            fill('black');
            text(steamStats.data[6].game + ' (' + steamStats.data[6].currentPlayers + ')', 0, 50, 600, 50);
        }

        // bar 8
        barHeight = map(steamStats.data[7].currentPlayers, 0, 600000, 0, 600);
        fill('red');
        rect(480, 600, 50, -barHeight);
        if (mouseIsPressed) {
            fill('black');
            text(steamStats.data[7].game + ' (' + steamStats.data[7].currentPlayers + ')', 0, 50, 600, 50);
        }

        // bar 9
        barHeight = map(steamStats.data[8].currentPlayers, 0, 600000, 0, 600);
        fill('red');
        rect(540, 600, 50, -barHeight);
        if (mouseIsPressed) {
            fill('black');
            text(steamStats.data[8].game + ' (' + steamStats.data[8].currentPlayers + ')', 0, 50, 600, 50);
        }

        // bar 10
        barHeight = map(steamStats.data[9].currentPlayers, 0, 600000, 0, 600);
        fill('red');
        rect(600, 600, 50, -barHeight);
        if (mouseIsPressed) {
            fill('black');
            text(steamStats.data[9].game + ' (' + steamStats.data[9].currentPlayers + ')', 0, 50, 600, 50);
        }
    }

}

  