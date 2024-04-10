function hello(name){
    return(`hello ${name}`);
}

function squareFeetToAcres(squareFeet) {
    const acres = squareFeet / 43560;
    return acres;
}

function mowingTime(width, length, squareMetresPerMinute) {
    const totalSquareMetres = width * length;
    const minutes = totalSquareMetres / squareMetresPerMinute;
    return minutes;
}

export {hello, squareFeetToAcres, mowingTime };