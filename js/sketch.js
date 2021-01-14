
function preload() {

    steamStats = loadJSON('js/steam-stats.json');
}

function setup() {

    createCanvas(800, 600);

    textAlign(CENTER, CENTER)
    textSize(12);

}
  
function draw() {

    background(240);

    let barHeight = 0;

    // bar 1
    barHeight = map(steamStats.data[0].currentPlayers, 0, 600000, 0, 600);
    fill('red');
    rect(60, 600, 50, -barHeight);
    if (mouseIsPressed) {
        fill('black');
        text(steamStats.data[0].currentPlayers, 60, 575, 50, 25);
    }

    // bar 2
    barHeight = map(steamStats.data[1].currentPlayers, 0, 600000, 0, 600);
    fill('red');
    rect(120, 600, 50, -barHeight);
    if (mouseIsPressed) {
        fill('black');
        text(steamStats.data[1].currentPlayers, 120, 575, 50, 25);
    }

    // bar 3
    barHeight = map(steamStats.data[2].currentPlayers, 0, 600000, 0, 600);
    fill('red');
    rect(180, 600, 50, -barHeight);
    if (mouseIsPressed) {
        fill('black');
        text(steamStats.data[2].currentPlayers, 180, 575, 50, 25);
    }

    // bar 4
    barHeight = map(steamStats.data[3].currentPlayers, 0, 600000, 0, 600);
    fill('red');
    rect(240, 600, 50, -barHeight);
    if (mouseIsPressed) {
        fill('black');
        text(steamStats.data[3].currentPlayers, 240, 575, 50, 25);
    }

    // bar 5
    barHeight = map(steamStats.data[4].currentPlayers, 0, 600000, 0, 600);
    fill('red');
    rect(300, 600, 50, -barHeight);
    if (mouseIsPressed) {
        fill('black');
        text(steamStats.data[4].currentPlayers, 300, 575, 50, 25);
    }

    // bar 6
    barHeight = map(steamStats.data[5].currentPlayers, 0, 600000, 0, 600);
    fill('red');
    rect(360, 600, 50, -barHeight);
    if (mouseIsPressed) {
        fill('black');
        text(steamStats.data[5].currentPlayers, 360, 575, 50, 25);
    }

    // bar 7
    barHeight = map(steamStats.data[6].currentPlayers, 0, 600000, 0, 600);
    fill('red');
    rect(420, 600, 50, -barHeight);
    if (mouseIsPressed) {
        fill('black');
        text(steamStats.data[6].currentPlayers, 420, 575, 50, 25);
    }

    // bar 8
    barHeight = map(steamStats.data[7].currentPlayers, 0, 600000, 0, 600);
    fill('red');
    rect(480, 600, 50, -barHeight);
    if (mouseIsPressed) {
        fill('black');
        text(steamStats.data[7].currentPlayers, 480, 575, 50, 25);
    }

    // bar 9
    barHeight = map(steamStats.data[8].currentPlayers, 0, 600000, 0, 600);
    fill('red');
    rect(540, 600, 50, -barHeight);
    if (mouseIsPressed) {
        fill('black');
        text(steamStats.data[8].currentPlayers, 540, 575, 50, 25);
    }

    // bar 10
    barHeight = map(steamStats.data[9].currentPlayers, 0, 600000, 0, 600);
    fill('red');
    rect(600, 600, 50, -barHeight);
    if (mouseIsPressed) {
        fill('black');
        text(steamStats.data[9].currentPlayers, 600, 575, 50, 25);
    }
}

  