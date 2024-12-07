#include <iostream>
#include <fstream>
#include <string>
#include <cstdlib>
#include <ctime>

using namespace std;

// Функция для приветствия пользователя
void greet_user() {
    cout << "Hello! I'm your FunnyHelper.cpp, and I'm here to lift your inspiration (and possibly ruin your productivity)." << endl;
}

// Функция для генерации случайной шутки
string tell_joke() {
    string jokes[] = {
        "Why are programmers never lonely? They always have their classes!",
        "What do you call a programmer's dog? GetTerrier!",
        "What does a JS programmer say after falling down the stairs? 'It's not a bug, it's a feature!'",
        "Why do Java developers drink a lot of coffee? Because they can't work without the Coffee class.",
        "Why did the algorithm get stuck at work? Because it couldn't finish the loop!",
        "Why do Java programmers wear glasses? Because they can't C#!",
    };
    // Генерация случайного числа
    int index = rand() % 6;
    return jokes[index];
}

// Функция для записи в лог
void write_to_log(const string& joke, int log_counter) {
    ofstream log_file("funny_log.txt", ios::app); // Открытие файла в режиме добавления
    if (log_file.is_open()) {
        log_file << log_counter << ". " << time(0) << " C++ FunnyHelper was run and told this joke: " << joke << endl;
        log_file.close();
    } else {
        cerr << "Error opening file!" << endl;
    }
}

int read_log_counter() {
    ifstream log_file("funny_log.txt");
    string line;
    int last_counter = 0;
    if (log_file.is_open()) {
        while (getline(log_file, line)) {
            size_t pos = line.find(".");
            if (pos != string::npos) {
                int counter = stoi(line.substr(0, pos));
                if (counter > last_counter) {
                    last_counter = counter;
                }
            }
        }
        log_file.close();
    }
    return last_counter + 1; // Следующий номер
}

int main() {
    srand(time(0)); // Инициализация генератора случайных чисел

    int log_counter = read_log_counter(); // Получаем текущий порядковый номер

    greet_user();

    // Генерация и вывод шутки
    string joke = tell_joke();
    cout << "Here's a joke for you: " << joke << endl;

    // Запись в лог
    write_to_log(joke, log_counter);

    cout << "\nAlright, I'm going to rest now... but you can run me again! 😎" << endl;

    return 0;
}
