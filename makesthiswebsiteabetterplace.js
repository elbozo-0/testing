let type = 'Click the button below to earn points and then upgrade your fish using them'.split('');
let i = 0;
let des = document.getElementById('des');
let idk = setInterval(() => {
    if (i < type.length) {
        des.innerHTML += type[i];
        i++;
    }
    if (i >= type.length) {
        des.style.textDecoration = 'underline';
        clearInterval(idk);
    }
}, 35);

Array.from(document.querySelectorAll('.canvas')).forEach((canvas) => {
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 10000, 1);
});