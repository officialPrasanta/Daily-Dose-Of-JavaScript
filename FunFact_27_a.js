// var vs let
// wrong approach

const numAtInterval = function () {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }


}

numAtInterval();