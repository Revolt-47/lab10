function find(a){
    var x = [1,2,4,5,6,3,7,7,9,10,11,12,13,14,15,16,17,18,19,20];
    for(let i=0;i<x.length;i++)
    {
        if(x[i]==a)
        return true;
    }
    return false;
}

module.exports = find;