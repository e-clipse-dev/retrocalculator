let total = 0

document.getElementById('addThree').addEventListener('click', addThree)
document.getElementById('addTwo').addEventListener('click', addTwo)
document.getElementById('addOne').addEventListener('click', addOne)

document.getElementById('multiplyThree').addEventListener('click', multiplyThree)
document.getElementById('multiplyTwo').addEventListener('click', multiplyTwo)
document.getElementById('multiplyOne').addEventListener('click', multiplyOne)

document.getElementById('subThree').addEventListener('click', subThree)
document.getElementById('subTwo').addEventListener('click', subTwo)
document.getElementById('subOne').addEventListener('click', subOne)

document.getElementById('divideThree').addEventListener('click', divideThree)
document.getElementById('divideTwo').addEventListener('click', divideTwo)
document.getElementById('divideOne').addEventListener('click', divideOne)

document.getElementById('zero').addEventListener('click', resetValue)

// https://freesound.org/people/ryusa/sounds/531176/
const powerUpAdd3 = new Audio('media/8-bit-power-up.wav')
const powerUpAdd2 = new Audio('media/8-bit-power-up.wav')
const powerUpAdd1 = new Audio('media/8-bit-power-up.wav')


// https://freesound.org/people/smill.and.welson/sounds/698737/
const resetSound = new Audio('media/reset.ogg')

// https://freesound.org/people/MentosLat/sounds/417486/
const deathSub1 = new Audio('media/8-bit-death-sound.wav')
const deathSub2 = new Audio('media/8-bit-death-sound.wav')
const deathSub3 = new Audio('media/8-bit-death-sound.wav')

// adding
function addThree() {
  total += 3;
  total = parseFloat(total.toFixed(4));
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(242, 149, 167)'
  document.getElementById('result').classList.add('shadow')
}
function addTwo() {
  powerUpAdd2.play();
  total += 2;
  total = parseFloat(total.toFixed(4));
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(250, 201, 124)';
  document.getElementById('result').classList.add('shadow');
}
function addOne() {
  powerUpAdd1.play();
  total++
  total = parseFloat(total.toFixed(4));
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(253, 245, 144)'
  document.getElementById('result').classList.add('shadow')
}

// multiplying
function multiplyThree() {
  powerUpAdd3.play();
  total *= 3;
  total = parseFloat(total.toFixed(4));
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(242, 149, 167)'
  document.getElementById('result').classList.add('shadow')
}
function multiplyTwo() {
  powerUpAdd2.play();
  total *= 2;
  total = parseFloat(total.toFixed(4));
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(250, 201, 124)'
  document.getElementById('result').classList.add('shadow')
}
function multiplyOne() {
  powerUpAdd1.play();
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(253, 245, 144)'
  document.getElementById('result').classList.add('shadow')
}

//subtracting
function subOne() {
  deathSub3.play();
  total--;
  total = parseFloat(total.toFixed(4));
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(128, 202, 177)'
  document.getElementById('result').classList.add('shadow')
}
function subTwo() {
  deathSub2.play();
  total -= 2;
  total = parseFloat(total.toFixed(4));
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(104, 185, 230)'
  document.getElementById('result').classList.add('shadow')
}
function subThree() {
  deathSub1.play();
  total -= 3;
  total = parseFloat(total.toFixed(4));
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(132, 122, 185)'
  document.getElementById('result').classList.add('shadow')
}

//dividing
function divideOne() {
  deathSub3.play();
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(128, 202, 177)'
  document.getElementById('result').classList.add('shadow')
}
function divideTwo() {
  deathSub2.play();
  total = (total/2);
  total = parseFloat(total.toFixed(4));
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(104, 185, 230)'
  document.getElementById('result').classList.add('shadow')
}
function divideThree() {
  deathSub1.play();
  total = (total/3);
  total = parseFloat(total.toFixed(4));
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'rgb(132, 122, 185)'
  document.getElementById('result').classList.add('shadow')
}

//reset
function resetValue() {
  resetSound.play();
  total = 0;
  document.getElementById('result').innerHTML = total;
  document.getElementById('result').style.color = 'black'
  document.getElementById('result').classList.remove('shadow')
}



