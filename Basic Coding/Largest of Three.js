function largest(a, b, c) {
    if(a>b && a>>c){
        console.log(a)
    }else if(b>a & b>>c){
        console.log(b)
    }else{
        console.log(c)
    }
}

var a = 3, b = 5, c = 6
largest(a,b,c)