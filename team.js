const teams = [
  {
    name: "Giuseppe",
    surname: "Incurvati",
    age: 30,
    city: "Roma",
    hobby: "Fumetti",
    favoriteFood: "Purè di patate",
    favoriteVideogame: "Final Fantasy IX",
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

<<<<<<< HEAD
function playerWhoPlayOnLol(teams) {
  const whoPlay = teams.filter(
    (player) =>
      player.favoriteVideoGame.toLowerCase() === "league of legends" ||
      player.favoriteVideoGame.toLowerCase() === "lol"
  );
  return whoPlay.forEach((element) => {
    console.log(`lo studente che gioca a lol è: ${element.name}`);
  });
}

playerWhoPlayOnLol(teams);
=======
function calculateTeamAge(teams) {
  let sum = teams.reduce((a, person) => a + person.age, 0);
  let avg = sum / teams.length;
  return avg;
}
const averageAge = calculateTeamAge(teams);
console.log(Math.round(averageAge));
>>>>>>> development
