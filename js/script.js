// delais animations intro partie gauche page accueil

setTimeout(function() {
    
    let phraseIntro = document.querySelector('#phraseIntro');
    phraseIntro.classList.add('cache')
    
},6000);

setTimeout(function() {
    let logoJavaScript = document.querySelector('.javaLogo');

    logoJavaScript.classList.add('cache')

},16100)

// ajout logo occupation espace post animations
setTimeout(function() {
    let imagePersistante = document.querySelector('#imagePersistante');
    imagePersistante.classList.remove('cache');
    imagePersistante.classList.add('visible');

},38000 )