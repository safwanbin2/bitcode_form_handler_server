import app from "./app.js";
import config from "./app/config/index.js";

async function main() {
  try {
    const server = app.listen(config.port, () => {
      console.log(`server running on ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
