function identity(arg) {
    return arg;
}
var num = identity(42);
console.log(num);
// 文字列を渡す
var str = identity("Hello, TypeScript");
console.log(str);
