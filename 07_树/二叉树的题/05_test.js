function test(root){
    if(root == null){
        return true;
    }

    let queue = [];
    queue.push(root);

    let flag = false;

    while(queue){
        root = queue.shift();
        let left = root.left;
        let right = root.right;

        if((left == null && right != null)  ||  flag && (left != null || right != null)){
            return false;
        }

        if(left){
            queue.push(left)
        }
        if(right){
            queue.push(right)
        }

        if(left == null || right == null){
            flag = true
        }
    }
    return true;
}