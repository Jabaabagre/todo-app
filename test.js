// Test to verify the app loads

const fs = require("fs");

if (!fs.existsSync("index.html")) {
  console.error("Test failed: index.html does not exist");
  process.exit(1);
}

const content = fs.readFileSync("index.html", "utf8");

if (!content.includes("To-Do App")) {
  console.error("Test failed: App title not found");
  process.exit(1);
}

console.log("All tests passed!");
