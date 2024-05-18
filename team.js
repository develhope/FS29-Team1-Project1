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
    name: "luca",
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
    name: "gioele",
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
function sameName(arr) {
  const contaNomi = {};

  // Trova il nome dei membri
  arr.forEach((person) => {
    contaNomi[person.name.toLowerCase()] =
      (contaNomi[person.name.toLowerCase()] || 0) + 1;
  });

  // Trova i nomi uguali
  const nomiDoppi = [];
  for (const name in contaNomi) {
    if (contaNomi[name] > 1) {
      nomiDoppi[nomiDoppi.length] = name;
    }
  }

  // Stampa i nomi uguali se ci sono, altrimenti stampa messagio di assenza nomi uguali
  if (nomiDoppi.length > 0) {
    console.log("Ci sono due o più membri con il nome:", nomiDoppi.join(", "));
  } else {
    console.log("Non ci sono membri con nomi uguali.");
  }
}

alphabeticalOrder(teams);
sameName(teams);
