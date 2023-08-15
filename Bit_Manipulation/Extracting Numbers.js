// var extract_number = function(s) {
//     var a=[];
//     for(var i=0;i<s.length;){
//         if(s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57){
//            var j=i;
//            while(j<s.length && s.charCodeAt(j)>=48 && s.charCodeAt(j)<=57){
//                j++;
//            }

//            a.push(parseInt(s.substring(i,j )));

//            i=j;

//          }
//          else{
//              i=i+1;
//         }

//     }
//     return a;

// };

var extract_number = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      map.set(i, s[i]);
    }
  }
  var s = "";
  for (val of map.values()) {
    s += val;
  }
  return s;
};

let s = "hsleo469dj4e";
console.log(extract_number(s));
