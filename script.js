(function() {
    function trackScroll() {
        var scrolled = window.pageYOffset;
        var height = document.documentElement.clientHeight;
    
        if (scrolled > height) {
          upBtn.classList.add('up-show');
        }
        if (scrolled < height) {
          upBtn.classList.remove('up-show');
        }
      }
    
    function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -50);
          setTimeout(backToTop, 0);
        }
      }

    function openNavbar () {
      document.querySelector('.navbar').style.height = '100%';
    }

    function closeNavbar () {
      document.querySelector('.navbar').style.height = '0%';
    }

    var upBtn = document.querySelector('.up');
    var openBtn = document.querySelector('.openBtn');
    var closeBtn = document.querySelector('.closeBtn');
    var nav = document.querySelector('.navbar__content');

    window.addEventListener('scroll', trackScroll);
    upBtn.addEventListener('click', backToTop);
    openBtn.addEventListener('click', openNavbar);
    closeBtn.addEventListener('click', closeNavbar);
    nav.addEventListener('click', closeNavbar);
})();