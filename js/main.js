
let inputs = Array.from(document.querySelectorAll('input'));
let alert = document.querySelector('.alert');
let btns = document.querySelectorAll('button');

// calculation function
btns.forEach(btn => btn.addEventListener('click', function (e) {
 
  if (inputs[0].value === '' && inputs[1].value === '' && inputs[2].value === '' && inputs[3].value === '') {
    alert.style.opacity = .9;
    setTimeout(() => {
      alert.style.opacity = 0;
    }, 1000);
    btns.forEach(b => b.classList.remove('active'));

    document.getElementById('cardName').innerHTML = '';
    document.getElementById('card').innerHTML = 0 + ' $';
    document.getElementById('unlimitedRewards').innerHTML = 0 + ' $';
    document.getElementById('lifetimeRewards').innerHTML = 0 + ' $';

  } else {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    let percent;
    if (e.target.innerHTML === 'Brex') { percent = .3; }
    else if (e.target.innerHTML === 'Stripe') { percent = 2.9; }
    else { percent = 1.3; }

    let nums = inputs.map(input => input.value);
    let sum = nums.reduce(function (previousValue, currentValue) {
      return +previousValue + +currentValue;
    });

    let sumPercent = sum * percent;

    document.getElementById('cardName').innerHTML = e.target.innerHTML;
    document.getElementById('card').innerHTML = sumPercent.toFixed(2) + ' $';
    document.getElementById('unlimitedRewards').innerHTML = (1.1 * sumPercent).toFixed(2) + ' $';
    document.getElementById('lifetimeRewards').innerHTML = (1.2 * sumPercent).toFixed(2) + ' $';
  }
}));
