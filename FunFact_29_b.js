const giantFunction = async function () {
    let v = 10;
    let newV = new Promise((resolve) => {
        setTimeout(function () {
            let new_v = 13;
            resolve(new_v);
        }, 2000)
    });
    v = await newV;

    // do something with new v
    let w = v * 10;

    // return result
    return w;
}

giantFunction().then(res => console.log(res));
// O.P: 130 (after 2sec)