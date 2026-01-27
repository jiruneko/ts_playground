import { log } from "node:console"

let isDone: boolean = false
let count: number = 10
let name: string = "TypeScript"

function greet(name: string): string {
    return "Hello, " + name
}

console.log(greet("World???"))
