document.addEventListener('DOMContentLoaded', function() {
    
    // Init Sidenav
    var sideNav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sideNav, {});
    
    // init Scrollspy
    const scrollSpy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollSpy, {
        scrollOffset: 20
    })


    //Dark mode
    let darkMode = 'false';

    const lightModeButton = document.querySelector('#light-mode');
    
    lightModeButton.addEventListener('click', (event)=> {
        console.log('going to light mode');
        // toggles which button is displayed
        lightModeButton.style.display = 'none';
        darkModeButton.style.display = 'inline-block';

        // change body styles
        document.body.classList.remove('dark-mode');
    });
     

    const darkModeButton = document.querySelector('#dark-mode');
    
    darkModeButton.addEventListener('click', (event)=> {
        console.log('going to dark mode');
        // toggles which button is displayed
        lightModeButton.style.display = 'inline-block';
        darkModeButton.style.display = 'none';
        // change body styles
        document.body.classList.add('dark-mode');
        

    })

  });