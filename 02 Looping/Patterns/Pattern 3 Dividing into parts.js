for(var i=1;i<=5;i++){
    var str="";
    for(var j=10;j<=9+i;j++){
        str+="*";
    }
    for(var j=10;j<=14-i;j++){
        str+=" ";
    }
    for(var j=10;j<=9+i;j++){
        str+="*";
    }
    console.log(str);
}

//  using formula ylast=i*slope+c;
