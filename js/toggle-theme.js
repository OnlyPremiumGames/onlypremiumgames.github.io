const toggleTheme = {

    // Config
    buttonsTarget: 'a[data-theme-toggler]',
    rootAttribute: 'data-theme',

    // Change
    toggle() {
        document.querySelectorAll(this.buttonsTarget).forEach(function (button) {
            button.addEventListener('click', function (event) {
                if(localStorage.getItem('current-theme') === 'dark') {
                    localStorage.setItem('current-theme', 'light');
                }
                else {
                    localStorage.setItem('current-theme', 'dark');
                }
                document.querySelector('html').setAttribute(
                  this.rootAttribute,
                  localStorage.getItem('current-theme'));
            }.bind(this), false);
        }.bind(this));
    }
}

toggleTheme.toggle();