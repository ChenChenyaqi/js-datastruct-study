// 1.第一种接口：给变量设置一个类型
interface Person{
  name: string;
  age: number;
}

function printName(person: Person){
  console.log(person.name);
}

const john = {name: 'John', age: 21};
const mary = {name: 'Mary', age:21, phone:'123-45678'}  // 鸭子类型
printName(john)
printName(mary)

// 2.第二种接口：类
interface Comparable{
  compareTo(b:MyObject): number
}

class MyObject implements Comparable{
  age: number;
  
  compareTo(b:MyObject): number{
    if(this.age === b.age){
      return 0
    }
    return this.age > b.age ? 1 : -1;
  }
}

// 泛型
interface Comparable2<T>{
  compareTo(b: T): number
}

class MyObject2 implements Comparable2<MyObject2>{
  age: number;
  
  compareTo(b: MyObject2): number{
    if(this.age === b.age){
      return 0
    }
    return this.age > b.age ? 1 : -1;
  }
}