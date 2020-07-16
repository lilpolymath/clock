setInterval(function() {
  var date = new Date(),
    clock = document.querySelector('.control');

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const hourAngle = 0.5 * (60 * hours + minutes);
  const minuteAngle = 6 * minutes;

  const angles = [minuteAngle, hourAngle, minuteAngle];

  angles.forEach(function(rotation, index) {
    clock.children[index].style.transform = 'rotate(' + rotation + 'deg)';
  });
}, 1000);
