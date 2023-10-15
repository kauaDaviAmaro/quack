import { saveData } from './storage.js';
import { renderTable } from './table.js';

function validate() {
    function setFieldError(input, isError) {
        if (isError) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }

    const nameInput = addNewHost.querySelector('[name="name"]');
    const ageInput = addNewHost.querySelector('[name="age"]');
    const weightInput = addNewHost.querySelector('[name="weight"]');
    const heightInput = addNewHost.querySelector('[name="height"]');
    const genderInput = addNewHost.querySelector('[name="gender"]');
    const gameInput = addNewHost.querySelector('[name="game"]');
    const sportInput = addNewHost.querySelector('[name="sport"]');
    const bloodInput = addNewHost.querySelector('[name="bloodType"]');
    const musicInput = addNewHost.querySelector('[name="music"]');

    const name = nameInput.value;
    const age = ageInput.value;
    const weight = weightInput.value;
    const height = heightInput.value;
    const gender = genderInput.value;
    const game = gameInput.value;
    const sport = sportInput.value;
    const blood = bloodInput.value;
    const music = musicInput.value;

    const submitButton = addNewHost.querySelector('[type="submit"]');

    let isValid = true;

    setFieldError(genderInput, gender === "");
    isValid = isValid && gender !== "";

    setFieldError(gameInput, game === "");
    isValid = isValid && game !== "";

    setFieldError(sportInput, sport === "");
    isValid = isValid && sport !== "";

    setFieldError(nameInput, name.trim().length === 0);
    isValid = isValid && name.trim() !== '';

    setFieldError(bloodInput, blood === "");
    isValid = isValid && blood !== "";

    setFieldError(musicInput, music === "");
    isValid = isValid && music !== "";

    const ageNumeric = parseInt(age, 10);
    setFieldError(ageInput, isNaN(ageNumeric) || ageNumeric <= 0);
    isValid = isValid && !isNaN(ageNumeric) && ageNumeric > 0;

    const weightNumeric = parseFloat(weight);
    setFieldError(weightInput, isNaN(weightNumeric) || weightNumeric <= 0);
    isValid = isValid && !isNaN(weightNumeric) && weightNumeric > 0;

    const heightNumeric = parseFloat(height);
    setFieldError(heightInput, isNaN(heightNumeric) || heightNumeric <= 0);
    isValid = isValid && !isNaN(heightNumeric) && heightNumeric > 0;

    submitButton.disabled = !isValid;
}


const addNewHost = document.getElementById('addNewHost');
const tableContainer = document.getElementById('table-container');
const searchInput = document.getElementById('search');

addNewHost.addEventListener('input', validate);

addNewHost.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(addNewHost);

    saveData("host", data);

    renderTable(JSON.parse(localStorage.getItem("host")));
    addNewHost.reset();
});


searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    const hosts = JSON.parse(localStorage.getItem("host"));
    const filteredHosts = Object.keys(hosts).reduce((acc, key) => {
        const host = hosts[key];
        if (host.name.includes(searchValue) || host.game.includes(searchValue) || host.age.includes(searchValue) || host.sport.includes(searchValue)) {
            acc.push(host);
        }
        return acc;
    }, []);
    if (filteredHosts.length > 0) {
        renderTable(filteredHosts);
        return;
    }
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = 'Nehum hospediro encontrado com esse termo de busca. Tente novamente!';
});