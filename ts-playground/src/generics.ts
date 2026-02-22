function identity<T>(arg: T): T {
    return arg
}

let num = identity<number>(42)
console.log(num)
// 文字列を渡す
let str = identity<string>("Hello, TypeScript")
console.log(str)

