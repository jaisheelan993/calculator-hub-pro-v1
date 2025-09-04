import fs from 'fs';
import path from 'path';
export async function POST(req){ const body = await req.json(); const file = path.resolve('./feedback-submissions.json'); let arr = []; try{ if(fs.existsSync(file)) arr = JSON.parse(fs.readFileSync(file)); }catch(e){} arr.push({...body, at:new Date().toISOString()}); try{ fs.writeFileSync(file, JSON.stringify(arr, null, 2)); }catch(e){ console.error(e); } return new Response(JSON.stringify({ok:true}), {status:200}); }
