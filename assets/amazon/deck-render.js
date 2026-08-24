(function () {
  var started = false;
  var pdfDoc = null, zoom = 1, baseW = 0, host = null, label = null, rendering = false, pending = false;
  var QUALITY = 2;

  function renderAll() {
    if (!pdfDoc) return;
    if (rendering) { pending = true; return; }
    rendering = true;
    var targetW = Math.round(baseW * zoom);
    var frag = document.createDocumentFragment();
    var chain = Promise.resolve();
    for (var i = 1; i <= pdfDoc.numPages; i++) {
      (function (n) {
        chain = chain.then(function () {
          return pdfDoc.getPage(n).then(function (page) {
            var vp0 = page.getViewport({ scale: 1 });
            var vp = page.getViewport({ scale: (targetW / vp0.width) * QUALITY });
            var c = document.createElement('canvas');
            c.width = vp.width;
            c.height = vp.height;
            c.style.cssText = 'display:block;flex:0 0 auto;width:' + targetW + 'px;height:auto;border-radius:4px;box-shadow:0 1px 6px rgba(10,10,11,.16);background:#fff';
            frag.appendChild(c);
            return page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise;
          });
        });
      })(i);
    }
    chain.then(function () {
      host.innerHTML = '';
      host.appendChild(frag);
      rendering = false;
      if (label) label.textContent = Math.round(zoom * 100) + '%';
      if (pending) { pending = false; renderAll(); }
    }).catch(function (err) {
      rendering = false;
      host.textContent = 'Deck could not be loaded.';
      console.warn(err);
    });
  }

  function setZoom(z) {
    z = Math.min(3, Math.max(0.5, Math.round(z * 100) / 100));
    if (z === zoom) return;
    zoom = z;
    renderAll();
  }

  function wireDrag() {
    var down = false, sx = 0, sy = 0, sl = 0, st = 0;
    host.addEventListener('mousedown', function (e) {
      down = true; sx = e.clientX; sy = e.clientY; sl = host.scrollLeft; st = host.scrollTop;
      host.style.cursor = 'grabbing';
      e.preventDefault();
    });
    window.addEventListener('mousemove', function (e) {
      if (!down) return;
      host.scrollLeft = sl - (e.clientX - sx);
      host.scrollTop = st - (e.clientY - sy);
    });
    window.addEventListener('mouseup', function () {
      down = false; host.style.cursor = 'grab';
    });
  }

  function boot() {
    host = document.getElementById('deckPages');
    if (!host || !window.pdfjsLib || started) return false;
    started = true;
    label = document.getElementById('deckZoomLabel');
    var minus = document.getElementById('deckZoomOut');
    var plus = document.getElementById('deckZoomIn');
    var reset = document.getElementById('deckZoomReset');
    if (minus) minus.addEventListener('click', function () { setZoom(zoom - 0.25); });
    if (plus) plus.addEventListener('click', function () { setZoom(zoom + 0.25); });
    if (reset) reset.addEventListener('click', function () { setZoom(1); });
    host.style.cursor = 'grab';
    wireDrag();
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    pdfjsLib.getDocument('assets/amazon/files/pitch-deck.pdf').promise.then(function (pdf) {
      pdfDoc = pdf;
      baseW = host.clientWidth - 32;
      renderAll();
    }).catch(function (err) {
      host.textContent = 'Deck could not be loaded.';
      console.warn(err);
    });
    return true;
  }

  var t = setInterval(function () { if (boot()) clearInterval(t); }, 150);
  setTimeout(function () { clearInterval(t); }, 20000);
})();
