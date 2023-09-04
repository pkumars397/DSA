function max(matrix){
    let maxL=matrix[0][0]
    let maxR=matrix[0][matrix[0].length-1];
    for(let i=0;i<matrix.length;i++){
        maxL=Math.max(maxL,matrix[i][i]);
        maxR=Math.max(maxR,matrix[i][matrix[i].length-i-1])
    }
    return [maxL,maxR]
    }
    let matrix=[[1,2,3],[3,4,5],[5,6,7]];
    console.log(max(matrix))
    