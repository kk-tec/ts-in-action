// #1 接口--一个接口可以约束类成员有哪些属性，以及它们的类型
interface Human {
  //   new (name: string); // error
  name: string
  eat(): void
}

// 实现接口
// 1. 类实现接口的时候，必须实现接口中声明的所有属性
// 2. 接口只能约束类的公有成员
// 3. 接口不能约束类的构造函数--因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {}
  age: number = 0
  sleep() {}
}

// #2 接口继承
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

// #3 接口继承类--相当于接口把类的成员都抽象了出来
// 1. 接口在抽离类的成员的时候，不仅抽离了类的公共成员，而且抽离了私有成员和受保护成员
class Auto {
  state = 1
  //   private state2 = 1
}
interface AutoInterface extends Auto {}
class C implements AutoInterface {
  state = 1
}
// Auto 的子类也可以实现 AutoInterface，这里不再需要添加state属性，因为已经继承了Auto的state属性
class Bus extends Auto implements AutoInterface {}
