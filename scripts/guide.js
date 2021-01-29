var userLang = navigator.language;

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