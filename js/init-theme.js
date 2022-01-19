const initTheme = {

    // Config
    rootAttribute: 'data-theme',

    // Init
    init() {
        let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if(localStorage.getItem('current-theme') === null) {
            console.log('is null');
            localStorage.setItem('current-theme', isDark ? 'dark' : 'light')
        }

        document.querySelector('html').setAttribute(
            this.rootAttribute,
            localStorage.getItem('current-theme'));
    }
}

// Init
initTheme.init();