var MinStack = function() {
    this.stack=[];
};

/** 
 * @param {string} val
 * @return {string}
 */
MinStack.prototype.push = function(val) {
    if(this.stack.length==0){
        this.stack.push({val:val,min:val})
    }else{
        var min=Math.min(this.stack[this.stack.length-1].min,val)
        this.stack.push({val:val,min:min})
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if(this.stack.length){
      this.stack.pop();
  }
};
/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length!=0){
        return this.stack[this.stack.length-1].val
    }
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length){
        return this.stack[this.stack.length-1].min;
    }
    return null;
};
