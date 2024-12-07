import * as fs from 'fs';
// npm install --save-dev @types/node
let logCounter = 1;

function greetUser(): void {
    console.log("Hello! I'm your FunnyHelper.ts, and I'm here to lift your inspiration (and possibly ruin your productivity).");
}

function tellJoke(): string {
    const jokes: string[] = [
        "Why are programmers never lonely? They always have their classes!",
        "What do you call a programmer's dog? GetTerrier!",
        "What does a JS programmer say after falling down the stairs? 'It's not a bug, it's a feature!'",
        "Why do Java developers drink a lot of coffee? Because they can't work without the Coffee class.",
        "Why did the algorithm get stuck at work? Because it couldn't finish the loop!",
        "Why do Java programmers wear glasses? Because they can't see C#!"
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)]; // Сохраняем выбранную шутку
    console.log("Here's a joke for you: " + joke);
    return joke; // Возвращаем выбранную шутку
}

function writeToLog(joke: string): void {
    fs.appendFileSync('funny_log.txt', `${logCounter}. ${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()} \nTypescript FunnyHelper was run and told this joke: ${joke}\n`);
    logCounter++; // Увеличиваем счетчик после записи
}

function main(): void {
    greetUser();
    setTimeout(() => {
        const joke = tellJoke(); // Получаем шутку
        writeToLog(joke); // Записываем в лог и обновляем счетчик
    }, 1000); // Задержка 1 секунда
}

main();
