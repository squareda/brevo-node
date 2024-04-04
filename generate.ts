import { generateApi } from "swagger-typescript-api";
import path from "path";

generateApi({
  name: "Brevo.ts",
  // @ts-ignore
  apiClassName: "Brevo",
  url: "https://api.brevo.com/v3/swagger_definition.yml",
  output: path.resolve(__dirname, "src"),
  httpClientType: "axios",
  hooks: {
    // Fix date example changing to current date on every run
    onParseSchema: (schema) => {
      if (schema.example && schema.example instanceof Date) {
        schema.example = "2024-01-22T09:25:00.000Z";
      }
    },
  },
}).then(() => {
  process.exit(0);
});
