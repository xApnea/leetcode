// I: { "String" : [string]}
//    { "String" : [string]}

// O: { "String" : [string]}

var findFavoriteGenres = function (userSongs, songGenres) {



    // iterate through all the genres, find the max count (s)

  let favoriteGenres = {};
  // iterate through every user
  for (user in userSongs) {
    favoriteGenres[user] = {};
    // see which genre the song belongs to
    for (song of userSongs[user]) {
      for (genre in songGenres) {
        // add to the genre's count that the song belongs to
        if (songGenres[genre].includes(song)) {
          favoriteGenres[user][genre] = favoriteGenres[user][genre] ? favoriteGenres[user][genre] += 1 : 1;
          break; // so we do not test more genres than neccessary
        }
      }
    }

    // set a max and new hash table
    var max = 0;
    var favorites = {};
    // iterate through every genre to find the high genre(s)
    for (genre in favoriteGenres[user]) {
      // If we have a new highest genre, reset favs and replace with new genre
      if (favoriteGenres[user][genre] > max) {
        favorites[genre] = favoriteGenres[user][genre];
        max = favoriteGenres[user][genre];
        // If genre has equal song count to existing max, add it to object
      } else if (favoriteGenres[user][genre] === max) {
        favorites[genre] = favoriteGenres[user][genre];
      }
    }
    // return the favorite genres (keys) as an array, do not include values
    favoriteGenres[user] = Object.keys(favorites);
  }
  return favoriteGenres;
}

let userSongs = {
  "David": ["song1", "song2", "song3", "song4", "song8"],
  "Emma":  ["song5", "song6", "song7"]
};
let songGenres = {
  "Rock":    ["song1", "song3"],
  "Dubstep": ["song7"],
  "Techno":  ["song2", "song4"],
  "Pop":     ["song5", "song6"],
  "Jazz":    ["song8", "song9"]
};

let result = findFavoriteGenres(userSongs, songGenres);
console.log(result);

userSongs = {
  "David": ["song1", "song2"],
  "Emma":  ["song3", "song4"]
};
songGenres = {};

result = findFavoriteGenres(userSongs, songGenres);
console.log(result);