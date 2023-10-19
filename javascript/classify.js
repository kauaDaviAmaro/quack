export function classifyWeakenes(strength, speed, intelligence, host) {
    let weaknesses = [];

    if (speed < 20) {
        weaknesses.push("Lerdo");
    } else if (speed < 30) {
        weaknesses.push("Descoordenação Motora");
    }
    if (strength < 20) {
        weaknesses.push("Fraco");
    }
    if (intelligence < 20) {
        weaknesses.push("Burro");
    }else if (intelligence < 30) {
        weaknesses.push("Arrogância");
    }


    if (host.weight <= 55) {
        weaknesses.push("Magro");
    }

    if (host.height > 2) {
        weaknesses.push("Altura Extrema");
    }else if (host.height < 1.5) {
        weaknesses.push("Claustrofobia");
    }

    if(host.sport === "Nenhum") {
        weaknesses.push("sedentario");
    }

    return weaknesses.length === 0 ? ["Nenhuma"] : weaknesses;
}

export function defenceDuck(strength, speed, intelligence, host) {
    let skill = [];

    if (speed > 60) {
        skill.push("Voo");
    }


    if (strength > 60) {
        skill.push("Blindagem Natural");
    }

    if (intelligence > 60) {
        skill.push("Estratégias Avançadas");
    }

    if (host.bloodType === "A+" || host.bloodType === "b-") {
        skill.push("Imunidade Reforçada");
    }
    if (host.sport === "luta") {
        skill.push("Esquiva Aprimorada");
    }

    if (host.game === "LOL" || host.game === "Counter-Strike") {
        skill.push("Barreira Estratégica");
    }



    if (skill.length === 0) {
        skill.push("Nenhuma");
    }


    return skill.length === 0 ? ["Nenhuma"] : skill;
}

export function skillDuck(weakness) {
    let atacks = [];

    for (const item of weakness) {
        switch (item) {
            case "Lerdo":
                atacks.push("Investida Rápida");
                break;
            case "Fraco":
                atacks.push("Ataque Preciso");
                break;
            case "Burro":
                atacks.push("Confusão Tática");
                break;
            case "sedentario":
                atacks.push("Estratégia de Desgaste");
                break;
            case "Descoordenação Motora":
                atacks.push("Ataque de Distração");
                break;
            case "Arrogância":
                atacks.push("Provocação Estratégica");
                break;
            case "Magro":
                atacks.push("Ataque Ágil");
                break;
            case "Altura Extrema":
                atacks.push("Ataque Aéreo Vertical");
                break;
            case "Claustrofobia":
                atacks.push("Ataque Subterrâneo");
        }

    }

    return atacks.length === 0 ? ["Nenhuma"] : atacks;
}

export function classifyHost(host) {
    let zombieStrength = 0;
    let zombieSpeed = 0;
    let zombieIntelligence = 0;

    if (host.age >= 18 && host.age <= 25) {
        zombieStrength += 12;
        zombieSpeed += 10;
    } else if (host.age > 25 && host.age <= 50) {
        zombieStrength += 8;
        zombieSpeed += 7;
    } else if (host.age > 50) {
        zombieStrength += 5;
        zombieSpeed += 5;
    } else {
        zombieSpeed += 20;
    }

    if (host.gender === "Masculino") {
        zombieStrength += 20;
    } else if (host.gender === "Feminino") {
        zombieIntelligence += 20;
    } else {
        zombieSpeed += 20;
    }

    if (host.height <= 1.5) {
        zombieStrength += 10;
        zombieSpeed += 10;
    } else if (host.height <= 1.8) {
        zombieStrength += 8;
        zombieSpeed += 8;
    } else {
        zombieStrength += 5;
        zombieSpeed += 5;
    }

    if (host.weight >= 70 && host.weight <= 100) {
        zombieStrength += 5;
        zombieSpeed += 15;
    } else if (host.weight > 100) {
        zombieStrength += 15;
        zombieSpeed += 5;
    } else {
        zombieStrength += 5;
        zombieSpeed += 5;
    }

    switch (host.sport) {
        case "futebol":
            zombieSpeed += 10;
            zombieStrength += 15;
            break;
        case "basquete":
            zombieSpeed += 15;
            zombieStrength += 8;
            zombieIntelligence += 18;
            break;
        case "volei":
            zombieSpeed += 7;
            zombieStrength += 10;
            zombieIntelligence += 15;
            break;
        case "luta":
            zombieStrength += 30;
            zombieSpeed += 10;
            break;
        case "atletismo":
            zombieSpeed += 30;
            zombieStrength += 10;
            break;
        case "esport":
            zombieIntelligence += 30;
            break;
        case "Nenhum":
            zombieStrength += 5;
            zombieSpeed += 5;
            zombieIntelligence += 5;
            break;
    }

    switch (host.bloodType) {
        case "A+":
        case "B-":
            zombieSpeed += 5;
            zombieIntelligence += 5;
            break;
        case "B+":
        case "A-":
            zombieStrength += 6;
            zombieSpeed += 4;
            break;
        case "AB+":
        case "O-":
            zombieIntelligence += 8;
            zombieStrength += 4;
            break;
        case "O+":
        case "AB-":
            zombieStrength += 8;
            zombieSpeed += 6;
            break;
    }


    switch (host.music) {
        case "pop":
            zombieSpeed += 4;
            zombieIntelligence += 4;
            break;
        case "rock":
            zombieStrength += 6;
            zombieSpeed += 4;
            break;
        case "pagode":
            zombieSpeed += 8;
            zombieStrength += 4;
            break;
        case "sertanejo":
            zombieStrength += 5;
            zombieSpeed += 4;
            break;
        case "rap":
            zombieIntelligence += 6;
            zombieSpeed += 4;
            break;
        case "eletronica":
            zombieSpeed += 5;
            zombieIntelligence += 5;
            break;
        case "funk":
            zombieStrength += 4;
            zombieSpeed += 5;
            break;
        case "metal":
            zombieStrength += 8;
            zombieSpeed += 4;
            break;
        case "outro":
            zombieIntelligence += 8;
            break;
    }

    switch (host.game) {
        case "Counter-Strike":
        case "valorant":
            zombieSpeed += 5;
            zombieIntelligence += 4;
            break;
        case "minecraft":
        case "Fortnite":
            zombieIntelligence += 15;
            break;
        case "witcher":
        case "assassins":
            zombieIntelligence += 8;
            zombieStrength += 6;
            break;
        case "WOW":
        case "FIFA":
        case "dota":
        case "LOL":
            zombieIntelligence += 10;
            break;
        case "outro":
            zombieStrength += 5;
            zombieSpeed += 5;
            zombieIntelligence += 5;
            break;
    }

    return {
        strength: zombieStrength,
        speed: zombieSpeed,
        intelligence: zombieIntelligence,
    };
}
