import { removeItem } from "./storage.js";
import { showDetails } from "./details.js";
import { setPage } from "./utils.js";

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

    const namesHeader = ['Nome', 'Altura', 'Idade', 'Peso', 'Sexo', 'Tipo Sanguineo', 'Música Preferida', 'Esporte praticado', 'Jogo favorito'];
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
        removeButton.addEventListener('click', (event) => {
            event.stopPropagation();
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