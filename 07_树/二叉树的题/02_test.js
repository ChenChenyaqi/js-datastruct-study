// 先序遍历
function pre(root) {
    let stack = [];
    stack.push(root);
    while (stack) {
        let node = stack.pop();
        console.log(node);
        if (node.right) {
            stack.push(node.right)
        }
        if (node.left) {
            stack.push(node.left)
        }
    }
}


// 后序
function pos(root){
    let stack1 = [];
    let stack2 = [];
    stack1.push(root);
    while(stack1){
        let node = stack1.pop();
        stack2.push(node);
        if(node.left){
            stack1.push(node.left);
        }
        if (node.right) {
            stack1.push(node.right)
        }
    }
    while(stack2){
        let node = stack2.pop()
        console.log(node);
    }
}



// 中序遍历
function inOrder(root){
    let stack = [];
    while(stack || root){
        if(root){
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop();
            console.log(node);
            root = root.right
        }
    }
}