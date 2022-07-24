
let inputs = Array.from(document.querySelectorAll('input'));


// function calculateReward(percent) {

//   let nums = inputs.map(input => input.value);
//   let sum = nums.reduce(function (previousValue, currentValue) {
//     return +previousValue + +currentValue;
//   });

//   let sumPercent = sum * percent;

//   document.getElementById('unlimitedRewards').innerHTML = (1.1 * sumPercent).toFixed(2) + ' $';
//   document.getElementById('lifetimeRewards').innerHTML = (1.2 * sumPercent).toFixed(2) + ' $';
// }

let btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', function (e) {
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

  document.getElementById('unlimitedRewards').innerHTML = (1.1 * sumPercent).toFixed(2) + ' $';
  document.getElementById('lifetimeRewards').innerHTML = (1.2 * sumPercent).toFixed(2) + ' $';
}));