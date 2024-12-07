import java.io.*;
import java.nio.file.*;
import java.text.SimpleDateFormat;
import java.util.*;

public class FunnyHelper {

    public static void main(String[] args) {
        int logCounter = readLogCounter(); // Получаем текущий порядковый номер
        greetUser();

        try {
            Thread.sleep(1000); // Пауза в 1 секунду
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        String joke = tellJoke(); // Получаем шутку
        logCounter = writeToLog(joke, logCounter); // Записываем в лог и обновляем счетчик

        System.out.println("\nAlright, I'm going to rest now... but you can run me again!");
    }

    public static void greetUser() {
        System.out.println("Hello! I'm your FunnyHelper.java, and I'm here to lift your inspiration (and possibly ruin your productivity).");
    }

    public static String tellJoke() {
        List<String> jokes = Arrays.asList(
                "Why are programmers never lonely? They always have their classes!",
                "What do you call a programmer's dog? GetTerrier!",
                "What does a JS programmer say after falling down the stairs? 'It's not a bug, it's a feature!'",
                "Why do Java developers drink a lot of coffee? Because they can't work without the Coffee class.",
                "Why did the algorithm get stuck at work? Because it couldn't finish the loop!",
                "Why do Java programmers wear glasses? Because they can't C#!"
        );

        Random random = new Random();
        String joke = jokes.get(random.nextInt(jokes.size())); // Случайная шутка
        System.out.println("Here's a joke for you: " + joke);
        return joke;
    }

    public static int readLogCounter() {
        Path logPath = Paths.get("funny_log.txt");
        if (Files.exists(logPath)) {
            try (BufferedReader reader = Files.newBufferedReader(logPath)) {
                String lastLine = null, line;
                while ((line = reader.readLine()) != null) {
                    lastLine = line;
                }

                if (lastLine != null && lastLine.matches("^\\d+\\..*")) {
                    return Integer.parseInt(lastLine.split("\\.")[0]) + 1;
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return 1; // Если файл пустой, начинаем с 1
    }

    public static int writeToLog(String joke, int logCounter) {
        Path logPath = Paths.get("funny_log.txt");
        String timestamp = new SimpleDateFormat("HH:mm:ss (yyyy-MM-dd)").format(new Date());
        String logEntry = String.format("%d. %s \nJava FunnyHelper was run and told this joke: %s%n", logCounter, timestamp, joke);

        try (BufferedWriter writer = Files.newBufferedWriter(logPath, StandardOpenOption.CREATE, StandardOpenOption.APPEND)) {
            writer.write(logEntry);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return logCounter + 1;
    }
}
