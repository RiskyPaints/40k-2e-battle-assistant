// =========================================
// WARHAMMER 40,000 — SECOND EDITION
// Mission Card Data
// =========================================

const missions = [

    // -----------------------------------------
    // THE ASSASSINS
    // -----------------------------------------

    {
        id: "the-assassins",
        name: "The Assassins",

        description:
            "You've uncovered information which indicates that an infamous enemy leader is in command of a force entering no-man's land. You've been despatched with a force of your own to eliminate him.",

        primaryObjective: {
            title: "Kill the enemy commander.",

            details:
                "If you can't kill him, wound him instead.",

            victoryPoints: [
                {
                    condition: "Enemy commander wounded",
                    points: 1
                },
                {
                    condition: "Enemy commander killed",
                    points: 5
                }
            ]
        },

        secondaryObjective: {
            title: "Destroy enemy forces wherever possible, minimise own losses.",

            victoryPoints: []
        }
    },


    // -----------------------------------------
    // ENGAGE AND DESTROY
    // -----------------------------------------

    {
        id: "engage-and-destroy",
        name: "Engage and Destroy",

        description:
            "Enemy forces have been spotted advancing into no-man's land. Your command has been detailed to move against the forward elements, engaging and destroying them before they reach friendly territory.",

        primaryObjective: {
            title:
                "Destroy enemy forces wherever possible, minimise own losses.",

            details:
                "In addition to the normal victory points gained for destroying enemy forces, you receive the following bonus victory points.",

            victoryPoints: [
                {
                    condition: "Each enemy squad destroyed",
                    points: 1
                },
                {
                    condition: "Each enemy vehicle destroyed",
                    points: 1
                },
                {
                    condition: "Each enemy character killed",
                    points: 1
                }
            ]
        },

        secondaryObjective: {
            title: "None",

            victoryPoints: []
        }
    },


    // -----------------------------------------
    // DAWN RAID
    // -----------------------------------------

    {
        id: "dawn-raid",
        name: "Dawn Raid",

        description:
            "You've been creeping through no-man's land all night. Your orders are to sneak through the enemy's front lines and cause as much damage to supply dumps and communications as possible. Now you can see an enemy force right ahead of you and it's starting to get light. Your only choice is to break through and keep going.",

        primaryObjective: {
            title:
                "Get some of your forces into your opponent's deployment zone by the end of the game.",

            details:
                "In addition to the normal victory points gained for destroying enemy forces, you receive the following bonus victory points.",

            victoryPoints: [
                {
                    condition:
                        "Having a squad with less than 50% casualties in the opponent's deployment zone at the end of the game",
                    points: 5
                },
                {
                    condition:
                        "Having an undamaged vehicle in the opponent's deployment zone at the end of the game",
                    points: 5
                }
            ]
        },

        secondaryObjective: {
            title: "Destroy enemy forces wherever possible, minimise own losses.",

            victoryPoints: []
        }
    },


    // -----------------------------------------
    // TAKE AND HOLD
    // -----------------------------------------

    {
        id: "take-and-hold",
        name: "Take and Hold",

        description:
            "It's strategically vital that you take and hold an objective situated far out in no-man's land. Whatever it is, you've got to clear the enemy away from it and hold onto it until further notice.",

        primaryObjective: {
            title:
                "Control the objective at the end of the game.",

            details:
                "The objective is a point 24\" onto the table and 36\" from the left hand edge. To take control, move some of your models within 3\" and make sure no enemy models are closer to it than you are.",

            victoryPoints: [
                {
                    condition: "Controlling the objective at the end of the game",
                    points: 5
                }
            ]
        },

        secondaryObjective: {
            title: "Destroy enemy forces wherever possible, minimise own losses.",

            victoryPoints: []
        }
    },


    // -----------------------------------------
    // WITCH HUNT
    // -----------------------------------------

    {
        id: "witch-hunt",
        name: "Witch Hunt",

        description:
            "A powerful enemy psyker has been wreaking havoc in this sector. He is thought to be accompanying an enemy force which has recently entered no-man's land. It is imperative to seek out and destroy this psyker before he can do any more harm.",

        primaryObjective: {
            title:
                "Kill the enemy psyker with the highest mastery level.",

            details:
                "If you can't kill him, wound him instead.",

            victoryPoints: [
                {
                    condition: "Most powerful enemy psyker wounded",
                    points: 1
                },
                {
                    condition: "Most powerful enemy psyker killed",
                    points: 5
                }
            ]
        },

        secondaryObjective: {
            title:
                "If there are no enemy psykers present, concentrate on wiping out the enemy command structure instead.",

            details:
                "In this case you receive bonus victory points for killing enemy characters worth 50 points or more.",

            victoryPoints: [
                {
                    condition: "Each enemy character worth 50 pts or more killed",
                    points: 1
                }
            ]
        }
    },


    // -----------------------------------------
    // GUERRILLA WAR
    // -----------------------------------------

    {
        id: "guerrilla-war",
        name: "Guerrilla War",

        description:
            "Your force has been living out in no-man's land and fighting a guerrilla war against the foe. Now you are cut off and running low on food and ammunition. You have sought out and engaged an enemy force so that you can loot rations and ammo pouches from the fallen.",

        primaryObjective: {
            title:
                "Keep every enemy model that you kill in hand-to-hand combat until the end of the battle.",

            details:
                "You receive the following bonus victory points in addition to the normal victory points gained for destroying enemy forces.",

            victoryPoints: [
                {
                    condition: "Every 3 enemy models killed in hand-to-hand combat",
                    points: 1
                }
            ]
        },

        secondaryObjective: {
            title:
                "Destroy enemy vehicles for equipment and spares.",

            details:
                "Bonus victory points are received for destroying or disabling enemy vehicles within 24\" of your own table edge.",

            victoryPoints: [
                {
                    condition:
                        "Every enemy vehicle destroyed or disabled within 24\" of your own table edge",
                    points: 1
                }
            ]
        }
    }

];