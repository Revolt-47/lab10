function task2(a,b,z){
    var x=0;
    for(let i=1;i<z;i++){
        if(i%a==0 || i%b==0){
            x+=i;
        }
    }
    return x;
}

module.exports = task2;