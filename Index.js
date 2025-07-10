const { exec } = require("child_process");

exec("npx n8n start --tunnel", (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ stderr: ${stderr}`);
    return;
  }
  console.log(`✅ stdout: ${stdout}`);
});
