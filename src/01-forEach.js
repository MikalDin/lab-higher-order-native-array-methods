/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */



// function printAllSongTitles(songs) {  songs.forEach((song) => {
//   console.log(song.title);
// });

// }

function printAllSongTitles(songs) {
  songs.forEach((song) => {
    console.log(song.title);
  });
}

/**
 * Logs out the song title and song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 *
 * EXAMPLE:
 *  printSongDetails(songs);
 *  //> "Berlin Tsukin by Taiyo Ky"
 *  //> "Up by Sebastian Kamae"
 *  //> ...
 */
function printSongDetails(songs) {
  const songDetails = [];
  songs.forEach(song => {
    const details = `${song.title} by ${song.artist}`;
    songDetails.push(details);
  });
  return songDetails;
  
  console.log(songDetails)
}

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printSongTitlesOverThreeMinutes(songs) {
  const songTitles = [];
  songs.forEach(song => {
    if (song.runtimeInSeconds > 180) {
      songTitles.push(song.title);
    }
  });
  return songTitles;
}


module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
