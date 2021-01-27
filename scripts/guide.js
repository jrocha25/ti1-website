var userLang = navigator.language;
var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

if (isMobile) {
    window.location.href = 'mobile/index.html';
}

else{
    switch(userLang){
        // Browser em inglês EUA
        case 'en':
            window.location.href = 'en/index.html';
            break;

        // Browser em Português
        case 'pt':
            window.location.href = 'pt/index.html';
            break;

        //Fallback. Caso o browser seja de outro idioma, o default será inglês
        default:
            window.location.href = 'en/index.html';
            break;
    }
}