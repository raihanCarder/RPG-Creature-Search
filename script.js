const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const creatureNameText = document.getElementById("creature-name");
const creatureIdText = document.getElementById("creature-id");
const weightText = document.getElementById("weight");
const heightText = document.getElementById("height");
const typesDiv = document.getElementById("types");
const attackNameText = document.getElementById("attack-name");
const attackDescriptionText = document.getElementById("attack-description");
const hpStatText = document.getElementById("hp");
const attackStatText = document.getElementById("attack");
const defenseStatText = document.getElementById("defense");
const spAttackStatText = document.getElementById("special-attack");
const spDefenseStatText = document.getElementById("special-defense");
const speedStatText = document.getElementById("speed");

const fetchCreatureInfo = async () => {
    try {
        const input = searchInput.value.toLowerCase();
        console.log(input);
        const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${input}`);
        const data = await res.json();
        console.log("INFO FOUND");
        console.log(data);

        creatureNameText.innerHTML = `<strong>${data.name}</strong>`;
        creatureIdText.textContent = `#${data.id}`;
        weightText.textContent = `Weight: ${data.weight}`;
        heightText.textContent = `Height: ${data.height}`;


        for (let type of data["types"]) {
            typesDiv.innerHTML += `<p class="${type.name}">${type.name}</p>`;
        }

        attackNameText.textContent = `${data.special.name}`;
        attackDescriptionText.textContent = `${data.special.description}`;

        hpStatText.textContent = data.stats[0]["base_stat"];
        attackStatText.textContent = data.stats[1]["base_stat"];
        defenseStatText.textContent = data.stats[2]["base_stat"];
        spAttackStatText.textContent = data.stats[3]["base_stat"];
        spDefenseStatText.textContent = data.stats[4]["base_stat"];
        speedStatText.textContent = data.stats[5]["base_stat"];
        searchInput.value = "";

    }
    catch (err) {
        alert("Creature not found.");
        console.log(err);
        resetInformation();
    }
}

searchBtn.addEventListener("click", () => {
    typesDiv.innerHTML = "";
    fetchCreatureInfo();
    return;
});

function resetInformation() {

    creatureNameText.innerHTML = "";
    creatureIdText.textContent = "";
    weightText.textContent = "";
    heightText.textContent = "";
    typesDiv.innerHTML = "";

    attackNameText.textContent = "";
    attackDescriptionText.textContent = "";

    hpStatText.textContent = "";
    attackStatText.textContent = "";
    defenseStatText.textContent = "";
    spAttackStatText.textContent = "";
    spDefenseStatText.textContent = "";
    speedStatText.textContent = "";
    searchInput.value = "";
    return;
}