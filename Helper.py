import random
import time

def greet_user():
    print("Hello! I'm your FunnyHelper.py, and I'm here to lift your spirits (and possibly ruin your productivity). 😜")

def tell_joke():
    jokes = [
        "Why are programmers never lonely? They always have their classes!",
        "What do you call a programmer's dog? GetTerrier!",
        "What does a JS programmer say after falling down the stairs? 'It's not a bug, it's a feature!'",
        "Why do Java developers drink a lot of coffee? Because they can't work without the Coffee class.",
        "Why did the algorithm get stuck at work? Because it couldn't finish the loop!",
        "Why do Java programmers wear glasses? Because they can't see C#!",
    ]
    print("Here's a joke for you: " + random.choice(jokes))

def write_to_log():
    with open("funny_log.txt", "a") as log_file:
        log_file.write(f"FunnyHelper was run at {time.strftime('%Y-%m-%d %H:%M:%S')}\n")

def main():
    greet_user()
    write_to_log()
    time.sleep(1)
    tell_joke()

    print("\nAlright, I'm going to rest now... but you can run me again! 😎")

if __name__ == "__main__":
    main()
