// =========================================
// WARHAMMER 40,000 — SECOND EDITION
// Battle Assistant
// =========================================


// -----------------------------------------
// Get the main content area
// -----------------------------------------

const content = document.getElementById("content");


// -----------------------------------------
// Navigation
// -----------------------------------------

function showHome() {

    content.innerHTML = `
        <h2>Ready for battle?</h2>

        <p>
            Select an option above.
        </p>
    `;
}


function showNewBattle() {

    content.innerHTML = `
        <h2>New Battle</h2>

        <p>
            Battle setup will go here.
        </p>
    `;
}


function showMissions() {

    content.innerHTML = `
        <h2>Mission Cards</h2>

        <p>
            The mission deck will go here.
        </p>
    `;
}


function showDice() {

    content.innerHTML = `
        <h2>Dice</h2>

        <p>
            The 2nd Edition dice roller will go here.
        </p>
    `;
}


// -----------------------------------------
// Button events
// -----------------------------------------

document
    .getElementById("newBattleButton")
    .addEventListener("click", showNewBattle);


document
    .getElementById("missionsButton")
    .addEventListener("click", showMissions);


document
    .getElementById("diceButton")
    .addEventListener("click", showDice);


// -----------------------------------------
// Start on the home screen
// -----------------------------------------

showHome();