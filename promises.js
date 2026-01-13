function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login");
            resolve();
        }, 2000);
    });
}

function userDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("userdetails");
            resolve();
        }, 1000);
    });
}
login().then(()=>{return userDetai()})
       .then(()=>{
        console.log('all task done')
       })
