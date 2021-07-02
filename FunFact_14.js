const randomXORShift = () => {
    let seed = new Date();
    let x0 = seed.getTime();

    x0 ^= x0 << 13;
    x0 ^= x0 >> 7;
    x0 ^= x0 << 17;
    console.log('Random Number(16-bit):', (x0 & 0xFFFF));

}
randomXORShift();