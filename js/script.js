// delais animations intro partie gauche page accueil

setTimeout(function () {
  let phraseIntro = document.querySelector("#phraseIntro");
  phraseIntro.classList.add("cache");
}, 6000);

setTimeout(function () {
  let logoJavaScript = document.querySelector(".javaLogo");

  logoJavaScript.classList.add("cache");
}, 16100);

// ajout logo occupation espace post animations
setTimeout(function () {
  var imagePersistante = document.querySelector("#imagePersistante");
  imagePersistante.classList.remove("cache");
  imagePersistante.classList.add("visible");
}, 38100);

//     position du sprite
const imageSprite = document.getElementById("imageSprite");
const margeHaut = imageSprite.style.marginTop;
const margeGauche = imageSprite.style.marginLeft;

const zoneHautCentre = document.getElementById("zoneHautCentre");
const zoneHautDroite = document.getElementById("zoneHautDroite");
const selectGauche = document.getElementById("selectGauche");
const selectDroite = document.getElementById("selectDroite");
const zoneBasGauche = document.getElementById("zoneBasGauche");
const zoneBasCentre = document.getElementById("zoneBasCentre");
const zoneBasDroite = document.getElementById("zoneBasDroite");

zoneHautGauche.addEventListener("mouseenter", function () {
  imageSprite.style.marginTop =
    interpolationSpriteBen.hautGauche.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.hautGauche.image.left + "px";
});

zoneHautGauche.addEventListener("mouseleave", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.centre.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.centre.image.left + "px";
});
zoneHautCentre.addEventListener("mouseenter", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.haut.image.top + "px";
  imageSprite.style.marginLeft = interpolationSpriteBen.haut.image.left + "px";
});

zoneHautCentre.addEventListener("mouseleave", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.centre.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.centre.image.left + "px";
});
zoneHautDroite.addEventListener("mouseenter", function () {
  imageSprite.style.marginTop =
    interpolationSpriteBen.hautDroite.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.hautDroite.image.left + "px";
});

zoneHautDroite.addEventListener("mouseleave", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.centre.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.centre.image.left + "px";
});
selectGauche.addEventListener("mouseenter", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.gauche.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.gauche.image.left + "px";
});

selectGauche.addEventListener("mouseleave", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.centre.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.centre.image.left + "px";
});
selectDroite.addEventListener("mouseenter", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.droite.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.droite.image.left + "px";
});

selectDroite.addEventListener("mouseleave", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.centre.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.centre.image.left + "px";
});
zoneBasGauche.addEventListener("mouseenter", function () {
  imageSprite.style.marginTop =
    interpolationSpriteBen.basGauche.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.basGauche.image.left + "px";
});

zoneBasGauche.addEventListener("mouseleave", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.centre.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.centre.image.left + "px";
});
zoneBasCentre.addEventListener("mouseenter", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.bas.image.top + "px";
  imageSprite.style.marginLeft = interpolationSpriteBen.bas.image.left + "px";
});

zoneBasCentre.addEventListener("mouseleave", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.centre.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.centre.image.left + "px";
});
zoneBasDroite.addEventListener("mouseenter", function () {
  imageSprite.style.marginTop =
    interpolationSpriteBen.basDroite.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.basDroite.image.left + "px";
});

zoneBasDroite.addEventListener("mouseleave", function () {
  imageSprite.style.marginTop = interpolationSpriteBen.centre.image.top + "px";
  imageSprite.style.marginLeft =
    interpolationSpriteBen.centre.image.left + "px";
});

var interpolationSpriteBen = {
  bas: {
    image: {
      top: 0,
      left: 0,
    },
  },
  basDroite: {
    image: {
      top: 0,
      left: -242,
    },
  },
  basGauche: {
    image: {
      top: 0,
      left: -484,
    },
  },
  centre: {
    image: {
      top: -323,
      left: 0,
    },
  },
  droite: {
    image: {
      top: -323,
      left: -241,
    },
  },
  gauche: {
    image: {
      top: -323,
      left: -484,
    },
  },
  haut: {
    image: {
      top: -646,
      left: 0,
    },
  },
  hautDroite: {
    image: {
      top: -646,
      left: -242,
    },
  },
  hautGauche: {
    image: {
      top: -646,
      left: -484,
    },
  },
};

//////////////////////////////////////////////////////////////////
//////////////////////////BRUITAGES  INTRO///////////////////////////
/////////////////////////////////////////////////////////////////

var hoverAffrontement = document.getElementById('zoneHautCentre');
var hoverCv = document.getElementById('zoneBasCentre');
var hoverLienWhire = document.getElementById('selectGauche');
var hoverLienLinkedIn = document.getElementById('selectDroite');


var hyperspace = new Audio('sounds/Hyperspace.mp3');
var r2d2 = new Audio('sounds/R2D2.mp3');
var combat4 = new Audio('sounds/Lightsaber-duel4.mp3');

hoverAffrontement.addEventListener('mouseenter', function(){ 
  combat4.play();
});

hoverCv.addEventListener('mouseenter', function(){
  r2d2.play();
});

hoverLienWhire.addEventListener('mouseenter', function(){
  hyperspace.play();
});

hoverLienLinkedIn.addEventListener('mouseenter', function(){
  hyperspace.play();
});
