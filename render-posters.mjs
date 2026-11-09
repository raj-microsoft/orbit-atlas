import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
const ids=['atlas',...Object.keys(JSON.parse(fs.readFileSync('image-sources.json')))];
const browser=await puppeteer.launch({executablePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',headless:true,args:['--disable-gpu']});
for(const id of ids){
 const page=await browser.newPage();await page.setViewport({width:1280,height:720,deviceScaleFactor:1});
 await page.goto(`file:///${process.cwd().replaceAll('\\','/')}/motion/${id}/index.html`,{waitUntil:'networkidle0'});
 await page.evaluate(async()=>{await Promise.all([...document.querySelectorAll('image')].map(e=>new Promise((resolve,reject)=>{const im=new Image();im.onload=resolve;im.onerror=reject;im.src=e.getAttribute('href')})))});
 await page.screenshot({path:`verification/${id}-photo.png`});await page.close();
 for(const width of [960,1280]){const r=spawnSync('ffmpeg',['-y','-i',`verification/${id}-photo.png`,'-vf',`scale=${width}:-1`,'-quality','78',`docs/assets/${id}-${width}.webp`],{stdio:'ignore'});if(r.status)throw Error('poster encoding failed');}
 console.log('Poster',id);
}
await browser.close();
