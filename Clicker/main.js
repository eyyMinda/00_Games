const cookieDisplay = document.getElementById('cookieDisplay');
const upgradesBox = document.getElementById('upgradesBox');
const momUpgrade = document.getElementById('momUpgrade');
const grannyUpgrade = document.getElementById('grannyUpgrade');
let cookieCount = getCookie('cookieCount') || 0;
let momCount = getCookie('momCount') || 0;
let grannyCount = getCookie('grannyCount') || 0;
cookieDisplay.textContent = cookieCount;

let momInterval
let grannyInterval;


function increaseCookieCount() {
    cookieCount++;
    setCookie('cookieCount', cookieCount)
    cookieDisplay.textContent = cookieCount;
}

function setCookie(name, value) {
    document.cookie = `${name}=${value};`
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
///////////Reset all stats
function cookieReset() {
    // document.cookie = "cookie=;expires=" + new Date(0).toUTCString() // Delete any cookie entirely
    clearInterval(momInterval);
    clearInterval(grannyInterval);
    setCookie('cookieCount', 0);
    setCookie('momCount', 0);
    setCookie('grannyCount', 0);
    cookieDisplay.textContent = 0;
    cookieCount = 0;
    window.location.reload();
}
/////////////Buy a Helper
function buyHelper(helper) {
    if (helper == 'mom' && cookieCount >= 50) {
        cookieCount = Number(cookieCount) - 50;
        cookieDisplay.textContent = cookieCount;
        momCount++
        setCookie('cookieCount', cookieCount);
        setCookie('momCount', momCount);
        usingHelper();
        console.log('Bought mom')

    } else if (helper == 'granny' && cookieCount >= 500) {
        cookieCount = Number(cookieCount) - 500;
        cookieDisplay.textContent = cookieCount;
        grannyCount++
        setCookie('cookieCount', cookieCount);
        setCookie('grannyCount', grannyCount);
        usingHelper();
        console.log('Bought granny')

    } else {
        console.log('no conditions met for buy')
    }
}
//////////////Set a Helper to Work
function usingHelper() {
    if (momCount) {
        if (momInterval) clearInterval(momInterval);
        momInterval = setInterval(() => speedOfHelper('mom'), 1000);
        console.log('moms:', momCount)
    }
    if (grannyCount) {
        if (grannyInterval) clearInterval(grannyInterval);
        grannyInterval = setInterval(() => speedOfHelper('granny'), 1000);
        console.log('grannies:', grannyCount)
    }

}
//////////////Set Helpers Working Speed
function speedOfHelper(helper) {
    switch (helper) {
        case 'mom':
            cookieCount = Number(cookieCount) + 1 * momCount;
            console.log('speed is')
            break
        case 'granny':
            cookieCount = Number(cookieCount) + 5 * grannyCount;
            break
        default: console.log('speed no work')
    }
    if (momCount >= 1) {
        momUpgrade.style.visibility = 'visible';
    }
    if (grannyCount >= 1) {
        grannyUpgrade.style.visibility = 'visible';
    }
    cookieDisplay.style.color = ('#0d6efd')
    cookieDisplay.textContent = cookieCount;
    setCookie('cookieCount', cookieCount);
}

/////////////Upgrades

function buyUpgrade(helperUpgrade) {
    
}

usingHelper()