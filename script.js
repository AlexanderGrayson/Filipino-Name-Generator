const maleFirstNames = [
"Jose", "Juan", "Andres", "Ramon", "Carlos", "Antonio", "Pedro", "Emilio", "Fernando", "Roberto",
"Alfonso", "Eduardo", "Gregorio", "Leonardo", "Manuel", "Vicente", "Oscar", "Mario", "Luis", "Renato",
"Francisco", "Alfredo", "Ernesto", "Cesar", "Miguel", "Ricardo", "Jorge", "Sergio", "Felipe", "Salvador",
"Victor", "Rafael", "Hector", "Bernardo", "Domingo", "Nestor", "Arturo", "Ruben", "Marvin", "Edgar",
"Javier", "Elmer", "Rodolfo", "Wilfredo", "Benjamin", "Claudio", "Dante", "Glenn", "Joaquin", "Leandro",
"Rico", "Mark", "Alvin", "Dennis", "Joel", "Gilbert", "Edwin", "Noel", "Erwin", "Rolando",
"Ricky", "Arnold", "Daniel", "Christian", "Bryan", "Kevin", "Jerome", "Paul", "Jeffrey", "Raymond",
"Frederick", "Samuel", "Marlon", "Rommel", "Nelson", "Eugene", "Lawrence", "Erik", "Lorenzo", "Nicolas",
"Damian", "Maximo", "Isidro", "Orlando", "Pablo", "Gerardo", "Jared", "Calvin", "Dominic", "Marcus",
"Tomas", "Ferdinand", "Edmundo", "Jayson", "Percival", "Armando", "Tobias", "Elijah", "Tyrone", "Gerald",
"Clifford", "Rex", "Fidel", "Ramiro", "Clemente", "Emmanuel", "Hugo", "Israel", "Jeremiah", "Kendrick",
"Luciano", "Matias", "Nicanor", "Octavio", "Pascual", "Quintin", "Rogelio", "Santiago", "Teodoro", "Urbano",
"Valentino", "Wilbert", "Xavier", "Yves", "Zandro", "Benedicto", "Crisanto", "Dario", "Edgardo", "Fausto",
"Gaspar", "Herminio", "Ildefonso", "Jovito", "Karlo", "Lazaro", "Melchor", "Nemesio", "Olegario", "Perfecto",
"Quirino", "Santino", "Teofilo", "Ulysses", "Virgilio", "Wenceslao", "Xerxes", "Ysidro", "Zenon", "Arnel",
"Bong", "Cesar", "Delfin", "Efrain", "Floro", "Genaro", "Hermes", "Isaias", "Jesus", "Kris",
"Leopoldo", "Mauro", "Nilo", "Onofre", "Primo", "Tristan", "Ulises", "Victorino", "Wilfred", "Xander",
"Yong", "Zacarias", "Adrian", "Alvin", "Amado", "Aristotle", "Bartolome", "Basilio", "Carmelo", "Celso",
"Dino", "Eldon", "Eliseo", "Eulogio", "Felix", "Gaudencio", "Gervacio", "Honesto", "Ignacio", "Ismael",
"Jairus", "Jovencio", "Kristoffer", "Lino", "Marcelino", "Norberto", "Osvaldo", "Pascual", "Quintino",
"Rodolfo", "Rosendo", "Severino", "Teodoro", "Valerio", "Wilfredo", "Xeno", "Yannick", "Zosimo", "Aldrin",
"Bernardo", "Carmelo", "Dante", "Elpidio", "Florencio", "Gregorio", "Hernando", "Isidro", "Jesús", "Lamberto",
"Mauro", "Narciso", "Orlando", "Pedro", "Rafael", "Santiago", "Tomas", "Vicente", "Walter", "Xerxes",
"Yves", "Zandro", "Agapito", "Benigno", "Crispin", "Domingo", "Esteban", "Filipino", "Gumersindo", "Hilario",
"Iñigo", "Joaquín", "Lázaro", "Mariano", "Nicanor", "Pacífico", "Quintín", "Rómulo", "Sergio", "Tiburcio",
"Urbano", "Valentín", "Wilfred", "Xavier", "Ygnacio", "Zósimo"
];
  
const femaleFirstNames = [
"Maria", "Josefina", "Luz", "Carmen", "Rosario", "Elena", "Teresa", "Isabel", "Gloria", "Ligaya",
"Angela", "Patricia", "Veronica", "Luisa", "Diana", "Beatriz", "Cristina", "Victoria", "Amelia", "Sofia",
"Ana", "Margarita", "Concepcion", "Emilia", "Felisa", "Gabriela", "Helena", "Imelda", "Janice", "Katrina",
"Leila", "Magdalena", "Nina", "Olga", "Pilar", "Queenie", "Rita", "Samantha", "Trinidad", "Ursula",
"Violeta", "Wilma", "Xenia", "Yolanda", "Zenaida", "Alma", "Bernadette", "Cecilia", "Dolores", "Estrella",
"Flor", "Gracia", "Honoria", "Irene", "Joy", "Karina", "Lourdes", "Mona", "Nerissa", "Odessa",
"Priscilla", "Querida", "Roxanne", "Sandy", "Teresita", "Ulyssa", "Valeria", "Wendy", "Ximena", "Ysabel",
"Zara", "Amihan", "Bayani", "Clarissa", "Divina", "Evelyn", "Florencia", "Giselle", "Hanna", "Isidora",
"Jovita", "Kiana", "Luningning", "Melinda", "Natividad", "Oriana", "Patrice", "Quintina", "Rhea", "Salve",
"Teresita", "Una", "Vera", "Willa", "Xylia", "Yvette", "Zeny", "Anita", "Betty", "Cynthia",
"Delia", "Erika", "Flora", "Gilda", "Hazel", "Ivy", "Janet", "Karla", "Lorna", "Michele",
"Nikki", "Ona", "Pearl", "Quiana", "Regina", "Sonia", "Tina", "Ula", "Vicky", "Winona",
"Xandra", "Yasmin", "Zelda", "Adela", "Bea", "Carina", "Daisy", "Eileen", "Faith", "Gina",
"Honey", "Isabelita", "Jessa", "Kaye", "Lila", "Mabel", "Nina", "Ophelia", "Paula", "Queen",
"Rosa", "Selena", "Tala", "Ulani", "Vanessa", "Winnie", "Xenia", "Yani", "Zoraida", "Agnes",
"Bella", "Clarice", "Denise", "Estelle", "Flavia", "Gwen", "Harriet", "Isla", "Jocelyn", "Kylie",
"Leah", "Mia", "Nina", "Oriana", "Paola", "Quiana", "Rina", "Sara", "Tina", "Usha",
"Adriana", "Bianca", "Carla", "Diana", "Elaine", "Frances", "Graciela", "Helena", "Isabel", "Jillian",
"Kristine", "Larissa", "Marilyn", "Nadia", "Olivia", "Pilar", "Quintina", "Rochelle", "Sabrina", "Tatiana",
"Una", "Valerie", "Wilhelmina", "Ximena", "Yasmin", "Zena", "Adelina", "Beatriz", "Celina", "Dulce",
"Esmeralda", "Felicia", "Georgina", "Hilda", "Ivy", "Jazmin", "Karla", "Luzviminda", "Maricel", "Nerissa",
"Odelia", "Paulina", "Querida", "Rhea", "Simone", "Teresa", "Ursula", "Veronique", "Winifred", "Xandra",
"Yvette", "Zora", "Annette", "Belen", "Charity", "Darlene", "Elisa", "Francisca", "Gracia", "Hanna",
"Isadora", "Josette", "Karina", "Lara", "Melody", "Nila", "Oriana", "Petra", "Queena", "Roselle",
"Sandy", "Tina", "Uma", "Victoria", "Wendy", "Xenia", "Yana", "Zita"
];
  
const lastNames = [
"Santos", "Reyes", "Cruz", "Garcia", "Mendoza", "Dela Cruz", "Fernandez", "Lopez", "Gonzalez", "Ramos",
"Torres", "Diaz", "Morales", "Castillo", "Sanchez", "Alvarez", "Jimenez", "Silva", "Navarro", "Romero",
"Vargas", "Ortiz", "Delgado", "Gomez", "Pineda", "Castro", "Flores", "Gutierrez", "Medina", "Rojas",
"Marquez", "Sosa", "Dominguez", "Valdez", "Aguilar", "Bravo", "Mora", "Santos", "Padilla", "Valencia",
"Benitez", "Cabrera", "Delos Santos", "Espejo", "Ferrer", "Garcia", "Hernandez", "Luna", "Maliksi", "Nunez",
"Ocampo", "Palacio", "Quintos", "Rosales", "Salazar", "Talavera", "Urbina", "Velasco", "Zamora", "Aguirre",
"Barrientos", "Carillo", "Duran", "Enriquez", "Flores", "Galvez", "Herrera", "Ignacio", "Javier", "Ledesma",
"Manalo", "Navales", "Ortega", "Paredes", "Quintana", "Rivera", "Salvador", "Tañada", "Uy", "Vergara",
"Zamudio", "Abad", "Balagtas", "Cayetano", "De Guzman", "Eusebio", "Fernandez", "Garcia", "Hidalgo", "Isidro",
"Juarez", "Labrador", "Magsaysay", "Nolasco", "Obrero", "Pangilinan", "Quisumbing", "Ricarte", "San Miguel",
"Tupas", "Valerio", "Yap", "Zuniga", "Alcantara", "Bautista", "Concepcion", "De Leon", "Empleo",
"Flores", "Garcia", "Herrera", "Ilagan", "Jaleco", "Lao", "Macapagal", "Nava", "Olivarez", "Paguia",
"Quijano", "Reyes", "Santos", "Tan", "Uytengsu", "Villanueva", "Wenceslao", "Yambao", "Zamora", "Abellanosa",
"Bañez", "Calderon", "Dela Rosa", "Esquivel", "Fajardo", "Gatchalian", "Hernandez", "Iglesias", "Jalandoni",
"Lacson", "Maliksi", "Navarro", "Ocampo", "Padilla", "Quimpo", "Rosario", "Salonga", "Tan", "Uy",
"Velasquez", "Zubiri", "Alfaro", "Bantilan", "Caballero", "Dizon", "Escobar", "Flores", "Guevarra", "Herrera",
"Isabelo", "Jacinto", "Lacson", "Manalo", "Natividad", "Ordoñez", "Pagdilao", "Quijano", "Ramos", "Salvacion",
"Tañada", "Urbina", "Vergara", "Zamora", "Arce", "Borja", "Cruz", "Delos Reyes", "Escueta",
"Fernandez", "Gonzales", "Hidalgo", "Illustre", "Javier", "Lacson", "Mendoza", "Nolasco", "Ocampo", "Panganiban",
"Quiambao", "Ramirez", "Sanchez", "Tantoco", "Urbano", "Villanueva", "Wang", "Yap", "Zubiri", "Abad",
"Balagtas", "Cabrera", "De Guzman", "Escudero", "Fernandez", "Guerrero", "Ilagan", "Jimenez", "Lara",
"Macapagal", "Nava", "Ortega", "Padilla", "Quijano", "Rivera", "Salvador", "Tañada", "Uy", "Velasco",
"Zamora", "Aguirre", "Bautista", "Cayetano", "De Leon", "Eusebio", "Flores", "Garcia", "Herrera", "Iglesias",
"Jalandoni", "Lacson", "Maliksi", "Navarro", "Ocampo", "Padilla", "Quimpo", "Rosario", "Salonga", "Tan",
"Uy", "Velasquez", "Zubiri", "Alcantara", "Bañez", "Calderon", "Dela Cruz", "Escobar", "Flores", "Guevarra",
"Herrera", "Isabelo", "Jacinto", "Lacson", "Manalo", "Natividad", "Ordoñez", "Pagdilao", "Quijano", "Ramos",
"Salvacion", "Tañada", "Urbina", "Vergara", "Zamora"
];
   
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateNames() {
    const gender = document.getElementById("gender").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const resultsDiv = document.getElementById("results");

    let names = [];

    for (let i = 0; i < quantity; i++) {
        let firstName = "";
        let lastName = getRandomItem(lastNames);

        if (gender === "male") {
            firstName = getRandomItem(maleFirstNames);
        } else if (gender === "female") {
            firstName = getRandomItem(femaleFirstNames);
        } else {
            if (Math.random() < 0.5) {
                firstName = getRandomItem(maleFirstNames);
            } else {
                firstName = getRandomItem(femaleFirstNames);
            }
        }

        let fullName = `${firstName} ${lastName}`;
        names.push(fullName);
    }

    resultsDiv.innerHTML = names.map((name, index) => `
        <div class="result-item">
            <span>${index + 1}. ${name}</span>
            <button class="copy-btn" onclick="copyToClipboard('${name.replace(/'/g, "\\'")}')">Copy</button>
        </div>
    `).join("");
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`Copied: "${text}"`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showCopyNotification();
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showCopyNotification() {
    const notification = document.getElementById('copyNotification');
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 1500);
}

document.getElementById("generateBtn").addEventListener("click", generateNames);