const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const button=document.querySelector('#motion');
const videos=[...document.querySelectorAll('video')];
let paused=reduced.matches;
const visible=new Set();
function sync(){button.textContent=paused?'Play motion':'Pause motion';button.setAttribute('aria-pressed',String(paused));for(const video of videos){if(paused||!visible.has(video)){video.pause();if(reduced.matches)video.classList.remove('ready');}else{if(!video.src)video.src=matchMedia("(max-width:800px)").matches?video.dataset.mobile:video.dataset.src;video.play().then(()=>video.classList.add('ready')).catch(()=>video.classList.remove('ready'));}}}
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting)visible.add(entry.target);else visible.delete(entry.target);}sync();},{threshold:.12});
videos.forEach(video=>{observer.observe(video);video.addEventListener('error',()=>video.classList.remove('ready'));});
button.addEventListener('click',()=>{paused=!paused;document.body.classList.toggle('motion-enabled',!paused);sync();});
reduced.addEventListener('change',()=>{paused=reduced.matches;sync();});
sync();
