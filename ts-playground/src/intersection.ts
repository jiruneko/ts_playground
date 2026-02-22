import { log } from "node:console";

type User2 = {
    name: string;
    age: number;
}

type Contact = {
    email: string;
    phone: string;
}

type UserProfile = User2 & Contact;

const user: UserProfile = {
    name: "田中太郎",
    age: 30,
    email: "taro@example.com",
    phone: "090-1234-5678"
};

console.log(user);
