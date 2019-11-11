// 数字枚举--数字枚举有反向映射
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
// console.log(Role.Reporter)
// console.log(Role)

// 字符串枚举--字符串枚举没有反向映射
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// 异构枚举--容易引起混淆，不建议使用
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员--枚举值定义后不能修改
// Role.Reporter = 0
enum Char {
  // const member 常量枚举--在编译的时候计算出结果
  a,
  b = Char.a,
  c = 1 + 3,
  // computed member 需要被计算的枚举成员--不会在编译阶段进行计算，在运行时环境才会计算
  d = Math.random(),
  e = '123'.length,
  f = 4 //在computed member后的成员，一定要有初始值
}

// 常量枚举--用const声明，会在编译阶段被移除，当不需要对象，而只需要值时，
const enum Month {
  Jan,
  Feb,
  Mar,
  Apr = Month.Mar + 1
  // May = () => 5
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型--枚举和枚举成员都可以作为单独的类型存在
enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
enum G {
  a = 'apple',
  b = 'banana'
}

let e: E = 3
let f: F = 3
// console.log(e === f) //两种不同类型的枚举，不能进行比较

let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3
// console.log(e1 === e2) //不能比较
// console.log(e1 === e3) //可以比较

//字符串枚举，取值只能是枚举成员的类型
let g1: G = G.a
let g2: G.a = G.a
