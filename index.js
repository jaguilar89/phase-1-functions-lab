// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    if (street > 42) {
        return street - 42;
    }
    return 42 - street;
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
};

function distanceTravelledInFeet(origin, destination) {
    if (origin > destination) {
        return (origin - destination) * 264;
    }
    return (destination - origin) * 264;
}

function calculatesFarePrice(origin, destination) {
    let distance = distanceTravelledInFeet(origin, destination)
    let farePrice;

    if (distance <= 400) {
        farePrice = 0;
    } else if (distance >= 400 && distance <= 2000) {
        farePrice = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        farePrice = 25;
    } else if (distance > 2500) {
        return 'cannot travel that far'
    }
    return farePrice;
}