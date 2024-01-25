function solve(arr) {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    
    if (arr[index].includes("addMovie")) {
      let name = arr[index].split("addMovie ")[1];
      newArr.push({ name });
   
    } else if (arr[index].includes("directedBy")) {
      let [name, director] = arr[index].split(" directedBy ");
      let movie = newArr.find((m) => m.name === name);

      if (movie) {
        movie.director = director;
      }
      // let movieIndex = newArr.findIndex(obj => obj.name === name);
      //         if (movieIndex !== -1) {
      //             newArr[movieIndex].director = director;
      // }
    } else if (arr[index].includes("onDate")) {
      
      let [name, date] = arr[index].split(" onDate ");
      let movie = newArr.find((m) => m.name === name);
     
      if (movie) {
        movie.date = date;
      }
    }
  }

  newArr.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}
solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
