import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";
import inquirer from "inquirer";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const birthdayApp = async () => {
    console.clear();


    console.log(
        chalk.magentaBright(
            figlet.textSync("Happy Birthday, Ani!", {
                horizontalLayout: "default",
                verticalLayout: "default",
            })
        )
    );

    console.log(
        chalk.cyanBright(`
    🎉 Аню, вітаю з Днем народження! 🎂
    
    Хай твій життєвий графік буде без дедлайнів, 
    зарплата — без податків, а щастя — без обмежень!
    
    🚀 Нехай життя завжди тішить чимось класним:
    👉 Ранкова кава, яка точно розбудить.
    👉 Інтернет, який не лагає під час найважливіших моментів.
    👉 І дзвінки тільки від друзів, а не від служби підтримки оператора!
  `)
    );

    const spinner = ora({
        text: "Завантаження щастя для Ані...",
        spinner: "bouncingBar",
    }).start();

    await delay(9000);
    spinner.succeed(chalk.greenBright("Сюрпризи готові до використання!"));

    console.log(chalk.yellowBright("\n✨ Тепер посипаємо побажаннями! ✨\n"));


    const wishes = [
        "🌅 Ранків без будильника і ночей без тривог.",
        "🍫 Шоколаду більше, ніж приводів сумувати.",
        "🌸 Людей поруч, які люблять тебе так, як ти є.",
        "💪 Сили на всі ідеї та мрії (навіть на ті, що починаються з 'А що, як...').",
        "🌞 Погоди такої, щоб і прогулятися можна було, і вдома кайфово.",
        "📚 Книг, що зачаровують, і фільмів, які хочеться переглядати знову.",
        "🌍 Подорожей до місць, які завжди були у твоєму списку бажань.",
    ];


    const itWishes = [
        "💻 Код без багів, а релізи — без депресії.",
        "🔥 Щоб клавіатура завжди слухалася, а ноутбук не перегрівався.",
        "⚡️ Інтернет швидший за твої думки.",
        "🎮 Вільного часу для ігор і хобі.",
        "☕️ Кава, яка завжди на потрібній температурі.",
        "📈 Кар’єра, що росте швидше, ніж обсяг RAM у сучасних ноутбуках.",
    ];


    const allWishes = [...wishes, ...itWishes].sort(() => Math.random() - 0.5);

    for (let wish of allWishes) {
        console.log(chalk.blueBright(wish));
        await delay(1500);
    }

    console.log(chalk.greenBright("\n🎉 А тепер інтерактив! 🎉\n"));


    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "celebration",
            message: "Як ми святкуємо?",
            choices: [
                "🎂 Їмо торт (багато, бо він смачний).",
                "🍷 П'ємо вино (або шампанське).",
                "💃 Танцюємо до світанку.",
                "🎮 Граємо в ігри та перемагаємо.",
                "🍕 Їмо піцу і дивимося серіали.",
            ],
        },
        {
            type: "confirm",
            name: "ready",
            message: "Готова святкувати на максимум?",
        },
    ]);

    console.log(chalk.cyanBright("\n🎁 Результат:"));
    console.log(
        chalk.yellowBright(
            `Аня вибрала: ${answers.celebration} і відповіла: ${answers.ready ? "Так, святкуємо на максимум!" : "Можливо, трохи спокійніше 😊"
            }`
        )
    );

    console.log(chalk.magentaBright("\n🚀 Завершуємо святкування на позитивній ноті:\n"));
    console.log(
        chalk.greenBright(`
    🎈 Хай твоє життя буде:
    - Смачним, як улюблений торт.
    - Веселим, як вечірка з друзями.
    - Щасливим, як перший теплий день весни.
    - І яскравим, як мільйон зірок на нічному небі!

    🎉 Вітаю тебе, Аню! Святкуй і насолоджуйся кожною миттю!
  `)
    );

    console.log(chalk.redBright("\nPS: Пам'ятай, що життя — це кайф від дрібниць. 😉"));
};

birthdayApp();