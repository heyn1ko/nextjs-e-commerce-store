// import { readFileSync } from 'node:fs';
// import dotenv from 'dotenv';
// import postgres from 'postgres';

// // DON'T FORGET TO HIDE THIS FILE
// // GO TO DOTENV, CREATE A .ENV FILE AND HIDE IT IN GITIGNORE

// dotenv.config();
// // https://github.com/rolodato/dotenv-safe/issues/128#issuecomment-1383176751
// export function setEnvironmentalVariables() {
//   const unconfiguredEnvVars = Object.keys(
//     dotenv.parse(readFileSync('./.env.example')),
//   ).filter((exampleKey) => !process.env[exampleKey]);

//   if (unconfiguredEnvVars.length > 0) {
//     throw new Error(
//       `.env.example environment ${
//         unconfiguredEnvVars.length > 1 ? 'variables' : 'variable'
//       } ${unconfiguredEnvVars.join(', ')} not configured in .env file`,
//     );
//   }
// }
// setEnvironmentalVariables();
// const sql = postgres();
// console.log(
//   await sql`
// SELECT * FROM products
// `,
// );
