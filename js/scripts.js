var repository = [
  {
    name: "Bulbasaur",
    height: 0.7,
    type: ["grass", "poison"]
  },
  {
    name: "Ivysaur",
    height: 1,
    type: ["grass", "poison"]
  },
  {
    name: "Venusaur",
    height: 1,
    type: ["grass", "poison"]
  }
];

for (var i = 0; i < repository.length; i++) {
  document.write("<p>" + repository[i].name + "</p>");
}
