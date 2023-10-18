export function classifyWeakenes(strength, speed, intelligence, host) {
    let weakness = [];

    if(speed < 20){
        weakness.push("Lerdo");
    }
    if(strength < 20){
        weakness.push("Fraco");
    }
    if(intelligence < 20){
        weakness.push("Burro");
    }

    switch (host.sport) {
        // case "futebol":
        //     zombieSpeed += 10;
        //     zombieStrength += 15;
        //     break;
        // case "basquete":
        //     zombieSpeed += 15;
        //     zombieStrength += 8;
        //     zombieIntelligence += 8;
        //     break;
        // case "volei":
        //     zombieSpeed += 7;
        //     zombieStrength += 10;
        //     zombieIntelligence += 8;
        //     break;
        // case "luta":
        //     zombieStrength += 30;
        //     zombieSpeed += 10;
        //     break;
        // case "atletismo":
        //     zombieSpeed += 30;
        //     zombieStrength += 10;
        //     break;
        // case "esport":
        //     zombieIntelligence += 30;
        //     break;
        case "Nenhum":
            weakness.push("sedentario");
            break;
    }

    if(weakness.length === 0){
        weakness.push("Nenhuma");
    }
    return weakness;
}

export function defenceDuck(dangerousness, strength, speed, intelligence){
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
        
    

    if (skill.length === 0) {
        skill.push("Nenhuma");
    } 
        
    
    return skill;
}

export function skillDuck(weakness) {
    let atacks = [];
    
    for (const item of weakness) {
        if (item === "Lerdo") {
            atacks.push("Investida Rápida");
        } else if (item === "Fraco") {
            atacks.push("Ataque Preciso");
        } else if (item === "Burro") {
            atacks.push("Confusão Tática");
        }
    }

    return atacks;
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
    }else {
        zombieSpeed += 20;
    }

    if (host.gender === "Masculino") {
        zombieStrength += 5;
    }else if (host.gender === "Feminino") {
        zombieIntelligence += 5;
    }else {
        zombieSpeed += 5;
    }

    if (host.height <= 1.5){
        zombieStrength += 10;
        zombieSpeed += 10;
    }else if (host.height <= 1.8) {
        zombieStrength += 8;
        zombieSpeed += 8;
    }else {
        zombieStrength += 5;
        zombieSpeed += 5;
    }

    if (host.weight >= 70 && host.weight <= 100) {
        zombieStrength += 5;
        zombieSpeed += 15;
    }else if (host.weight > 100) {
        zombieStrength += 15;
        zombieSpeed += 5;
    }else {
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
            zombieIntelligence += 8;
            break;
        case "volei":
            zombieSpeed += 7;
            zombieStrength += 10;
            zombieIntelligence += 8;
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
