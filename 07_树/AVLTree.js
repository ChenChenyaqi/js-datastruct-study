// @ts-check
const BinarySearchTree = require('./BinarySearchTree')
const Node = require('./Node')

// 平衡因子的数值常量
const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};


// AVL树
// 任何一个节点左右两侧子树的高度之差最多为1
class AVLTree extends BinarySearchTree {
  constructor() {
    super()
    this.root = null
  }

  // 计算一个节点的高度
  getNodeHeight(node) {
    if (node == null) {
      return -1
    }

    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
  }

  // 计算一个节点的平衡因子，该节点的 左子树高度 - 右子树高度
  // 返回此子树的平衡因子常数
  getBalanceFactor(node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
      default:
        return BalanceFactor.BALANCED
    }
  }

  // LL 向 右 单旋转，左子树 更重, 把右子节点给node
  rotationLL(node){
    const temp = node.left
    node.left = temp.right
    temp.right = node
    return temp
  }

  // RR 向 左 单旋转，右子树 更重，把左子节点给node
  rotationRR(node){
    const temp = node.right
    node.right = temp.left
    temp.left = node
    return temp
  }

  // LR 向 右 双旋转，先 RR 后 LL
  rotationLR(node){
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }

  // RL 向 左 双旋转，先 LL 后 RR
  rotationRL(node){
    node.right = this.rotationLL(node.right)
    return this.rotationRR(node)
  }

  // 重写insert方法
  insert(key){
    this.root = this.insertNode(this.root, key)
  }
  insertNode(node, key){
    // 像在 BST 中插入节点一样
    if(node == null){
      return new Node(key)
    } else if(this.compareFn(key, node.key) === Compare.LESS_THAN){
      node.left = this.insertNode(node.left, key)
    } else if(this.compareFn(key, node.key) === Compare.BIGGER_THAN){
      node.right = this.insertNode(node.right, key)
    } else {
      // 重复的键不插入
      return node
    }
    // 如果需要，将树进行平衡操作
    const balanceFactor = this.getBalanceFactor(node)
    // 如果是 左边 重
    if(balanceFactor === BalanceFactor.UNBALANCED_LEFT){
      // 判断 新插入的节点 是插入了node.left的左边 还是 右边
      if(this.compareFn(key, node.left.key) === Compare.LESS_THAN){
        // 左边 就直接 向右 单旋转
        this.rotationLL(node)
      } else {
        // 右边 向右 双旋转
        this.rotationLR(node)
      }
    }
    // 如果是 右边 重
    if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT){
      // 判断 新插入的节点 是插入了node.right的左边 还是 右边
      if(this.compareFn(key, node.right.key) === Compare.BIGGER_THAN){
        // 右边 就直接 向左 单旋转
        this.rotationRR(node)
      } else {
        // 左边 向左 双旋转
        this.rotationRL(node)
      }
    } 
    return node
  }

  // 重写remove方法
  remove(key){
    this.root = this.removeNode(this.root, key)
  }
  removeNode(node, key){
    node = super.removeNode(node, key)
    // node 为 null 不需要平衡
    if(node == null){
      return node
    }

    // 检测树是否需要平衡
    const balanceFactor = this.getBalanceFactor(node)

    // 如果node 左边 重
    if(balanceFactor === BalanceFactor.UNBALANCED_LEFT){
      // 得到 node.left 的平衡因子
      const balanceFactorLeft = this.getBalanceFactor(node.left)
      if(balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
        return this.rotationLL(node)
      }
      if(balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
        return this.rotationLR(node.left)
      }
    }
    // 如果node 右边 重
    if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT){
      // 得到 node.right 的平衡因子
      const balanceFactorRight = this.getBalanceFactor(node.right)
      if(balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
        return this.rotationRR(node)
      }
      if(balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
        return this.rotationRL(node.right)
      }
    }
    return node
  }


}