var repository = [
  { name: "Bulbasaur", height: 0.7, type: ["grass", "poison"] },
  { name: "Ivysaur", height: 1, type: ["grass", "poison"] },
  { name: "Venusaur", height: 2, type: ["grass", "poison"] }
];

repository.forEach(function(repository) {
  document.write(repository.name + "<br>");
  document.write(repository.type + "<br>");
  document.write(repository.height + "<br><br>");
});
