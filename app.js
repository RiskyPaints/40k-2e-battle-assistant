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

function drawRandomMission() {

    const randomIndex =
        Math.floor(Math.random() * missions.length);

    return missions[randomIndex];
}

function showMissions() {

    const mission = drawRandomMission();

    content.innerHTML = `

        <div class="mission-header">

            <h2>Mission Deck</h2>

            <button id="drawMissionButton">
                Draw Random Mission
            </button>

        </div>


        <div class="mission-card">

            <h3>${mission.name}</h3>

            <p class="mission-description">
                ${mission.description}
            </p>


            <div class="objective">

                <h4>Primary Objective</h4>

                <h5>${mission.primaryObjective.title}</h5>

                <p>
                    ${mission.primaryObjective.details}
                </p>

                <div class="vp-list">

                    ${mission.primaryObjective.victoryPoints.map(vp => `
                        <div class="vp-row">

                            <span>${vp.condition}</span>

                            <strong>+${vp.points} VP</strong>

                        </div>
                    `).join("")}

                </div>

            </div>


            <div class="objective">

                <h4>Secondary Objective</h4>

                <h5>${mission.secondaryObjective.title}</h5>

                <p>
                    ${mission.secondaryObjective.details || ""}
                </p>

                <div class="vp-list">

                    ${mission.secondaryObjective.victoryPoints.map(vp => `
                        <div class="vp-row">

                            <span>${vp.condition}</span>

                            <strong>+${vp.points} VP</strong>

                        </div>
                    `).join("")}

                </div>

            </div>

        </div>
    `;

      // Connect the newly-created button to the random mission function

    document
        .getElementById("drawMissionButton")
        .addEventListener("click", showMissions);
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