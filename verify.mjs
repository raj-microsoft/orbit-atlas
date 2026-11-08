import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
const base=process.argv[2]||'file:///C:/repos/gh-pages-lab/orbit-atlas/docs/index.html';
fs.mkdirSync('verification',{recursive:true});
const browser=await puppeteer.launch({executablePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',headless:true,args:['--disable-gpu']});
const reports=[];
for(const width of [1440,390]){
 const page=await browser.newPage();await page.setViewport({width,height:1000,deviceScaleFactor:1});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);await page.goto(base,{waitUntil:'networkidle0'});await page.screenshot({path:`verification/${width}-full.png`,fullPage:true});await page.screenshot({path:`verification/${width}-hero.png`});
 const info=await page.evaluate(()=>({title:document.title,width:innerWidth,scrollWidth:document.documentElement.scrollWidth,planets:document.querySelectorAll('.planet').length,sources:[...document.querySelectorAll('.story a')].map(a=>a.href),motion:document.querySelector('#motion').textContent,videoPaused:[...document.querySelectorAll('video')].every(v=>v.paused),font:document.fonts.check('700 48px Archivo'),padding:getComputedStyle(document.querySelector('.planet')).paddingLeft}));
 await page.click('#motion');await new Promise(r=>setTimeout(r,1500));info.manualPlay=await page.evaluate(()=>({label:document.querySelector('#motion').textContent,ready:document.querySelector('video').readyState,paused:document.querySelector('video').paused}));await page.click('#motion');info.pauses=await page.evaluate(()=>[...document.querySelectorAll('video')].every(v=>v.paused));await page.click('a[href="#saturn"]');await new Promise(r=>setTimeout(r,200));await page.screenshot({path:`verification/${width}-saturn.png`});reports.push({...info,errors});await page.close();
}
await browser.close();fs.writeFileSync('verification/report.json',JSON.stringify(reports,null,2));console.log(JSON.stringify(reports,null,2));
