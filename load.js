window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
  
    // Hide the loader and show the content
    loader.style.opacity = 0;
    content.classList.remove('hidden');
    
    // After a short delay, remove the loader from the DOM
    setTimeout(function() {
      loader.remove();
    }, 500);
  });