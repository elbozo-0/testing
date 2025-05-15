var perClick, level, coins, pay, score, leveluppay, s1b, s2b, sound, claimed;
let next;

perClick = parseInt(localStorage.getItem('perClick')) || 1;
level = parseInt(localStorage.getItem('level')) || 0;
coins = parseInt(localStorage.getItem('coins')) || 0;
pay = parseInt(localStorage.getItem('pay')) || 500;
score = parseInt(localStorage.getItem('score')) || 0;
leveluppay = parseInt(localStorage.getItem('leveluppay')) || 50;
s1b = localStorage.getItem('s1b') || false;
s2b = localStorage.getItem('s2b') || false;
sound = localStorage.getItem('sound') || false;
claimed = localStorage.getItem('claimed') || false;
document.getElementById('score').innerHTML = score;
document.getElementById('level').innerHTML = level;
document.getElementById('coins').innerHTML = `$${coins}`;
if (s1b == 'true' || s2b == true) {
    document.getElementById('buyskin1').innerHTML = 'Equip skin';
} else {
    document.getElementById('buyskin1').innerHTML = 'Buy This Skin for $2';
}
if (s2b == 'true' || s2b == true) {
    document.getElementById('buyskin2').innerHTML = 'Equip skin';
} else {
    document.getElementById('buyskin2').innerHTML = 'Buy This Skin for $8';
}
if (sound == 'true' || sound == true) {
    document.getElementById('cb').checked = true;
}
 
setInterval(() => {
    localStorage.setItem('perClick', perClick);
    localStorage.setItem('level', level);
    localStorage.setItem('coins', coins);
    localStorage.setItem('pay', pay);
    localStorage.setItem('score', score);
    localStorage.setItem('leveluppay', leveluppay);
    localStorage.setItem('s1b', s1b);
    localStorage.setItem('s2b', s2b);
    localStorage.setItem('sound', sound);
    localStorage.setItem('claimed', claimed);
    if (s1b == true) {
        document.getElementById('buyskin1').innerHTML = 'Equip skin';
    }
    if (s2b == true) {
        document.getElementById('buyskin2').innerHTML = 'Equip skin';
    }
}, 1);
document.getElementById('levelup').innerHTML += leveluppay;
document.getElementById('buycoins').innerHTML += pay;