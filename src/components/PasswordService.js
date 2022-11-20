export class PasswordService {
    static getRandomLowerCase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    static getRandomUpperCase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    static getRandomNumbers() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    static getRandomSymbols() {
        let symbolStr = `!@#$%^&*(){}[]/`;
        return symbolStr[Math.floor(Math.random() * symbolStr.length)];
    }
}