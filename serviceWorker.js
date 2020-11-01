const DuckyComics = "Ducky-Comics"
const assets = [
    "/",
    "run.html",
    "stay.html",
    "batAndRobin.html",
    "batFall.jpeg",
    "batman.png",
    "batman.png",
    "batmanBatcave.jpeg",
    "batmanDead.jpg",
    "burger.png",
    "chap3.html",
    "chap4.html",
    "city.html",
    "credits.html",
    "crime.html",
    "fall.html",
    "first.html",
    "freeze.html",
    "freezeGun.png",
    "gamestop-logo.png",
    "help.html",
    "homeDepot.html",
    "homeDepot.png",
    "index.html",
    "jump.html",
    "kick.html",
    "Kite_man_gun.png",
    "Kite-Man-Scream.jpeg",
    "kiteMan.jpeg",
    "kitePunch.html",
    "main.html",
    "minecraft.html",
    "mining.png",
    "mrFreeze.png",
    "Nightwing-feature.jpeg",
    "nightwingjump.png",
    "nightwingShoot.png",
    "nomanland.jpg",
    "punch.html",
    "redrobin.html",
    "redrobin.png",
    "rob.html",
    "Robin_Punch.png",
    "still.html",
    "styles.css",
    "the-home-depot.png",
    "two.html",
    "vault.html",
    "start.html"
]

self.addEventListener("install", installEvent => {
    console.log("Trying to install servivce worker and in cache static assets");
  installEvent.waitUntil(
    caches.open(BatmanMrFreeze).then(cache => {
      return cache.addAll(assets)
    })
  )
})