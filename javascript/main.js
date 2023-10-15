import { renderTable } from './table.js';
import { download } from './storage.js';
import './form.js';

const downloadBtn = document.querySelector('#download');
downloadBtn.addEventListener('click', download);

const homeBtn = document.querySelector('#home');
const aboutBtn = document.querySelector('#about');
const back = document.querySelector('#voltar');

homeBtn.addEventListener('click', () => {
    document.querySelector('.home').style.display = 'block';
    document.querySelector('.detail').style.display = 'none';
    document.querySelector('.about').style.display = 'none';
});

aboutBtn.addEventListener('click', () => {
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.detail').style.display = 'none';
    document.querySelector('.about').style.display = 'block';
});

back.addEventListener('click', () => {
    document.querySelector('.home').style.display = 'block';
    document.querySelector('.detail').style.display = 'none';
    document.querySelector('.about').style.display = 'none';
});

const open = document.getElementById("open");
        const close = document.getElementById("close");
        const form = document.getElementById("addNewHost");

        open.onclick = () => {
            form.style.display = "block";
            open.style.display = "none";
        };

        close.onclick = () => {
            form.style.display = "none";
            open.style.display = "block";
        };

document.addEventListener('DOMContentLoaded', () => renderTable(JSON.parse(localStorage.getItem("host"))));