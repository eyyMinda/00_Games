const cookieDisplay = document.getElementById('cookieDisplay');
const helpersSpeedDisplay = document.getElementById('helperSpeedDisplay');
const upgradesBox = document.getElementById('upgradesBox');
const momUpgrade = document.getElementById('momUpgrade');
const grannyUpgrade = document.getElementById('grannyUpgrade');

let cookieCount = getCookie('cookieCount') || 0;
let momCount = getCookie('momCount') || 0;
let grannyCount = getCookie('grannyCount') || 0;
let helpersUpgrades = [getCookie('momUpgrade') || 1, getCookie('grannyUpgrade') || 1];
cookieDisplay.textContent = cookieCount + ' c';

let Interval;
let helpersEff = [1, 5], helpersPrice = [50, 500], upgradePrice = [100, 1000];
let helpersSpeed = momCount * helpersEff[0] * helpersUpgrades[0] + grannyCount * helpersEff[1] * helpersUpgrades[1];
helpersSpeedDisplay.textContent = helpersSpeed + ' c/s';

function setCookie(name, value) {
    document.cookie = `${name}=${value};`
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
///////////Reset Stats\\\\\\\\\\\\
function cookieReset() {
    clearInterval(Interval);
    setCookie('cookieCount', 0);
    setCookie('momCount', 0);
    setCookie('momUpgrade', 1);
    setCookie('grannyCount', 0);
    setCookie('grannyUpgrade', 1);
    cookieCount = 0;
    window.location.reload();
}
/////////////Increment\\\\\\\\\\\\
function increaseCookieCount() {
    cookieCount++;
    setCookie('cookieCount', cookieCount);
    cookieDisplay.textContent = cookieCount + ' c';
}
/////////////Buy Helper\\\\\\\\\\\\
function buyHelper(helper) {
    if (helper == 'mom' && cookieCount >= helpersPrice[0]) {
        cookieCount = Number(cookieCount) - helpersPrice[0];
        helpersPrice[0] = helpersPrice[0] * 2;
        momCount++;
        setCookie('momCount', momCount);
    }
    if (helper == 'granny' && cookieCount >= helpersPrice[1]) {
        cookieCount = Number(cookieCount) - helpersPrice[1];
        helpersPrice[1] = helpersPrice[1] * 2;
        grannyCount++;
        setCookie('grannyCount', grannyCount);
    }
    cookieDisplay.textContent = cookieCount + ' c';
    setCookie('cookieCount', cookieCount);
    usingHelper();
}
//////////////Helper to Work\\\\\\\\\\\\
function usingHelper() {
    if (momCount > 0 || grannyCount > 0) {
        if (momCount > 0) momUpgrade.classList.remove('hide');
        if (grannyCount > 0) grannyUpgrade.classList.remove('hide');
        if (Interval) clearInterval(Interval);
        Interval = setInterval(() => speedOfHelpers(), 1000);
        console.log('moms:', momCount);
        console.log('grannies:', grannyCount);
    }
}
//////////////Helpers Speed\\\\\\\\\\\\
function speedOfHelpers() {
    let momSpeed = helpersEff[0] * momCount * helpersUpgrades[0];
    let grannySpeed = helpersEff[1] * grannyCount * helpersUpgrades[1];
    helpersSpeed = momSpeed + grannySpeed;
    helpersSpeedDisplay.textContent = helpersSpeed + ' c/s';
    cookieCount = Number(cookieCount) + helpersSpeed;
    cookieDisplay.textContent = cookieCount + ' c';
    setCookie('cookieCount', cookieCount);
}

/////////////Upgrades\\\\\\\\\\\\
function buyUpgrade(helper) {
    if (helper === 'mom' && cookieCount >= upgradePrice[0]) {
        cookieCount = Number(cookieCount) - upgradePrice[0];
        helpersUpgrades[0] = Number(helpersUpgrades[0]) + 0.5;
        console.log(helpersUpgrades[0]);
        upgradePrice[0] = upgradePrice[0] * 1.5;
        momUpgrade.textContent = `${upgradePrice[0].toFixed()} | Motivate`;
        setCookie('momUpgrade', helpersUpgrades[0]);
    }
    if (helper === 'granny' && cookieCount >= upgradePrice[1]) {
        cookieCount = Number(cookieCount) - upgradePrice[1];
        helpersUpgrades[1] = Number(helpersUpgrades[1]) + 0.5;
        upgradePrice[1] = upgradePrice[1] * 1.5;
        grannyUpgrade.textContent = `${upgradePrice[1].toFixed()} | Motivate`;
        setCookie('grannyUpgrade', helpersUpgrades[1]);
    }
    cookieDisplay.textContent = cookieCount + ' c';
    helpersSpeedDisplay.textContent = helpersSpeed + ' c/s';
}

usingHelper()