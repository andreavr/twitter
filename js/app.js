window.addEventListener('load', function() {
  var text = document.querySelector('textarea');
  var count = document.querySelector('span');
  var btn = document.querySelector('button');
  var section = document.querySelector('section');
  var time = moment().format('LT');

  count.textContent = '140';

  text.addEventListener('keyup', function() {
    var characteres = text.value.split('');
    var totalCharacteres = characteres.length;
    var counter = 140 - totalCharacteres;
    btn.disabled = false;
    btn.classList.add('btn-enabled');
    count.textContent = counter;

    if (totalCharacteres < 120) {
      count.classList.remove('count-red');
      count.classList.remove('count-yellow');
      count.classList.remove('count-green');
      count.classList.add('count-blue');
    } else if (totalCharacteres >= 120 && totalCharacteres < 130) {
      count.classList.remove('count-blue');
      count.classList.remove('count-red');
      count.classList.remove('count-yellow');
      count.classList.add('count-green');
    } else if (totalCharacteres >= 130 && totalCharacteres < 140) {
      count.classList.remove('count-green');
      count.classList.remove('count-blue');
      count.classList.remove('count-red');
      count.classList.add('count-yellow');
    } else if (totalCharacteres > 140) {
      btn.disabled = true;
      btn.classList.remove('btn-enabled');
    } else {
      count.classList.remove('count-yellow');
      count.classList.remove('count-green');
      count.classList.remove('count-blue');
      count.classList.add('count-red');
    }
    setTimeout(function() {
      text.style.cssText = 'height:auto';
      text.style.cssText = 'height:' + text.scrollHeight + 'px';
    }, 0);
  });
  btn.addEventListener('click', function() {
    var div = document.createElement('div');
    div.innerHTML = text.value + '<br>' + time;
    div.classList.add('tweet');
    div.classList.add('line-height');
    section.appendChild(div);
    text.value = '';
    count.textContent = '140';
    count.classList.remove('count-blue');
    count.classList.remove('count-yellow');
    count.classList.remove('count-green');
    count.classList.remove('count-red');
    btn.disabled = true;
    btn.classList.remove('btn-enabled');
  });
});
