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

    // Form validation
    const constraints = {
        name: {
            presence: { allowEmpty: false }
        },
        email: {
            presence: { allowEmpty: false },
            email: true
        },
        message: {
            presence: { allowEmpty: false }
        }
    };
 
    const form = document.getElementById('contact-form');
 
    form.addEventListener('submit', function (event) {
      const formValues = {
          name: form.elements.name.value,
          email: form.elements.email.value,
          message: form.elements.message.value
      };
 
      const errors = validate(formValues, constraints);
 
      if (errors) {
        event.preventDefault();
        const errorMessage = Object
            .values(errors)
            .map(function (fieldValues) { return fieldValues.join(', ')})
            .join("\n");
 
        alert(errorMessage);
      }
    }, false);


  });