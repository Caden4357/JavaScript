const noMondays = new Promise((resolve, reject) => {
    if (new Date().getDay() == 3) {
        resolve({ messageOne: "Its Tuesday!", messageTwo: "This is message two" });
    } else {
        reject({ messageOne: "Clubs not going up :( !", messageTwo: "This is message two " });
    }
});
noMondays
    .then(res => console.log(res))
    .catch(err => console.log(err));


// function tossCoin() {
//     return Math.random() > 0.5 ? "heads" : "tails";
// }

// function fiveHeads() {
//     return new Promise((resolve, reject) => {
//         let headsCount = 0;
//         let attempts = 0;
//         let maxAttempts = 30

//         while(headsCount < 5) {
//             attempts++;
//             let result = tossCoin();
//             console.log(`${result} was flipped`);
//             if(result === "heads") {
//                 headsCount++;
//             } else {
//                 headsCount = 0;
//             }
//         }
//         if (attempts<=maxAttempts){

//             resolve(`It took ${attempts} tries to flip five "heads You won!"`)
//         }
//         else{
//             reject("You suck")
//         }
//     });
// }
// fiveHeads()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// console.log("When does this run now?");
// const count = () => {
//     for (i = 1; i <= 10; i ++){
//         console.log(i);
//     }
// }
// count()

// function tossCoin() {
//     return Math.random() > 0.5 ? "heads" : "tails";
// }

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );

// function doSomething(searchQuery){
//     return new Promise((resolve, reject) => {
//         if(searchQuery === 'Google'){
//             resolve('Hello from Google!')
//         }
//         else{
//             reject('We can only talk to Google')
//         }
//     })
// }


// doSomething('Amazon')
//     .then((message) => console.log(message))
//     .catch((message) => console.log(message))



function processVideo(video) {  
    return new Promise((resolve,reject) => {
        if (video.fileSize < 10000){
            setTimeout(()=> {
                resolve('Finished processing video')
            }, 3000)
        }
        else if(video.fileSize > 10000){
            reject('video is to large')
        }
    })
}
function processPhoto(photo) {  
    return new Promise((resolve,reject) => {
        if(photo.fileSize > 5000){
            reject('file is to large')
        }
        else if(photo.fileSize < 500){
            setTimeout(()=>{
                resolve('Image processed')

            },1000)
        }
    })
}
// Promise.all([processPhoto(), processVideo()]).then((messages) => console.log(messages))
// processVideo()
//     .then((message)=>console.log(message))
//     .catch((err) => console.log(err))

// processPhoto()
//     .then((message)=>console.log(message))
//     .catch((err) => console.log(err))

const video = {
    fileSize: 5000,
    videoName:'Large video'
}
const photo = {
    fileSize: 10,
    videoName:'cat-meme.jpg'
}
const doProcessing = async () => {
    try{
        const photoResponse = await(processPhoto(photo))
        console.log(photoResponse)
        const videoResponse = await(processVideo(video));
        console.log(videoResponse)

    }
    catch(err){
        console.log(err);
    }

}

doProcessing()
console.log('Hello');
function loop(arr) {  
    arr.forEach(element => {
        console.log(element);
    });
}

loop([1,2,3,4,5,6,7,8,9,10])