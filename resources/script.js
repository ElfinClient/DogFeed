let food = 50; //food-bar      //feed
let water = 50; //water-bar     //water
let health = 100;//health-bar    //kill

const deadCheck = () => {
    if (food <= 0 || water <= 0 || health <= 0 || food > 120 || water > 120) {
        document.getElementById('health-bar').innerHTML = '0/100 Health'
        document.getElementById('robot').innerHTML = '<img src="./Recources/Images/images.jpg" alt="Dead puppy">'
        document.getElementById('food-bar').id = 'nuidfsiuginufdgniu'    //so it doesnt keep removing food after death
        document.getElementById('water-bar').id = 'nuisaddfsiuginufdgniu'//so it doesnt keep removing water after death
    }
}

const clickFeed = () => {
    if (document.getElementById('robot').innerHTML !== '<img src="./Recources/Images/images.jpg" alt="Dead puppy">') {
        food += 20
        document.getElementById('food-bar').innerHTML = `${food}/100 Food`
    } else {
        document.getElementById('feed').innerHTML = 'You cannot feed a dead dog.'
        document.getElementById('feed').style.fontSize = '1rem'
    }
}
const clickWater = () => {
    if (document.getElementById('robot').innerHTML !== '<img src="./Recources/Images/images.jpg" alt="Dead puppy">') {
        water += 20
        document.getElementById('water-bar').innerHTML = `${water}/100 Water`
    } else {
        document.getElementById('water').innerHTML = 'You cannot water a dead dog.'
        document.getElementById('water').style.fontSize = '1rem'
    }
}

const clickKill = () => {
    if (document.getElementById('robot').innerHTML !== '<img src="./Recources/Images/images.jpg" alt="Dead puppy">') {
        health = 0
        document.getElementById('health-bar').innerHTML = `${health}/100 Health`
    } else {
        document.getElementById('kill').innerHTML = 'You cannot kill a dead dog.'
        document.getElementById('kill').style.fontSize = '1rem'
    }

}

const overTime = () => {
    food -= 10
    document.getElementById('food-bar').innerHTML = `${food}/100 Food`
    water -= 10
    document.getElementById('water-bar').innerHTML = `${water}/100 Water`
    deadCheck()
}


const makeEasyMode = () => {
    intervalID = window.setInterval(overTime, 15000);
}

const makeMediumMode = () => {
    intervalID = window.setInterval(overTime, 6000);
}

const makeHardMode = () => {
    intervalID = window.setInterval(overTime, 1000);
}

document.onclick = deadCheck

document.getElementById('feed').onclick = clickFeed
document.getElementById('water').onclick = clickWater
document.getElementById('kill').onclick = clickKill

document.getElementById('easy').onclick = makeEasyMode
document.getElementById('medium').onclick = makeMediumMode
document.getElementById('hard').onclick = makeHardMode
