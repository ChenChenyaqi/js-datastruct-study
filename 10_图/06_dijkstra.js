

class Node{
    constructor(value){
        this.value = value;
        this.edges = [];
        this.nexts = [];
    }
}

class Edge{
    constructor(weight, from, to){
        this.weight = weight;
        this.from = from;
        this.to = to;
    }
}


class Heap {
    constructor(size) {
        // 所有的节点
        this.nodes = new Array(size)
        // 节点在堆中的位置
        this.nodeIndexMap = new Map();
        // head到节点的最短距离
        this.minDistanceMap = new Map();
        // 大小
        this.size = 0;
    }


    // 加入一个元素或更新一个元素的值或者忽略更新
    addOrUpdateOrIgnore(node, distance){
        if(this.isInHeap(node)){
            this.minDistanceMap.set(node, Math.min(distance, this.minDistanceMap.get(node)));
            this.heapInsert(this.minDistanceMap.get(node));
        }
        if(this.isFirstEnter(node)){
            this.nodes[this.size] = node;
            this.heapInsert(this.size);
            this.minDistanceMap.set(node, distance);
            this.nodeIndexMap.set(node, this.size);
            this.size++;
        }
    }


    // 是否第一次进入堆
    isFirstEnter(node){
        return !this.nodeIndexMap.has(node);
    }

    // 是否还在堆中
    isInHeap(node){
        return this.nodeIndexMap.has(node) && this.nodeIndexMap.get(node) != -1;
    }

    // 弹出堆顶
    pop(){
        let node = this.nodes[0];
        let distance = this.minDistanceMap.get(node);

        this.swap(0, this.size - 1);
        this.size--;
        this.heapfiy(0);
        this.nodeIndexMap.set(node, -1);
        this.minDistanceMap.delete(node);

        return {
            node,
            distance
        }
    }


    // 从index位置开始，向下堆化
    heapfiy(index) {
        let left = index * 2 + 1;
        while (left < this.size) {
            let largest = left + 1 < this.size
                &&
                this.minDistanceMap.get(this.nodes[left + 1]) < this.minDistanceMap.get(this.nodes[left])
                ? left + 1 : left;
            largest = this.minDistanceMap.get(this.nodes[largest]) < this.minDistanceMap.get(this.nodes[index]) ? largest : index;
            if(largest === index){
                break
            }
            this.swap(largest, index);
            index = largest;
            left = index * 2 + 1;
        }
    }


    // 在index位置插入新的节点
    heapInsert(index) {
        this.size++;
        while (!this.nodes[Math.floor((index - 1) / 2)] || this.minDistanceMap.get(this.nodes[index]) < this.minDistanceMap.get(this.nodes[Math.floor((index - 1) / 2)])) {
            this.swap(index, Math.floor((index - 1) / 2));
            index = Math.floor((index - 1) / 2);
        }
    }


    // 交换
    swap(i, j) {
        this.nodeIndexMap.set(this.nodes[i], j);
        this.nodeIndexMap.set(this.nodes[j], i);
        let t = this.nodes[i];
        this.nodes[i] = this.nodes[j];
        this.nodes[j] = t;
    }

    // 是否为空
    isEmpty(){
        return this.size === 0;
    }
}



let head = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let edge1 = new Edge(100, head, node2);
let edge2 = new Edge(1, head, node3);
let edge3 = new Edge(10, head, node4);
let edge4 = new Edge(999, node2, node5);
let edge5 = new Edge(3, node2, node6);
let edge6 = new Edge(50, node3, node6);
let edge7 = new Edge(9, node4, node3);
let edge8 = new Edge(2, node4, node6);
let edge9 = new Edge(999, node6, node5);
head.edges.push(edge1, edge2, edge3);
node2.edges.push(edge4, edge5);
node3.edges.push(edge6);
node4.edges.push(edge7, edge8);
node6.edges.push(edge9);

head.nexts.push(node2, node3, node4);
node2.nexts.push(node5, node6);
node3.nexts.push(node6);
node4.nexts.push(node3, node6);
node6.nexts.push(node5);


let res = dijkstra(head, 6);
console.log(res);

function dijkstra(head, size){
    let heap = new Heap(size);
    heap.addOrUpdateOrIgnore(head, 0);
    let res = new Map();
    while(!heap.isEmpty()){
        let {node, distance} = heap.pop();
        for(let i = 0; i < node.edges.length; i++){
            heap.addOrUpdateOrIgnore(node.edges[i].to, distance + node.edges[i].weight);
        }
        res.set(node, distance);
    }
    return res;
}