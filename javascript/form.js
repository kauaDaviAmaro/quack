import { saveData, download, addItem, saveItens } from './storage.js';
import { renderTable } from './table.js';
import { closeForm } from './utils.js';

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
    const searchValue = searchInput.value;
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
    tableContainer.innerHTML = '<p>Nehum hospedeiro encontrado com esse termo de busca. Tente novamente!</p>';
});

const uploadBtn = document.querySelector('#upload');
uploadBtn.addEventListener('click', () => {
    const fileInput = document.querySelector('#fileInput');
    fileInput.click();
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const hosts = JSON.parse(reader.result);
            saveItens("host", hosts);
            renderTable(hosts);
        };
        reader.readAsText(file);
        fileInput.value = '';
        return;
    });
});

const downloadBtn = document.querySelector('#download');
downloadBtn.addEventListener('click', download);

const open = document.querySelector('#open');
const close = document.querySelector('#close');

open.addEventListener('click', closeForm);
close.addEventListener('click', closeForm);