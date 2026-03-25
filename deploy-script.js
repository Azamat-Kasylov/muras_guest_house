const { execSync } = require("child_process");
const fs = require("fs");

const args = process.argv.slice(2);
let message = args.length > 0 ? args.join(" ") : null;

if (!message) {
  try {
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
    message = `Deploy: ${new Date().toLocaleString()}`;
    deploy(message);
  }
} else {
  deploy(message);
}

function deploy(message) {
  try {
    execSync("npm run build", { stdio: "inherit" });

    execSync(`npx gh-pages -d build --no-history -m "${message}"`, {
      stdio: "inherit",
    });
  } catch (error) {
    console.error("❌ Deploy failed:", error.message);
    process.exit(1);
  }
}
