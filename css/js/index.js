window.onload = function() {
    var flames = document.getElementsByClassName('flame');
    for (var i = 0; i < flames.length; i++) {
      flames[i].style.animationDelay = i * 0.1 + 's';
    }
  };
  


window.addEventListener('load', function() {
    var loader = document.querySelector('.fire-loading');
    loader.classList.add('show');
  });
  