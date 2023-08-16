var isValid = function (s) {
  //Method 1

  //   var rev='';
  //   for(var i=s.length-1;i>=0;i--){
  //       rev+=s[i];
  //   }
  //   if(rev===s){
  //       return true;
  //   }
  //     return false;

  //Method 2

  // var rev = s.split("").reverse().join("");
  // if (rev == s) {
  //   return true;
  // }
  // return false;
  // return rev;

  // Method 3

  let rev = s.split("");
  const l = s.length;
  let res = [];
  for (let i = 0; i < l; i++) {
    res.push(rev.pop());
  }
  if (res.join("") == s) {
    return true;
  }
  return false;
};
let s = "madama";
console.log(isValid(s));
