export function addItem(storageKey, newItem) {
    const data = localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : {};
    const keys = Object.keys(data);
    const newId = keys.length > 0 ? Math.max(...keys) + 1 : 1;
    data[newId] = newItem;
    localStorage.setItem(storageKey, JSON.stringify(data));
}

export function removeItem(storageKey, itemId) {
    const data = localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : {};
    if (data[itemId]) {
        delete data[itemId];
        localStorage.setItem(storageKey, JSON.stringify(data));
    }
}

export function saveItens(storageKey, newItem) {
        localStorage.setItem(storageKey, JSON.stringify(newItem));
}

export function saveData(storageKey, data){
    const newHost = {};

    data.forEach((value, key) => {
        newHost[key] = value;
    });

    addItem(storageKey, newHost);
}

export function download(){
    const blob = new Blob([localStorage.getItem("host")], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dados.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
