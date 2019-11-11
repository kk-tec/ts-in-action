//#1 定义接口--对象类型接口
interface List {
  readonly id: number //只读属性
  name: string
  // [x: string]: any; //字符串索引签名，这样就可以支持多个属性了
  age?: number //可选属性
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++ //只读属性，不允许修改
  })
}
let result = {
  data: [{ id: 1, name: 'A', sex: 'male' }, { id: 2, name: 'B', age: 10 }]
}
render(result)

//类型断言
//1.
render({
  data: [{ id: 1, name: 'A', sex: 'male' }, { id: 2, name: 'B', age: 10 }]
} as Result)
//2.
render(<Result>{
  data: [{ id: 1, name: 'A', sex: 'male' }, { id: 2, name: 'B', age: 10 }]
})

interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['a', 'b']

interface Names {
  [x: string]: any //字符串索引签名
  // y: number;
  [z: number]: number //数字索引签名，数字索引签名的返回值，一定要是字符串索引签名返回值的子类型，即number是any的子类型
}

//#2 定义接口--函数类型接口
//1.
// let add: (x: number, y: number) => number
//2.
// interface Add {
//     (x: number, y: number): number
// }
//3.使用type关键字
type Add = (x: number, y: number) => number
let myAdd: Add = (a: number, b: number) => a + b

//#3 混合类型接口
interface Lib {
  (): void //是一个函数，没有返回值，也没有参数
  version: string
  doSomething(): void
}

function getLib() {
  let lib = (() => {}) as Lib
  lib.version = '1.0.0'
  lib.doSomething = () => {}
  return lib
}
let lib1 = getLib()
lib1()
let lib2 = getLib()
lib2.doSomething()
