// @ts-check

const Node = require('./Node')

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

// 二叉搜索树
// 问题：取决于你添加的节点数，树的一边可能会非常深
// 优化：AVL树
class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  // 向BST插入一个键
  insert(key){
    if(this.root == null){
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key)
    }
  }

  // (辅助方法)插入一个节点
  insertNode(node, key){
    if(this.compareFn(key, node.key) === Compare.LESS_THAN){
      if(node.left == null){
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if(node.right == null){
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  // 中序遍历，可传回调函数
  inOrderTraverse(callback){
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback){
    if(node != null){
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  // 先序遍历
  preOrderTraverse(callback){
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback){
    if(node != null){
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  // 后序遍历
  postOrderTraverse(callback){
    this.preOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback){
    if(node != null){
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  // BST的最小节点
  min(){
    return this.minNode(this.root)
  }

  minNode(node){
    let current = node;
    while(current != null && current.left != null){
      current = current.left
    }
    return current
  }

  // BST的最大节点
  max(){
    return this.maxNode(this.root)
  }

  maxNode(node){
    let current = node;
    while(current != null && current.right != null){
      current = current.right
    }
    return current
  }

  // 在BST中搜索特定值是否存在？
  search(key){
    return this.searchNode(this.root, key)
  }

  searchNode(node, key){
    if(node == null){
      return false
    }
    if(this.compareFn(key, node.key) === Compare.LESS_THAN){
      return this.searchNode(node.left, key)
    } else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN){
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  // 移除一个节点
  remove(key){
    this.root = this.removeNode(this.root, key)
  }

  removeNode(node, key){
    if(node == null){
      return null
    }
    if(this.compareFn(key, node.key) === Compare.LESS_THAN){
      node.left = this.removeNode(node.left, key)
      return node
    } else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN){
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 移除叶节点
      if(node.left == null && node.right == null){
        node = null;
        return node
      }
      // 移除只有一个子节点
      if(node.left == null){
        node = node.right
        return node
      } else if(node.right == null){
        node = node.left
        return node
      }
      // 移除有两个子节点
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }

  compareFn(a, b){
    if(a === b){
      return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
  }
}

module.exports = BinarySearchTree