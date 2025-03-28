function takeShower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shower = false;
            if (shower) {
                console.log("You take shower..");
                resolve('You took shower');
            } else {
                reject('You didnt do shower');
            }
        }, 2000);
    })
}

function doHomeWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const homework = true;
            if (homework) {
                console.log('You do home work.');
                resolve('You completed your homework');
            } else {
                reject('you didnt complete homework.')
            }

        }, 1000);
    })

}

function play() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const play = true;
            if (play) {
                console.log('You play what you like.');
                resolve('You played what you like.');
            } else {
                reject('You didnt play');
            }
        }, 3000);
    })
}

takeShower()
    .then((result) => {
    console.log(result);
    return doHomeWork()
})
    .then((result) => {
    console.log(result);
    return play()
})
    .then((result) => {
    console.log(result);
    console.log('All done..');
}).catch((error)=>{
    console.log(error);
});