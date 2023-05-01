let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

function loop(statistics) {
  for (num in statistics) {
    if (num[0] == "r" || statistics[num] % 2 != 0) {
      console.log(statistics[num]);
    }
  }

}
loop(statistics);