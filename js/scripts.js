

function setDate() {
  const now = new Date();
  const secondHand = document.querySelector('.second-hand');
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

  const minuteHand = document.querySelector('.minute-hand');
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 6) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hourHand = document.querySelector('.hour-hand');
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);

setDate();


$(document).ready(function() {
  $('.add-clock form').submit(function(event) {
    event.preventDefault();

    var city = $('#city').val();


    $('.each-clock').append('<p>' + '<span class="city-name"></span>' + '</p>' + '<div class="clock">' + '<div class="face">' + '<div class="hand second-hand">' + '</div' + '<div class="hand minute-hand">' + '</div>' + '<div class="hand hour-hand">' + '<div>' + '</div>' + '</div>');

$('.city-name').text(city);
  });
});
