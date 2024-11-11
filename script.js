document.getElementById('wishButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.toggle('hidden');
    messageDiv.textContent = "Happy Birthday, Mom! 🎉🎂";
});

document.getElementById('cakeButton').addEventListener('click', function() {
    const cakeDiv = document.getElementById('cake');
    cakeDiv.classList.toggle('hidden');
});

document.getElementById('balloonsButton').addEventListener('click', function() {
    const balloonsDiv = document.getElementById('balloons');
    balloonsDiv.classList.toggle('hidden');
});

document.getElementById('photoButton').addEventListener('click', function() {
    const photoDiv = document.getElementById('familyPhoto');
    photoDiv.classList.toggle('hidden');
});
