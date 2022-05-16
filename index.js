function distanceFromHqInBlocks(blocks){
    return Math.abs(42 - blocks)
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400 ){
        return 0
    }
else if (distance < 2000 && distance > 400) {
    return distance * .02
}
else if (distance > 2000 && distance < 2500) {
    return 25
}
else {
    return 'Cannot travel that far.'
}

}

