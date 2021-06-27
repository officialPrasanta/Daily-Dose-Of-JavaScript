//Check if mobile device or not

if (/Android|iPhone|BlackBerry|Opera Mini/i.test(navigator.userAgent)) {
    document.write("mobile device");
}

else {
    document.write("not mobile device");
}