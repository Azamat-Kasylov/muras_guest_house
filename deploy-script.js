const { execSync } = require("child_process");
const fs = require("fs");

// Получаем сообщение из аргументов командной строки
const args = process.argv.slice(2);
let message = args.length > 0 ? args.join(" ") : null;

// Если сообщение не передано, запрашиваем у пользователя
if (!message) {
  try {
    // Читаем из стандартного ввода (для интерактивного режима)
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      "✍️  Enter deploy message (or press Enter for timestamp): ",
      (userInput) => {
        message = userInput.trim() || `Deploy: ${new Date().toLocaleString()}`;
        deploy(message);
        rl.close();
      },
    );
  } catch (error) {
    // Если не удалось прочитать интерактивно, используем timestamp
    message = `Deploy: ${new Date().toLocaleString()}`;
    deploy(message);
  }
} else {
  deploy(message);
}

function deploy(message) {
  console.log(`📦 Building project...`);

  try {
    // Выполняем сборку
    execSync("npm run build", { stdio: "inherit" });

    console.log(`🚀 Deploying with message: "${message}"`);
    console.log(`📝 Using --no-history flag to avoid local cache issues`);

    // Деплоим с флагом --no-history
    execSync(`npx gh-pages -d build --no-history -m "${message}"`, {
      stdio: "inherit",
    });

    console.log("✅ Deploy completed successfully!");
    console.log(
      "🌐 Your site is available at: https://Azamat-Kasylov.github.io/muras_guest_house",
    );
  } catch (error) {
    console.error("❌ Deploy failed:", error.message);
    process.exit(1);
  }
}
