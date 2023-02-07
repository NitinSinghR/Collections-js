class Node
{
    data;
    nextNode;
	constructor(value)
	{
		this.data = value;
	}
}

class Queue{
    push(value)
	{
        if (this.rootNode == null) {
            this.rootNode = new Node(value)
            this.count++;
        } else {
            let temp = this.rootNode;
            while (temp.nextNode != null) {
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
            this.count++;
	    }
    }

    pop() 
	{
        let temp=this.rootNode;
        temp=temp.nextNode;
        this.rootNode=temp;
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

let obj=new Queue();

console.log("Pushing elemnts");
obj.push(5);
obj.push(6);
obj.push(8);
obj.display();
console.log("After removing");
obj.pop();
obj.display();