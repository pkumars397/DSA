 let mxl=[];
    mxl[0]=height[0]
    for(let j=1;j<height.length;j++){
        if(mxl[j-1]<height[j]){
            mxl[j]=height[j]
        }else{
            mxl[j]=mxl[j-1]
        }
    }