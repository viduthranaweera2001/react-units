function takeShower() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shower = true;
            if (shower) {
                console.log("You take shower..");
                resolve('You took shower');
            } else {
                reject('You didnt do shower');
            }
        }, 3000);
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

        }, 5000);
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
        }, 1000);
    })
}

async function doAll(){
    try{
        await takeShower();
        await doHomeWork();
        await play();
    }catch (error){
        console.log(error);
    }

}

doAll();