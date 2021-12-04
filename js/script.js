// supprimer texte intro
// cacherUnTruc(phraseIntro,6000);

// cacherUnTruc(logoJavaScript, 16100);
// const cacherUnTruc = function (trucACacher, temporisation){
    
// } 

setTimeout(function() {
    
    let phraseIntro = document.querySelector('#phraseIntro');
    phraseIntro.classList.add('cache')
    
},6000);

setTimeout(function() {
    let logoJavaScript = document.querySelector('.javaLogo');

    logoJavaScript.classList.add('cache')

},16100)

setTimeout(function() {
    let imagePersistante = document.querySelector('#imagePersistante');
    imagePersistante.classList.remove('cache');
    imagePersistante.classList.add('visible');

},38000 )