using System;
using System.IO;

class FunnyHelper
{
    // Функция для приветствия пользователя
    static void GreetUser()
    {
        Console.WriteLine("Hello! I'm your FunnyHelper.cs, and I'm here to lift your inspiration (and possibly ruin your productivity).");
    }

    // Функция для генерации случайной шутки
    static string TellJoke()
    {
        string[] jokes = {
            "Why are programmers never lonely? They always have their classes!",
            "What do you call a programmer's dog? GetTerrier!",
            "What does a JS programmer say after falling down the stairs? 'It's not a bug, it's a feature!'",
            "Why do Java developers drink a lot of coffee? Because they can't work without the Coffee class.",
            "Why did the algorithm get stuck at work? Because it couldn't finish the loop!",
            "Why do Java programmers wear glasses? Because they can't C#!",
        };

        // Генерация случайного индекса
        Random rand = new Random();
        int index = rand.Next(jokes.Length);
        return jokes[index];
    }

    // Функция для записи в лог
    static void WriteToLog(string joke, int logCounter)
    {
        using (StreamWriter logFile = new StreamWriter("funny_log.txt", true))
        {
            logFile.WriteLine($"{logCounter}. {DateTime.Now:HH:mm:ss} {DateTime.Now:yyyy-MM-dd} \nFunnyHelper was run and told this joke: {joke}");
        }
    }

    // Функция для получения текущего порядкового номера из лога
    static int ReadLogCounter()
    {
        int lastCounter = 0;
        if (File.Exists("funny_log.txt"))
        {
            string[] lines = File.ReadAllLines("funny_log.txt");
            foreach (var line in lines)
            {
                // Извлекаем порядковый номер
                int index = line.IndexOf(".");
                if (index != -1)
                {
                    int counter = int.Parse(line.Substring(0, index));
                    if (counter > lastCounter)
                    {
                        lastCounter = counter;
                    }
                }
            }
        }
        return lastCounter + 1; // Возвращаем следующий порядковый номер
    }

    static void Main(string[] args)
    {
        int logCounter = ReadLogCounter(); // Получаем текущий порядковый номер

        GreetUser();

        // Генерация и вывод шутки
        string joke = TellJoke();
        Console.WriteLine($"Here's a joke for you: {joke}");

        // Запись в лог
        WriteToLog(joke, logCounter);

        Console.WriteLine("\nAlright, I'm going to rest now... but you can run me again! 😎");
    }
}
