import { classifyHost } from "./classify.js";
import {  setPage } from "./utils.js";

function setAtributes(item) {
    document.getElementById('name').innerHTML = item.name;
    document.getElementById('age').innerHTML = item.age;
    document.getElementById('weight').innerHTML = item.weight;
    document.getElementById('height').innerHTML = item.height;
    document.getElementById('gender').innerHTML = item.gender;
    document.getElementById('bloodType').innerHTML = item.bloodType;
    document.getElementById('bloodType').innerHTML = item.bloodType;
    document.getElementById('music').innerHTML = item.music;
    document.getElementById('sport').innerHTML = item.sport;
    document.getElementById('game').innerHTML = item.game;
}

function setBars(dangerousness, strength, speed, intelligence) {
    document.getElementById('nivelDanger').innerHTML = dangerousness;
    document.getElementById('barDanger').style.width = dangerousness + "%";
    document.getElementById('nivelStrength').innerHTML = strength;
    document.getElementById('barStrenght').style.width = strength + "%";
    document.getElementById('nivelSpeed').innerHTML = speed;
    document.getElementById('barSpeed').style.width = speed + "%";
    document.getElementById('nivelIntel').innerHTML = intelligence;
    document.getElementById('barIntel').style.width = intelligence + "%";
}

export function showDetails(item) {
    const quackButton = document.querySelector('#quackButton');
    setPage('detail');

    let { strength, speed, intelligence } = classifyHost(item);
    let dangerousness = (strength * 0.4) + (speed * 0.3) + (intelligence * 0.3);
    dangerousness = Math.round(dangerousness * 100) / 100;
    dangerousness = dangerousness.toFixed(2);

    setBars(dangerousness, strength, speed, intelligence);
    setAtributes(item);
    quackButton.addEventListener('click', () => {
        setPage('quack');
        console.log(item);
    });
}