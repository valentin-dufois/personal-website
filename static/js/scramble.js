/**
 * Text scramble animation for headings with data-scramble attribute.
 * Progressive enhancement: text is visible by default, JS adds the animation.
 */
(function () {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  var duration = 800;
  var delay = 150;

  function scramble(el) {
    var target = el.getAttribute('data-scramble');
    if (!target) return;

    var startTime = null;
    var len = target.length;

    function frame(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime - delay;

      if (elapsed < 0) {
        el.textContent = Array.from({ length: len }, function () {
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        requestAnimationFrame(frame);
        return;
      }

      var progress = Math.min(elapsed / duration, 1);
      var resolved = Math.floor(progress * len);
      var text = '';

      for (var i = 0; i < len; i++) {
        if (i < resolved) {
          text += target[i];
        } else if (target[i] === ' ') {
          text += ' ';
        } else {
          text += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      el.textContent = text;

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(frame);
  }

  document.querySelectorAll('[data-scramble]').forEach(scramble);
})();
