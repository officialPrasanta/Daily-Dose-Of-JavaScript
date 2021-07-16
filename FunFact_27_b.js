// var vs let

// correct approach
const numAtInterval2 = function () {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }


}

numAtInterval2();
