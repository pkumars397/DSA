var MyStack = function() {
    this.q1=[];
    this.q2=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
    return null;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.q1.length>1){
        this.q2.push(this.q1.shift())
    }
    let l=this.q1.shift();
    while(this.q2.length>0){
        this.q1.push(this.q2.shift())
    }
    return l;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    while(this.q1.length>1){
        this.q2.push(this.q1.shift())
    }
    let top=this.q1[0];
    this.q2.push(this.q1.shift())
    while(this.q2.length>0){
        this.q1.push(this.q2.shift())
    }
    return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length===0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 **/