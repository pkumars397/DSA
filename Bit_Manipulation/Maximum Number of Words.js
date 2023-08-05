var mostWordsFound = function(sentences) {
    var max=0;
    for(var i=0;i<sentences.length;i++){
        var count=0;
        for(var j=0;j<sentences[i].length;j++){
            if(sentences[i][j]==" "){
                count++
            }
            max=Math.max(max,count);
        }

    }
    return max+1;
};

sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(mostWordsFound(sentences))