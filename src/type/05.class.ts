// #3 抽象类--抽离出代码的共性，有利于复用和扩展
// 1. 抽象类不能被实例化
// 2. 抽象类可以实现多态，在父类中定义一个抽象方法，在多个子类中定义多个实现，在程序运行时，会根据不同的对象执行不同的操作，实现运行时的绑定。
abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void
}
// let animal = new Animal()

// #1 类：
// 1.“类的成员属性”都是实例属性，而不是原型属性，“类的成员方法”都是“原型”方法。
// 2.实例的属性，必须有初始值，或者在构造函数中被初始化

// 类修饰符
// 1. public: 所有人可见，默认都是public。
// 2. private: 只能被类本身调用，不能被类的实例调用，也不能被子类调用。如果给类的constructor构造函数添加 private 修饰符，那么该类将既不能实例化，也不能被继承。
// 3. protected: 只能在类或类的子类中调用，不能被类的实例访问。如果给类的constructor构造函数添加 protected 修饰符，那么该类不能被实例化，只能被继承，可以用来声明基类。
// 4. readonly: 只读，只读属性一定要被初始化，不能被修改。
// 5. static: 静态属性，只能通过类或子类的类名来调用，不能被实例调用。
// 6. 除了类的成员可以添加修饰符之外，类的构造函数constructor的参数也可以添加修饰符，这时该参数将自动变成实例的属性。

class Dog extends Animal {
  constructor(name: string) {
    super()
    this.name = name
    this.pri()
  }
  public name: string = 'dog'
  run() {}
  private pri() {}
  protected pro() {}
  readonly legs: number = 4
  static food: string = 'bones'
  sleep() {
    console.log('Dog sleep')
  }
}
// console.log(Dog.prototype)
let dog = new Dog('wangwang')
// console.log(dog)
// dog.pri()
// dog.pro()
console.log(Dog.food)
dog.eat()

// #2 类继承
// 1. es规定派生类的构造函数中必须包含“super”调用，super表示父类的实例；
// 2. this一定要在super调用之后再调用
class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    // this.color = color // 由于constructor的color参数有修饰符，所以这里也不需要赋值了
    // this.pri()
    this.pro()
  }
  // color: string // 由于constructor的color参数有修饰符，所以这里不需要再声明了
}
console.log(Husky.food)

// #4 多态
class Cat extends Animal {
  sleep() {
    console.log('Cat sleep')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog, cat]
animals.forEach(i => {
  i.sleep()
})

// #5 this类型--类的成员方法直接返回this，实现链式调用。
class Workflow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new Workflow().step1().step2()

//在继承的时候，this类型也可以表现出多态，这里的多态是指这时this既可以是父类型，也可以是子类型--本质就是原型链
class MyFlow extends Workflow {
  next() {
    return this
  }
}
new MyFlow()
  .next()
  .step1()
  .next()
  .step2()
