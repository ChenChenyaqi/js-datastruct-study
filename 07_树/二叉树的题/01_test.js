// BFS
function bfs(root) {
    let res = [];
    let queue = [];
    queue.push(root);
    while (queue) {
        let size = queue.length;
        let tempArr = [];
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            tempArr.push(node);
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        res.push(tempArr);
    }
}

function bfsRes(root) {

    function process(root, arr, level) {
        if (root == null) {
            return;
        }
        if (arr[level] == undefined) {
            arr[level] = [];
        }
        arr[level].push(root);
        process(root.left, arr, level + 1);
        process(root.right, arr, level + 1);

    }

    let arr = [];
    process(root, arr, 0)
    return arr;
}