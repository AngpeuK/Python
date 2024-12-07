import fs from 'fs';

let logCounter = 1;  // Изначально номер будет 1

// Функция для чтения последнего номера из лога
function readLogCounter(): number {
    try {
        const logFile = fs.readFileSync('funny_log.txt', 'utf-8');
        const lines = logFile.split('\n');

        for (let i = lines.length - 1; i >= 0; i--) {
            const line = lines[i].trim();
            if (line && line.includes('.')) {  // Проверяем, что строка непустая и содержит точку
                const match = line.match(/^(\d+)\./);  // Ищем номер до точки
                if (match) {
                    return parseInt(match[1], 10) + 1;  // Возвращаем следующий номер
                }
            }
        }
    } catch (err) {
        console.error('Error reading log file:', err);
    }

    return 1;  // Если файл пустой или нет корректных строк, начинаем с 1
}

// Функция для записи в лог
function writeToLog(joke: string, counter: number): number {
    const logMessage = `${counter}. ${new Date().toLocaleTimeString()} (${new Date().toLocaleDateString()}) \nFunnyHelper was run and told this joke: ${joke}\n`;

    console.log('Writing log:', logMessage);  // Логируем записываемое сообщение
    fs.appendFileSync('funny_log.txt', logMessage);
    return counter + 1;  // Увеличиваем счетчик после записи
}

// Функция для получения шутки
function tellJoke(): string {
    const jokes = [
        "Why are programmers never lonely? They always have their classes!",
        "What do you call a programmer's dog? GetTerrier!",
        "What does a JS programmer say after falling down the stairs? 'It's not a bug, it's a feature!'",
        "Why do Java developers drink a lot of coffee? Because they can't work without the Coffee class.",
        "Why did the algorithm get stuck at work? Because it couldn't finish the loop!",
        "Why do Java programmers wear glasses? Because they can't see C#!",
    ];

    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    console.log(`Here's a joke for you: ${joke}`);
    return joke;
}

// Основная функция
function main() {
    logCounter = readLogCounter();  // Получаем текущий порядковый номер
    const joke = tellJoke();  // Получаем шутку
    logCounter = writeToLog(joke, logCounter);  // Записываем в лог и обновляем счетчик

    console.log("\nAlright, I'm going to rest now... but you can run me again!");
}

main();
