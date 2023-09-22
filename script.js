var monImage = document.getElementById("monImage");
var boutonCacher = document.getElementById("hide")
var boutonMontrer = document.getElementById("show")

boutonMontrer.addEventListener('click', function() {
    monImage.style.display = 'block';
});

boutonCacher.addEventListener('click',function() {
    monImage.style.display = 'none'
});