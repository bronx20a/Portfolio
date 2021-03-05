let open = document.getElementById('open-button');
let close = document.getElementById('close-button');
let readMore = document.getElementById('read-more');

let view = function() {
  readMore.style.display = 'block';
  close.style.display = 'block';
  open.style.display = 'none';
};

let hide = function() {
  readMore.style.display = 'none';
  close.style.display = 'none';
  open.style.display = 'block';
};
open.addEventListener('click', view);
close.addEventListener('click', hide);
