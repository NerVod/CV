// delais animations intro partie gauche page accueil

setTimeout(function() {
    
    let phraseIntro = document.querySelector('#phraseIntro');
    phraseIntro.classList.add('cache')
    
},6000);

setTimeout(function() {
    let logoJavaScript = document.querySelector('.javaLogo');

    logoJavaScript.classList.add('cache')

},16100);

// ajout logo occupation espace post animations
setTimeout(function() {
    let imagePersistante = document.querySelector('#imagePersistante');
    imagePersistante.classList.remove('cache');
    imagePersistante.classList.add('visible');

},38000 );


//  position du div
let zoneAction = document.querySelector(".droiteSelection");
let divPhoto = document.getElementById("photoChange");

let positionDiv =function() {
    let rect = divPhoto.getBoundingClientRect();
    // let divX = rect
    console.log(rect)
} 
zoneAction.addEventListener('mousemove', function(event) {positionDiv()})


// photos mobile à la souris


var positionSouris = function() {
    if (addEventListener)
    var positionSourisX = event.pageX;
    var positionSourisY = event.pageY;
    
    console.log("positionSourisX " + positionSourisX);
    console.log("positionSourisY " + positionSourisY);
}    
    
window.addEventListener('mousemove', function(event) {positionSouris()})
window.document.attachEvent('onmousemove', positionSouris());
    
    
//     position du sprite 
var imageSprite = document.getElementById("imageSprite") 
var margeHaut = imageSprite.style.marginTop;
var margeGauche = imageSprite.style.marginLeft;

var interpolationSpriteBen = {

  bas:  [{
    margeHaut : 0 + 'px',
    margeGauche : 0 + 'px' 
  }],


}

var spriteBen = interpolationSpriteBen.bas