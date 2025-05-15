const ss = document.getElementById('ss');
const sp = document.getElementById('sp');
ss.style.display = 'none';
sp.style.display = 'none';
const t = document.getElementById('codetb');

Array.from(document.getElementsByTagName('div')).forEach((e) => {
    if (e.getAttribute('name') === 'title') {
        e.style.fontSize = '35px';
        e.style.fontWeight = 'bold';
    } else if (e.getAttribute('name') === 'st') {
        e.style.fontSize = '30px';
    } else if (e.getAttribute('name') === 'small') {
        e.style.fontSize = '20px';
    }
});

setInterval(() => {
    if (document.getElementById('cb').checked == true) {
        sound = true;
    } else {
        sound = false;
    }
}, 1);

setInterval(() => {
    document.getElementById('score').innerHTML = score;
    document.getElementById('level').innerHTML = level;
    document.getElementById('coins').innerHTML = `$${coins}`;
    document.getElementById('levelup').innerHTML = `Level Up for ${leveluppay}`;
    document.getElementById('buycoins').innerHTML = `Buy a Fishy Coin for ${pay}`;
}, 1);

Array.from(document.getElementsByTagName('button')).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.isTrusted) {
            if (e.target === document.getElementById('settings')) {
                if (ss.style.display === 'block') {
                    ss.style.display = 'none';
                } else {
                    sp.style.display = 'none';
                    ss.style.display = 'block';
                }
            } else if (e.target === document.getElementById('shop')) {
                if (sp.style.display === 'block') {
                    sp.style.display = 'none';
                } else {
                    ss.style.display = 'none';
                    sp.style.display = 'block';
                }
            } else if (e.target === document.getElementById('click')) {
                score = parseInt(score) + parseInt(perClick);
                document.getElementById('score').innerHTML = score;
                if (sound == true) {
                    document.getElementById('fAudio').play();
                }
            } else if (e.target === document.getElementById('levelup')) {
                if (parseInt(score) >= parseInt(leveluppay)) {
                    score -= leveluppay;
                    perClick = parseFloat(perClick * 1.25);
                    leveluppay = parseInt(leveluppay * 1.75);
                    level = parseInt(level) + 1;
                }
            } else if (e.target === document.getElementById('buycoins')) {
                if (parseInt(score) >= parseInt(pay)) {
                    score -= pay;
                    coins = parseInt(coins) + 1;
                }
            } else if (e.target === document.getElementById('defaultskin')) {
                document.getElementById('click').style.backgroundImage = 'url("fK.png")';
            } else if (e.target === document.getElementById('buyskin1')) {
                if (s1b == 'true' || s1b == true) {
                    document.getElementById('click').style.backgroundImage = 'url("fL.png")';
                } else if (coins >= 2 && s1b == false) {
                    coins -= 2;
                    s1b = true;
                }
            } else if (e.target === document.getElementById('buyskin2')) {
                if (s2b == 'true' || s2b == true) {
                    document.getElementById('click').style.backgroundImage = 'url("fLL.png")';
                } else if (coins >= 8 && s2b == false) {
                    coins -= 8;
                    s2b = true;
                }
            } else if (e.target === document.getElementById('codeb')) {
                // yes yes yes, I know you found the codes ;-;
                imagineCheating();
            }
        }
    });
});

t.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        imagineCheating();
    }
});

const imagineCheating = () => {
    if (t.value === 'Fish') {
        t.value = '';
        let v1 = document.getElementById('v1');
        document.getElementById('all').style.display = 'none';
        v1.style.display = 'flex';
        v1.style.pointerEvents = 'none';
        v1.requestFullscreen();
        v1.play();
        v1.onended = () => {
            location.reload();
        };
    } else if (t.value === 'Noah' && (claimed == 'true' || claimed == true)) {
        alert('You have already claimed a free skin...');
        t.value = '';
    } else if (t.value === 'Noah' && (claimed !== 'true' || claimed !== true)) {
        let rv = `s${Math.ceil(Math.random() * 2)}b`;
        let worth;
        window[rv] = true;
        if (rv.toString().split('')[1] === '1') {
            worth = 2;
        } else {
            worth = 8;
        }
        alert(`You got a free skin that is worth $${worth} :3`);
        t.value = '';
        claimed = true;
    } else {
        t.value = '';
        let i = 0;
        let incorrect = 'INCORRECT'.split('');
        let interval = setInterval(() => {
            if (i < incorrect.length) {
                t.value += incorrect[i];
                i++;
            }
            if (i >= incorrect.length) {
                setTimeout(() => {
                    t.value = '';
                    clearInterval(interval);
                }, 500);
            }
        }, 50);
    }
}