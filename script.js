document.querySelector('.grid').addEventListener('mouseover', enlarge, false);

function enlarge(e) {
  if (e.target.tagName === 'IMG') {
  var myElement = document.createElement('div');
  myElement.className = 'preview';
  e.target.parentNode.appendChild(myElement);
  var imgElement = document.createElement('img');
  var mySrc = e.target.src;
  var bigImage = mySrc.substr(0, mySrc.length -7) + '.jpg';
  imgElement.src = bigImage;
  myElement.appendChild(imgElement);

  }
  e.target.addEventListener('mouseout', handler , false);
  function handler(d) {
    var removeNode = d.target.parentNode.querySelector('div.preview');
    removeNode.parentNode.removeChild(removeNode);
    e.target.removeEventListener('mouseout', handler , false);
   console.log(handler);
   }
}

