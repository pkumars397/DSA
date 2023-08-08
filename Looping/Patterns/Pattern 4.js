for(var i=0;i<=4;i++){
    var str="";
    for(var j=0;j<=4-i;j++){
        str+="*";
    }
    for(var j=0;j<=2*i-1;j++){
        str+=" "
    }
    for(var j=0;j<=4-i;j++){
        str+="*";
    }
console.log(str);
}

// try this