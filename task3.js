
function power (a,b){
    var x =a;
    for(let i=1;i<b;i++)
    {
        x = x*a;
    }
    return x;
}

function round (a){
return Math.round(a);
}

function cieling(a){
    return Math.ceil(a);
}

module.exports = {
    power : power,
    round : round,
    cieling : cieling,
}