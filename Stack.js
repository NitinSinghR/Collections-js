class Node
{
    data;
    nextNode;
	constructor(value)
	{
		this.data=value;
	}
}

class Stack
{
	push(value)
	{
        if (this.rootNode == null) {
            this.rootNode = new Node(value)
            this.count++;
        } else {
            var temp = this.rootNode;
            while (temp.nextNode != null) {
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
            this.count++;
	    }
    }
	isEmpty()
	{
		return this.rootNode == null;
	}
	pop() 
	{
        var temp=this.rootNode;
        var previousNode;
		while (temp.nextNode != null) {
            previousNode=temp;
            temp = temp.nextNode;
        }
        previousNode.nextNode=null;
        this.count--;
	}
	peek()
    {
        if (!this.isEmpty()) {
            var temp=this.rootNode;
		while (temp.nextNode != null) {
            temp = temp.nextNode;
        }
            return temp.data;
        }
        else {
            console.log("No elements in Stack");
            return -1;
        }
    }
	display()
	{
		if (this.rootNode == null) {
			console.log("No elements in Stack");
			
		}
		else {
			let temp = this.rootNode;
			while (temp != null) {
				console.log(temp.data);
				temp = temp.nextNode;
			}
		}
	}
}

var obj = new Stack();

console.log("After pushing ");
obj.push(11);
obj.push(22);
obj.push(33);
obj.push(44);
obj.display();

console.log("After popping ");
obj.pop();
obj.pop();

obj.display();

console.log("peeking on top element " + obj.peek());