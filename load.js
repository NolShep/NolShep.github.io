window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
  
    // transition loader/content
    loader.style.opacity = 0;
    content.classList.remove('hidden');
  
    // remove loader from DOM
    setTimeout(function() {
      loader.remove();
    }, 500);
  });
  