// 基于js对象的Stack类
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    // 插入
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // 大小
    size() {
        return this.count;
    }

    // 是否为空
    isEmpty() {
        return this.count === 0
    }

    // 弹出
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const res = this.items[this.count];
        delete this.items[this.count];
        return res;
    }

    // 查看栈顶
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1]
    }

    // 清空
    clear() {
        this.items = {}
        this.count = 0
    }

    // toString()
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[0]}`
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}

module.exports = Stack
