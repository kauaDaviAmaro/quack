import { removeItem } from "./storage.js";
import { classifyHost } from "./classify.js";

function showDetails(item) {
    document.querySelector('.about').style.display = 'none';
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.detail').style.display = 'block';

    let { strength, speed, intelligence } = classifyHost(item);
    let dangerousness = (strength * 0.4) + (speed * 0.3) + (intelligence * 0.3);
    dangerousness = Math.round(dangerousness * 100) / 100;
    dangerousness = dangerousness.toFixed(2);

    const details = document.getElementById('detailContainer');
    details.innerHTML = `
        <h2>${item.name}</h2>
        <p>Idade: ${item.age}</p>
        <p>Peso: ${item.weight}</p>
        <p>Altura: ${item.height}</p>
        <p>Gênero: ${item.gender}</p>
        <p>Tipo Sanguíneo: ${item.bloodType}</p>
        <p>Música: ${item.music}</p>
        <p>Esporte: ${item.sport}</p>
        <p>Jogo: ${item.game}</p>
        <p>Força: ${strength}</p>
        <p>Velocidade: ${speed}</p>
        <p>Inteligência: ${intelligence}</p>
        <p>Periculosidade: ${dangerousness}</p>
    `;

}

export function renderTable(data) {
    download.style.display = "block";

    let keys = Object.keys(data)
    if (keys.length == 0) {
        download.style.display = "none";
        tableContainer.innerHTML = '<p>Nenhum registro encontrado.</p>';
        return;
    } 
           
    tableContainer.innerHTML = '';
    
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const namesHeader = ['Nome', 'Idade', 'Peso', 'Altura', 'Sexo', 'Tipo Sanguineo', 'Música Preferida', 'Esporte praticado', 'Jogo favorito'];
    namesHeader.forEach(name => {
        const th = document.createElement('th');
        th.textContent = name;
        headerRow.appendChild(th);
    });

    const actionHeader = document.createElement('th');
    actionHeader.textContent = 'Ações';
    headerRow.appendChild(actionHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    Object.keys(data).forEach(itemId => {
        const item = data[itemId];
        const row = document.createElement('tr');

        Object.values(item).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        const removeButtonCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.innerHTML = "<i class='bx bxs-trash'></i>";
        removeButton.addEventListener('click', () => {
            removeItem("host", itemId);
            renderTable(JSON.parse(localStorage.getItem("host")));
        });
        removeButtonCell.appendChild(removeButton);
        row.appendChild(removeButtonCell);

        row.addEventListener('click', () => showDetails(item));

        tbody.appendChild(row);
    });

    table.appendChild(tbody);

    tableContainer.appendChild(table);
}