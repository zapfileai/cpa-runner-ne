const nebraskaCities = [
  "Lodgepole", "Lyons", "Madison", "Malmo", "Martell",
  "Mccook", "Merna", "Milford", "Minatare", "Minden",
  "Mitchell", "Nebraska City", "Neligh", "Niobrara", "Norfolk",
  "North Loup", "North Platte", "Offutt", "Ogallala", "Omaha",
  "Oneill", "Ord", "Osceola", "Osmond", "Oxford",
  "Papillion", "Pilger", "Platte Center", "Plattsmouth", "Ponca",
  "Randolph", "Ravenna", "Red Cloud", "Roca", "Royal",
  "Rulo", "Saint Helena", "Saint Paul", "Sargent", "Schuyler",
  "Scottsbluff", "Seward", "Sidney", "Snyder", "South Sioux City",
  "Springfield", "Stanton", "Stromsburg", "Superior", "Sutton",
  "Syracuse", "Tecumseh", "Utica", "Valentine", "Valley",
  "Wahoo", "Waterbury", "Waterloo", "Wausa", "Waverly",
  "Wayne", "West Point", "Weston", "York",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < nebraskaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(nebraskaCities[i]);
}

module.exports = { batches };
