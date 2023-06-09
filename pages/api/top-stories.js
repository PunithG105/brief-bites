// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import fetch from "node-fetch";
import { readFile } from 'node:fs/promises';
import { cwd } from 'node:process';
import { join } from 'node:path';
async function handler(req, res) {
  const file = await readFile(join(cwd(),'database','top-stories.json'),'utf-8');
  const data = (JSON.parse(file));
  res.status('200').json(data);
}
export default handler;