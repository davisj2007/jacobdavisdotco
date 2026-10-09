document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    var set = function (open) { nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open ? 'true' : 'false'); };
    toggle.addEventListener('click', function () { set(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { set(false); toggle.focus(); }
    });
  }
  // Copy-bio buttons. A hidden live region announces the result to screen readers.
  var buttons = document.querySelectorAll('[data-copy]');
  if (buttons.length) {
    var status = document.createElement('p');
    status.className = 'sr-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    document.body.appendChild(status);
  }
  buttons.forEach(function (btn) {
    var label = btn.textContent, timer;
    btn.addEventListener('click', function () {
      var h = document.getElementById(btn.getAttribute('data-copy'));
      var text = h ? Array.prototype.map.call(h.closest('article').querySelectorAll('p'), function (p) { return p.textContent; }).join('\n\n') : '';
      var name = h ? h.textContent : 'Bio';
      var finish = function (ok) {
        btn.textContent = ok ? 'Copied' : 'Copy failed';
        status.textContent = ok ? name + ' copied to clipboard.' : 'Could not copy. Select the text to copy it.';
        clearTimeout(timer);
        timer = setTimeout(function () { btn.textContent = label; status.textContent = ''; }, 2000);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(function () { finish(true); }, function () { finish(false); });
      else finish(false);
    });
  });
});
