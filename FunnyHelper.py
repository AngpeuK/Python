import random
import time
import os  # Для работы с файлами

# Функция для чтения текущего порядкового номера из лог-файла
def read_log_counter():
    if os.path.exists("funny_log.txt"):  # Проверяем, существует ли файл
        with open("funny_log.txt", "r") as log_file:
            lines = log_file.readlines()
            for line in reversed(lines):  # Идем с конца файла
                if line.strip() and "." in line:  # Проверяем, что строка непустая и содержит точку
                    try:
                        last_counter = int(line.split(".")[0])  # Извлекаем число до точки
                        return last_counter + 1  # Возвращаем следующий номер
                    except ValueError:
                        continue  # Пропускаем строки с неправильным форматом
    return 1  # Если файл пустой или нет корректных строк, начинаем с 1


def greet_user():
    print("Hello! I'm your FunnyHelper.py, and I'm here to lift your inspiration (and possibly ruin your productivity).")

def tell_joke():
    jokes = [
        "Why are programmers never lonely? They always have their classes!",
        "What do you call a programmer's dog? GetTerrier!",
        "What does a JS programmer say after falling down the stairs? 'It's not a bug, it's a feature!'",
        "Why do Java developers drink a lot of coffee? Because they can't work without the Coffee class.",
        "Why did the algorithm get stuck at work? Because it couldn't finish the loop!",
        "Why do Java programmers wear glasses? Because they can't C#!",
    ]
    joke = random.choice(jokes)  # Сохраняем выбранную шутку в переменную
    print("Here's a joke for you: " + joke)
    return joke  # Возвращаем выбранную шутку

def write_to_log(joke, log_counter):  # Принимаем joke и log_counter как параметры
    with open("funny_log.txt", "a") as log_file:
        log_file.write(f"{log_counter}. {time.strftime('%H:%M:%S')} {time.strftime('(%Y-%m-%d)')} \nFunnyHelper was run and told this joke: {joke}\n")
    return log_counter + 1  # Увеличиваем счетчик и возвращаем его

def main():
    log_counter = read_log_counter()  # Получаем текущий порядковый номер
    greet_user()
    time.sleep(1)
    joke = tell_joke()  # Получаем шутку
    log_counter = write_to_log(joke, log_counter)  # Записываем в лог и обновляем счетчик

    print("\nAlright, I'm going to rest now... but you can run me again!")

if __name__ == "__main__":
    main()
