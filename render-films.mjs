import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
const ids=process.argv.length>2?process.argv.slice(2):['atlas',...Object.keys(JSON.parse(fs.readFileSync('image-sources.json')))];
fs.mkdirSync('verification',{recursive:true});
for(const id of ids){
 {
 console.log('Rendering',id);
 const log=fs.openSync(`verification/render-${id}.log`,'w');
 const r=spawnSync(process.execPath,['node_modules/hyperframes/dist/cli.js','render',`motion/${id}`,'--output',`docs/assets/${id}.mp4`,'--fps','24','--workers','2','--crf','26','--strict','--no-best-effort'],{stdio:['ignore',log,log]});fs.closeSync(log);if(r.status)throw Error(`Render ${id} failed; see log`);
 }
 const r=spawnSync('ffmpeg',['-y','-i',`docs/assets/${id}.mp4`,'-vf','scale=768:432','-c:v','libx264','-crf','27','-pix_fmt','yuv420p','-movflags','+faststart','-an',`docs/assets/${id}-mobile.mp4`],{stdio:'ignore'});if(r.status)throw Error(`Mobile ${id} failed`);
 console.log('Complete',id,fs.statSync(`docs/assets/${id}.mp4`).size,fs.statSync(`docs/assets/${id}-mobile.mp4`).size);
}
