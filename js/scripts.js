var repository = [
  {name: "Bulbasaur", height: 0.7, type: ["grass", "poison"]},
  {name: "Ivysaur", height: 1, type: ["grass", "poison"]},
  {name: "Venusaur", height: 1, type: ["grass", "poison"]}
];

for (var i = 0; i < repository.length; i++) {
  let item = repository[i];
  document.write("<p>" + item.name + "</p>");
  document.write("<p>" + item.height + "</p>");

  if (item.height > 0.7) {
    document.write("Wow, that is big!");
  }
}
