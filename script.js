setInterval(function() {
  var date = new Date(),
    control = document.querySelector('.control');

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const hourAngle = 0.5 * (60 * hours + minutes);
  const minuteAngle = 6 * minutes;

  const angles = [minuteAngle, hourAngle, minuteAngle];

  angles.forEach(function(rotation, index) {
    control.children[index].style.transform = 'rotate(' + rotation + 'deg)';
  });
}, 1000);

function positionNumbers() {
  let clock = document.querySelector('.clock');

  console.log(clock.children);

  let number = 12; //
  let size = 200; //

  let half = size / 2;

  let cx = half; // center of x
  let cy = half; // center of y
  let r = half; // radius

  for (let i = 1; i <= number; i++) {
    const ang = i * (Math.PI / (number / 2));
    const leftPos = cx + r * Math.cos(ang);
    const topPos = cy + r * Math.sin(ang);
    // clock.children[i].style.transform = 'translate(-150%, -100%)';

    // if (clock.children[i].textContent.length === 2) {
    //   clock.children[i].style.transform = 'translate(-125%, -100%)';
    // }
    // clock.children[i].style.top = topPos + 'px';
    // clock.children[i].style.left = leftPos + 'px';
    clock.children[i].style.zIndex = 10;
  }
}

// positionNumbers();
