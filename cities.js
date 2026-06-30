const nebraskaCities = [
  "Adams", "Ainsworth", "Albion", "Alda", "Alliance",
  "Alma", "Alvo", "Arlington", "Ashland", "Atkinson",
  "Auburn", "Aurora", "Bartley", "Bayard", "Beatrice",
  "Beaver City", "Bellevue", "Benkelman", "Bennington", "Blair",
  "Bloomfield", "Boys Town", "Bradshaw", "Broken Bow", "Bushnell",
  "Central City", "Ceresco", "Chadron", "Champion", "Clarks",
  "Colon", "Columbus", "Cortland", "Cozad", "Creighton",
  "Crete", "Crookston", "Dannebrog", "David City", "Daykin",
  "Deshler", "Dodge", "Doniphan", "Duncan", "Eagle",
  "Elkhorn", "Elwood", "Emerson", "Enders", "Fairbury",
  "Falls City", "Fort Calhoun", "Franklin", "Fremont", "Fullerton",
  "Geneva", "Gering", "Gothenburg", "Grand Island", "Gretna",
  "Haigler", "Harrisburg", "Harvard", "Hastings", "Hay Springs",
  "Henderson", "Hickman", "Holbrook", "Holdrege", "Howells",
  "Hubbard", "Imperial", "Kearney", "Kennard", "Kimball",
  "La Vista", "Laurel", "Lexington", "Lincoln", "Lindsay",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < nebraskaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(nebraskaCities[i]);
}

module.exports = { batches };
