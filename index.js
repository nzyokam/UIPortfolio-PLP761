document.addEventListener('DOMContentLoaded', function() {
    // Color schemes for service cards
    const colorSchemes = [
        { bg: '#4e54c8', text: '#ffffff', icon: '#ffcc00' }, // Purple with yellow icon
        { bg: '#ff6b6b', text: '#ffffff', icon: '#f7fff7' }, // Coral red with white icon
        { bg: '#48dbfb', text: '#2f3640', icon: '#e84118' }, // Light blue with dark text
        { bg: '#1dd1a1', text: '#ffffff', icon: '#feca57' }, // Teal with yellow icon
        { bg: '#f368e0', text: '#ffffff', icon: '#00d2d3' }, // Pink with teal icon
        { bg: '#ff9ff3', text: '#222f3e', icon: '#0abde3' }, // Light pink with dark text
        { bg: '#feca57', text: '#2f3640', icon: '#ee5253' }, // Yellow with dark text
        { bg: '#5f27cd', text: '#ffffff', icon: '#f368e0' }  // Deep purple with pink icon
    ];

    // Service Cards Interactive Effects
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Store original styles
        const originalStyles = {
            bg: window.getComputedStyle(card).backgroundColor,
            text: window.getComputedStyle(card.querySelector('p')).color,
            icon: window.getComputedStyle(card.querySelector('i')).color,
            heading: window.getComputedStyle(card.querySelector('h3')).color,
            transform: window.getComputedStyle(card).transform,
            boxShadow: window.getComputedStyle(card).boxShadow
        };

        // Click effect - change colors
        card.addEventListener('click', function() {
            // Prevent multiple clicks during animation
            if (this.classList.contains('changing')) return;
            
            this.classList.add('changing');
            
            const randomScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
            
            // Apply new colors
            this.style.backgroundColor = randomScheme.bg;
            this.querySelector('p').style.color = randomScheme.text;
            this.querySelector('i').style.color = randomScheme.icon;
            this.querySelector('h3').style.color = randomScheme.text;
            
            // Reset after 3 seconds
            setTimeout(() => {
                this.style.backgroundColor = originalStyles.bg;
                this.querySelector('p').style.color = originalStyles.text;
                this.querySelector('i').style.color = originalStyles.icon;
                this.querySelector('h3').style.color = originalStyles.heading;
                this.classList.remove('changing');
            }, 3000);
        });

        // Hover effects
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('changing')) {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('changing')) {
                this.style.transform = originalStyles.transform;
                this.style.boxShadow = originalStyles.boxShadow;
            }
        });
    });

    // More Services link animation
    const moreServices = document.querySelector('.more-services');
    if (moreServices) {
        moreServices.addEventListener('mouseenter', function() {
            this.style.letterSpacing = '2px';
        });
        
        moreServices.addEventListener('mouseleave', function() {
            this.style.letterSpacing = 'normal';
        });
    }

    // Typing animation for section title
    const sectionTitle = document.querySelector('.section-title h2');
    if (sectionTitle) {
        const originalText = sectionTitle.textContent;
        sectionTitle.textContent = '';
        sectionTitle.style.whiteSpace = 'nowrap'; // Prevent line breaks
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                sectionTitle.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }

    // Dynamic section background on scroll
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const sectionOffset = servicesSection.offsetTop;
            const sectionHeight = servicesSection.offsetHeight;
            
            if (scrollPosition > sectionOffset - 300 && scrollPosition < sectionOffset + sectionHeight - 300) {
                servicesSection.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)';
            } else {
                servicesSection.style.background = '';
            }
        });
    }
});


// Function to show sidebar
function showSideBar() {
    const sidebar = document.getElementById('bar');
    sidebar.classList.add('active');
    
    // Add stagger animation to menu items
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('stagger');
      }, 100 * index);
    });
  }
  
  // Function to hide sidebar
  function hideSideBar() {
    const sidebar = document.getElementById('bar');
    sidebar.classList.remove('active');
    
    // Remove stagger animation
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
      item.classList.remove('stagger');
    });
  }
  
  // Toggle mobile dropdowns
  document.addEventListener('DOMContentLoaded', function() {
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
    
    mobileDropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.toggle('active');
      });
    });
  });