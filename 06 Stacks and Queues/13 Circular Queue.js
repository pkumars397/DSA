var MyCircularQueue = function(k) {
    this.queue=new Array(k).fill(undefined);
    this.size=0;
    this.front=-1;
    this.rear=-1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.front==-1){
        this.front=0;
    }
    
    if(!this.isFull()){
        this.rear++;
        this.rear=this.rear%this.queue.length;
        this.queue[this.rear]=value;
        this.size++;
        return true;
    }
    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(!this.isEmpty()){
      this.front++;
      this.front=this.front%this.queue.length;
      this.size--;
      return true;
    }
    return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(!this.isEmpty()){
      return this.queue[this.front]
    }
    return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(!this.isEmpty()){
     return this.queue[this.rear]
    }
    return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.size==0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.size==this.queue.length;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */