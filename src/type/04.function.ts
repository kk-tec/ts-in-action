// 函数定义
function add1(x: number, y: number) {
  return x + y
}

// 函数类型定义
let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
  (x: number, y: number): number
}

// add1(1, 2, 3)

// 可选参数必须位于必选参数之后
function add5(x: number, y?: number) {
  return y ? x + y : x
}
add5(1)

function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
add6(1, undefined, 3) //在必选参数前，可选参数是不能省略的，必须明确传入undefined来获取它的默认值

// 剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
add7(1, 2, 3, 4, 5)

// 函数重载--在静态语言中，表示两个函数，名称相同，参数类型或个数不同；在ts中需要先定义多个函数声明，然后实现一个最宽泛的函数
function add8(...rest: number[]): number //从上往下挨个匹配，所以我们要把最容易匹配的声明放在最前面
function add8(...rest: string[]): string
function add8(...rest: any[]) {
  let first = rest[0]
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
  if (typeof first === 'string') {
    return rest.join('')
  }
}
console.log(add8(1, 2))
console.log(add8('a', 'b', 'c'))
