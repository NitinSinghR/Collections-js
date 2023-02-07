class Node {
    data;
    nextNode;    
    constructor(value) {
        this.data = value
    }
}

class LinkedList {
    rootNode = null;
    count = 0;
    addElement(value) {
        if(this.rootNode == null){
            this.rootNode= new Node(value)
            this.count++;
        }else{
            var temp = this.rootNode;
            while(temp.nextNode != null){
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
            this.count++;
        }
    }

    addElements(value, index) {
        var temp=this.rootNode;
        var count=0;
        var previousNode;
        var node=new Node(value);
        
            while(count<index-1){
                previousNode=temp;
                temp = temp.nextNode;
                count++;
            }
            node.nextNode=temp;
            previousNode.nextNode=node;
            this.count++;

    }

    removeElement(index) {
        var temp=this.rootNode;
        var count=0;
        var next=temp.nextNode;
        while(count+1<index){
            temp = temp.nextNode;
            next=next.nextNode;
            count++;
                
        }
            temp.nextNode = next.nextNode;
            this.count--;
    }

    printElements() {
        var temp = this.rootNode;
        if(temp == null){
            console.log("Is empty!")
        }else{
        while(temp != null ){
            console.log(temp.data)
            temp = temp.nextNode;
        }
    }
    }
}


var list = new LinkedList();

list.addElement(1);
list.addElement(2);
list.addElement(5);
list.addElement(7);
list.addElements(3,3);
list.printElements();
console.log("Removing a element");
list.removeElement(4);
list.printElements();