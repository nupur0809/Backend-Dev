function login(cb) {
    setTimeout(() => {
        console.log("login");
        cb();
    }, 1000);
}

function userDetail() {
    setTimeout(() => {
        console.log("userdetails");
    }, 1000);
}

login(userDetail);
