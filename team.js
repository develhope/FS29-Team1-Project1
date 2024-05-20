const teams = [
  {
    name: "Giuseppe",
    surname: "Incurvati",
    age: 30,
    city: "Roma",
    hobby: "Fumetti",
    favoriteFood: "Purè di patate",
    favoriteVideoGame: "Final Fantasy IX",
    favoriteFilm: "Batman",
    favoriteBook: "Persy Jackson",
    petName: "Luna, beagle",
  },
  {
    name: "Francesco",
    surname: "Simeone",
    age: 34,
    city: "Latiano",
    hobby: "Football 5-a-side",
    favoriteFood: "Carbonara",
    favoriteVideoGame: "Final Fantasy 7",
    favoriteFilm: "Kimi no na wa - Your-name",
    favoriteBook: "The Metamorphosis",
    petName: "Loki",
  },
  {
    name: "Emanuele",
    surname: "Vutera",
    age: 27,
    city: "Perugia",
    hobby: "Videogames",
    favoriteFood: "Pasta con il ragù",
    favoriteVideoGame: "League of Legends",
    favoriteFilm: "Cambia la tua vita con un click",
    favoriteBook: "",
    petName: "",
  },
  {
    name: "Luca",
    surname: "Potenza",
    age: 29,
    city: "Roma",
    hobby: "Gaming",
    favoriteFood: "Pizza",
    favoriteVideoGame: "Red Redemption 2",
    favoriteFilm: "Old Henry",
    favoriteBook: "Tex",
    petName: "Totò & Sammy",
  },
  {
    name: "Gioele",
    surname: "Brunori",
    age: 24,
    city: "Cingoli",
    hobby: "kick box",
    favoriteFood: "pasta",
    favoriteVideoGame: "dark souls 3",
    favoriteFilm: "roadhouse",
    favoriteBook: "la casa",
    petName: "Randal",
  },
];

function alphabeticalOrder(arr) {
  const arrCopy = arr.map((person) => person);
  arrCopy.sort((person1, person2) => {
    const nameA = person1.surname.toUpperCase();
    const nameB = person2.surname.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  });
  console.log("Il team in ordine alfabetico:");
  arrCopy.forEach((person) => console.log(`${person.surname} ${person.name}`));
}

function ageOrder(teams) {
  const arr = teams.map((person) => person);
  arr.sort((person1, person2) => person1.age - person2.age);
  console.log("L'età di ognuno:");
  arr.forEach((person) => console.log(`${person.name} ha ${person.age}`));
}

function calculateTeamAge(teams) {
  let sum = teams.reduce((a, person) => a + person.age, 0);
  let avg = sum / teams.length;
  console.log(`L'età media è ${Math.round(avg)}`);
}

function animalPet(teams) {
  console.log("Membri del team che hanno un animale e il suo nome");
  const x = teams.forEach((team) => {
    if (team.petName) {
      console.log("L'animale di " + team.name + " si chiama " + team.petName);
    } else {
      console.log(`${team.name} non ha un animale`);
    }
  });
}

function playerWhoPlayOnLol(teams) {
  const whoPlay = teams.filter(
    (player) =>
      player.favoriteVideoGame.toLowerCase() === "league of legends" ||
      player.favoriteVideoGame.toLowerCase() === "lol"
  );
  return whoPlay.forEach((element) => {
    console.log(`Lo studente che gioca a lol è: ${element.name}`);
  });
}

function sameName(arr) {
  const contaNomi = {};
  const nomiDoppi = [];
  arr.forEach((person) => {
    contaNomi[person.name.toLowerCase()] =
      (contaNomi[person.name.toLowerCase()] || 0) + 1;
  });
  for (const name in contaNomi) {
    if (contaNomi[name] > 1) {
      nomiDoppi[nomiDoppi.length] = name;
    }
  }
  if (nomiDoppi.length > 0) {
    console.log("Ci sono due o più membri con il nome:", nomiDoppi.join(", "));
  } else {
    console.log("Non ci sono membri con nomi uguali.");
  }
}

alphabeticalOrder(teams);
ageOrder(teams);
calculateTeamAge(teams);
animalPet(teams);
playerWhoPlayOnLol(teams);
sameName(teams);
