import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";
import inquirer from "inquirer";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const birthdayApp = async () => {
    console.clear();


    console.log(
        chalk.magentaBright(
            figlet.textSync("Happy Birthday, Аня!", {
                horizontalLayout: "default",
                verticalLayout: "default",
            })
        )
    );

    console.log(
        chalk.cyanBright(`
    🎉 Аню, я вітаю тебе з Днем народження! 🎂

    Нехай твоє життя буде сповнене:
    - Радості, як у дитини, яка бачить торт.
    - Енергії, як у ноутбука, підключеного до розетки.
    - Любові, яка гріє навіть у дощові дні.

    🚀 Готуйся, бо далі буде ще цікавіше!
  `)
    );

    const spinner = ora({
        text: "Завантажую сюрпризи для тебе...",
        spinner: "dots",
    }).start();

    await delay(5000);
    spinner.succeed(chalk.greenBright("Сюрпризи успішно доставлені!"));

    console.log(chalk.yellowBright("\n✨ Ось мої побажання для тебе! ✨\n"));


    const wishes = [
        "🌅 Ранків без будильника і ночей без тривог.",
        "🍫 Шоколаду більше, ніж приводів сумувати.",
        "🌸 Людей поруч, які завжди підтримають.",
        "💪 Сили на всі ідеї, навіть ті, що здаються божевільними.",
        "🌞 Сонця в серці навіть у похмурі дні.",
        "📚 Книг, що змінюють світогляд.",
        "🌍 Подорожей, які залишають спогади на все життя.",
        "🎉 Свят, які ніколи не забуваються.",
    ];

    const itWishes = [
        "💻 Код без багів, а деплоям — лише зелене світло.",
        "🔥 Щоб ноутбук завжди працював стабільно.",
        "⚡️ Інтернету, який завжди швидший за думки.",
        "☕️ Кави, яка надихає на великі звершення.",
        "🎮 Більше вільного часу для ігор і хобі.",
        "📈 Кар'єрного росту, що приносить радість.",
    ];

    const allWishes = [...wishes, ...itWishes].sort(() => Math.random() - 0.5);

    for (let wish of allWishes) {
        console.log(chalk.blueBright(wish));
        await delay(2000);
    }

    console.log(chalk.greenBright("\n🎉 Інтерактивна частина! 🎉\n"));


    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "celebration",
            message: "Як будемо святкувати?",
            choices: [
                "🎂 Їмо торт і не рахуємо калорії.",
                "🍷 Наливаємо келих (чи два) шампанського.",
                "💃 Танцюємо до упаду під улюблену музику.",
                "🎮 Влаштовуємо змагання в іграх.",
                "🍕 Замовляємо піцу і дивимося серіал.",
            ],
        },
        {
            type: "confirm",
            name: "ready",
            message: "Готова до наступного сюрпризу?",
        },
    ]);

    console.log(chalk.cyanBright("\n🎁 Результат:"));
    console.log(
        chalk.yellowBright(
            `Ти вибрала: ${answers.celebration} і відповіла: ${answers.ready ? "Так, давай сюрпризи!" : "Ні, я поки що насолоджуюсь святом 😊"
            }`
        )
    );

    console.log(chalk.magentaBright("\n🚀 Моє передбачення для тебе на майбутнє:\n"));

    const predictions = [
        "✨ Скоро ти здійсниш свою мрію!",
        "🌍 На горизонті подорож кудись, куди ти дуже хочеш. В ІСЛАНДІЮ!!!!",
        "💼 Кар'єра підніметься на новий рівень! Вайті в айті!",
        "🎉 Наступне свято буде ще яскравішим! Сподіваюся, в мирній Україні!",
        "📸 Зробиш фото, яке навіть твій телефон захоче зберегти як 'улюблене'.",
        "🚀 На тебе чекає подорож на диван і назад, але це буде захоплююче!",
        "💎 Твоє захоплення 'посипати жартами' може стати професією!",
        "🔥 Скоро відчуєш гордість за те, що зуміла не впустити телефон у ванну.",
        "🍷 Влаштуєш вечір з вином і друзями, і виявиш, що у вас усіх однакові улюблені меми.",
    ];

    for (let prediction of predictions) {
        console.log(chalk.yellowBright(prediction));
        await delay(2000);
    }

    console.log(chalk.redBright("\n⚠️ Увага! Зараз буде щось незабутнє...\n"));
    await delay(3000);

    console.log(chalk.magentaBright("\n🌟 Починаємо... 100 разів 'Happy Birthday!' 🎉\n"));
    await delay(2000);

    for (let i = 1; i <= 100; i++) {
        console.log(chalk.blueBright(`${i}. Happy Birthday, Аня! 🎂🎉`));
        await delay(100);
    }

    console.log(chalk.greenBright("\n🎈 Завершую це грандіозне святкування!"));
    console.log(
        chalk.cyanBright(`
    Аню, нехай цей день запам'ятається тобі надовго.
    Я пишаюся тим, що можу привітати тебе і побажати лише найкращого! 🌟
  `)
    );

    console.log(chalk.redBright("\nPS: Ти — неймовірна! Завжди пам'ятай про це! 💖"));
};

birthdayApp();