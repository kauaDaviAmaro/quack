import { renderTable } from './table.js';
import { setPage } from './utils.js';
import './form.js';

const homeBtn = document.querySelector('#home');
const aboutBtn = document.querySelector('#about');
const back = document.querySelector('#voltar');

homeBtn.addEventListener('click', () => setPage('home'));
aboutBtn.addEventListener('click', () => setPage('about'));
back.addEventListener('click', () => setPage('home'));


const backDetail = document.querySelector('#voltarDetail');

backDetail.addEventListener('click', () => setPage('detail'));

document.addEventListener('DOMContentLoaded', () => {
    new Darkmode({label: '🌓'}).showWidget();
    renderTable(JSON.parse(localStorage.getItem("host")));
});

