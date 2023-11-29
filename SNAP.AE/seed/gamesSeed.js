const db = require('../db/index');

const { Game, Genre, Platform, User } = require('../models/Index.js');

db.on('error', console.error.bind(console, `MongoDB connection error:`));

const gameTitles = [
  "The Legend of Zelda: Breath of the Wild", "Red Dead Redemption 2", "FIFA 22", "Assassin's Creed Valhalla",
  "Cyberpunk 2077", "Super Mario Odyssey", "Call of Duty: Warzone", "Minecraft", "Fortnite", "GTA V",
  "Halo Infinite", "Final Fantasy VII Remake", "Ghost of Tsushima", "Overwatch", "Among Us",
  "Doom Eternal", "Mortal Kombat 11", "Animal Crossing: New Horizons", "The Witcher 3: Wild Hunt"
];

const gameDescriptions = [
  "Embark on a journey in the open world of Hyrule.", "Experience the Wild West in this action-packed adventure.",
  "Kick off in the latest installment of the popular football series.", "Unleash your inner Viking in this epic saga.",
  "Navigate the dangerous streets of Night City in this futuristic RPG.", "Join Mario in his quest to rescue Princess Peach.",
  "Engage in intense battles in this popular battle royale game.", "Explore and build in the sandbox world of Minecraft.",
  "Drop into a battle royale with a vibrant, cartoonish style.", "Experience the crime-filled streets of Los Santos.",
  "Master Chief returns in the latest entry of the iconic series.", "Relive the classic RPG with stunning modern graphics.",
  "Become a samurai in feudal Japan and defend against invaders.", "Join the ranks and battle it out in this team-based shooter.",
  "Work together or deceive your friends in this multiplayer game.", "Fight against demons in a fast-paced first-person shooter.",
  "Test your skills in this brutal fighting game.", "Create your dream island life in this charming simulation game.",
  "Embark on a monster-hunting adventure in a rich fantasy world."
];

const gameImages = [
  "https://cdn.gamer-network.net/2017/usgamer/zelda-breath-of-the-wild-header.jpg",
  "https://media.rockstargames.com/rockstargames-newsite/uploads/c62931c3fd126f9e933bd6ebf946eef7f787b21d.jpg",
  "https://s1.gaming-cdn.com/images/products/758/orig/fifa-22-cover.jpg",
  "https://cdn.mos.cms.futurecdn.net/S9HT5gmySgQtYyeLGyCjEB.jpg",
  "https://cdn1.dotesports.com/wp-content/uploads/2019/12/10103113/Cyberpunk-2077-banner.jpg",
  "https://cdn.vox-cdn.com/thumbor/XtWc3OAUaCbycWvssZzy0pMWTQk=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13253719/super-mario-odyssey-art.jpg",
  "https://i.insider.com/5f6e406647af0400193a4d3a?width=1136&format=jpeg",
  "https://cdn.mos.cms.futurecdn.net/aU4MycdbF9eKUKkRkL9ctf.jpg",
  "https://cdn1.dotesports.com/wp-content/uploads/2019/01/02125935/fortnite.jpg",
  "https://static.toiimg.com/photo/msid-67586673/67586673.jpg",
  "https://compass-ssl.xbox.com/assets/84/c6/84c6efe2-3f8c-4f50-8b2d-4ff5f054e5eb.jpg?n=Halo-Infinite_GLP-Page-Hero-1084_1920x1080.jpg",
  "https://cdn.mos.cms.futurecdn.net/7d24e9167a35ff3b54719f358f4a6b15.jpg",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Final-Fantasy-7-Remake-Midgar.jpg",
  "https://cdn.mos.cms.futurecdn.net/WffBvsyRcJGLtn9WWDEMXB.jpg",
  "https://i.ytimg.com/vi/QcPGRn1SzV4/maxresdefault.jpg",
  "https://cdn.cloudflare.steamstatic.com/steam/apps/976310/header.jpg?t=1609276282",
  "https://cdn.mos.cms.futurecdn.net/LMK8GthXtXvfYDWjAd5pfH.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/animal-crossing-new-horizons-1583161863.jpg",
  "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/11/Monster-Hunter-Rise-Brachydios.jpg"
];

let genres = [];
async function getGenres() {
  return await Genre.find();
}

let platforms = [];
async function getPlatforms() {
  return await Platform.find();
}

async function getRandomGenres() {
  const genresList = [];
  while (genresList.length < 2) {
    const randomIndex = Math.floor(Math.random() * genres.length);
    const genre = genres[randomIndex]._id;
    if (!genresList.includes(genre)) {
      genresList.push(genre);
    }
  }
  return genresList;
}

async function getRandomPlatforms() {
  const platformsList = [];
  while (platformsList.length < 1) {
    const randomIndex = Math.floor(Math.random() * platforms.length);
    const platform = platforms[randomIndex]._id;
    if (!platformsList.includes(platform)) {
      platformsList.push(platform);
    }
  }
  return platformsList;
}

const createAndSaveGame = async () => {
  const gameStore = [];
  for (let i = 0; i < 19; i++) {
    const game = {
      title: gameTitles[i],
      description: gameDescriptions[i],
      price: 49.99 + i,
      genres: await getRandomGenres(),
      platforms: await getRandomPlatforms(),
      image: gameImages[i]
    };
    gameStore.push(game);
  }
  console.log(gameStore);
  await Game.insertMany(gameStore);
  console.log('Games created!');
};

module.exports = async function gameStoreSeed() {
  genres = await getGenres();
  platforms = await getPlatforms();
  
  await createAndSaveGame();
  console.log('Games created');
};
