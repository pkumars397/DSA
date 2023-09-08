function permutation(str, fi) {

    if (fi === str.length - 1) {
   
     console.log(str.join(""));
   
     return;
   
    }
   
     
   
    for (let i = fi; i < str.length; i++) {
   
     // Swap characters at positions i and fi
   
     [str[i], str[fi]] = [str[fi], str[i]];
   
      
   
     // Recursively generate permutations
   
     permutation(str, fi + 1);
   
      
   
     // Swap the characters back to their original positions
   
     [str[i], str[fi]] = [str[fi], str[i]];
   
    }
   
   }
   
   let str=["a","b","c"]
   
   permutation(str, 0);