// Code your solution in this file!
const hq = 42;
const hqFeet = 42 * 264;
let client;
let clientFeet;
let distance;
let distanceInFeet;
let distanceTravelled;
let fareTravelled;

function distanceFromHqInBlocks(client){
    distance = client - hq;
    return Math.abs(distance);
};

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(clientFeet){
    distanceInFeet = (clientFeet * 264) - hqFeet;
    return Math.abs(distanceInFeet);
};

distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(a, b){
    distanceTravelled = (a - b) * 264;
    return Math.abs(distanceTravelled)
};

distanceTravelledInFeet(43, 42);
distanceTravelledInFeet(50, 42);
distanceTravelledInFeet(34, 42);

function calculatesFarePrice(c, d) {
    fareTravelled = Math.abs((c - d) * 264)
    if (fareTravelled < 400) {
        return 0;
    }
    else if (fareTravelled > 400 && fareTravelled < 2000) {
        return Math.abs((fareTravelled - 400) * 0.02);
    }
    else if (fareTravelled > 2000 && fareTravelled < 2500) {
        return 25;
    }
    else if (fareTravelled > 2500) {
        return 'cannot travel that far';
    };
}

/*function calculatesFarePrice(c, d) {
    if ((c * 264) - (d * 264) < 400) {
        return 0;
    }
    else if((c * 264) - (d * 264) > 400 && (c * 264) - (d * 264) < 2000) {
        return Math.abs(((c - d)*264) - 400 ) * 0.02;
    }
    else if(Math.abs((c - d * 264) > 2000 && (c - d * 264) < 2500)) {
        return 25;
        
    }
    else if (Math.abs((c * 264) - (d * 264)) > 2500) {
        return 'cannot travel that far';
    };

};*/

calculatesFarePrice(43, 44);
calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);


