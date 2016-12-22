var buttton = document.getElementById('button');
var body = document.getElementById('body');
var orb=document.getElementById('orb');
var HalfMoonGuy=document.getElementById('HalfMoonGuy');


button.addEventListener('click', function() {

    if (body.classList.contains('night')) {
        body.classList.remove('night');
        body.classList.add('day');

        orb.classList.remove('moon');
        orb.classList.add('sun');
        HalfMoonGuy.style.display='none';



    } else {
        body.classList.add('night');
        body.classList.remove('day');

        orb.classList.remove('sun');
        orb.classList.add('moon');
        HalfMoonGuy.style.display='block';
    }
    // body.classList.toggle('black');
    //body.classList.toggle('day');
});
