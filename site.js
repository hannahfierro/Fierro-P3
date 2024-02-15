/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      // the variable: movies
      created () {
          fetch('movies.json').then(response => response.json()).then(json => {
              this.movies = json;
          });
      },
      data() {
          return {
              // This holds your movies.json data.
              movies: [],
              // Additional variables for step 3
              title: "IMDB + Hannah Fierro's Top 8 Movies", // Replace YourName with your actual name
              owner: "Hannah Fierro", // Replace Your Name with your actual name
              github: "https://github.com/hannahfierro/Fierro-P3" // Replace yourusername with your actual GitHub username
          };
      },
      methods: {
        getMonthText(dateArray){
        if(dateArray[1] == 1){
            return "January" + dateArray[2] + "," + dateArray[0]
          }
          if(dateArray[1] == 2){
            return "February" + dateArray[2] + "," + dateArray[0]
          }
          if(dateArray[1] == 3){
            return "March" + dateArray[2] + "," + dateArray[0]
          }
          if(dateArray[1] == 4){
            return "April" + dateArray[2] + "," + dateArray[0]
      }
      if(dateArray[1] == 5){
        return "May" + dateArray[2] + "," + dateArray[0]
      }
      if(dateArray[1] == 6){
        return "June" + dateArray[2] + "," + dateArray[0]
      }
      if(dateArray[1] == 7){
        return "July" + dateArray[2] + "," + dateArray[0]
      }
      if(dateArray[1] == 8){
        return "August" + dateArray[2] + "," + dateArray[0]
      }
      if(dateArray[1] == 9){
        return "September" + dateArray[2] + "," + dateArray[0]
      }
      if(dateArray[1] == 10){
        return "October" + dateArray[2] + "," + dateArray[0]
      }
      if(dateArray[1] == 11){
        return "November" + dateArray[2] + "," + dateArray[0]
      }
      if(dateArray[1] == 12){
        return "December" + dateArray[2] + "," + dateArray[0]
      }
  
    },
  
    like(index) {
        this.movies[index].likes++
    },
    dislike(index){
        this.movies[index].dislikes++
    },
    posterClick(index){
        let length = this.movies[index].posters.length

        this.movies[index].posterindex++
        if(this.movies[index].posterindex >= length){
            this.movies[index].posterindex = 0
        }

},
timeText(minutes){
    let hr = Math.trunc(minutes/60)
    let min = minutes - 60*hr
    return hr + "h" +  min + "m"
}

}

})
  vue_app.mount("#vue_app");
  
