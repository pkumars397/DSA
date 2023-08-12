class count_objects
{
    //Write the code here
  static i=0;
  constructor(){
  count_objects.i+=1
  }
}

var o1 = new count_objects();
var o2 = new count_objects();
var o3 = new count_objects();
console.log(count_objects.i);
var o4 = new count_objects();
console.log(count_objects.i)