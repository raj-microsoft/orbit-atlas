"""Prepare display crops only. No recolouring, generative fill or synthesized detail.
Original download URLs and mission treatment: image-sources.json.
Pillow required. Images are cached in source-images/ (not deployed).
"""
from PIL import Image,ImageDraw
import json,urllib.request,pathlib
sources=json.loads(pathlib.Path('image-sources.json').read_text(encoding='utf8'))
pathlib.Path('source-images').mkdir(exist_ok=True)
pathlib.Path('docs/assets/photos').mkdir(exist_ok=True)
# Square display crops in normalized original coordinates. Uranus: left panel only.
crops={'mercury':(.04,.04,.96,.96),'venus':(.18,.16,.85,.83),'earth':(.06,.06,.94,.94),'mars':(0,0,1,1),'jupiter':(.235,.035,.785,.99),'saturn':(.29,.25,.69,.79),'uranus':(.045,.1,.485,.98),'neptune':(.27,.29,.71,.73)}
for name,s in sources.items():
 id=s['id'];url=f'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/{id[:5].lower()}/{id.lower()}/{id}.jpg?w=1600&fit=clip';s['download']=url
 path=pathlib.Path(f'source-images/{name}.jpg')
 if not path.exists():urllib.request.urlretrieve(url,path)
 im=Image.open(path).convert('RGB');w,h=im.size;a,b,c,d=crops[name];im=im.crop((round(a*w),round(b*h),round(c*w),round(d*h))).resize((960,960),Image.Resampling.LANCZOS)
 # Geometric circle mask removes only the square's corners; preserves dark terminators.
 mask=Image.new('L',(960,960));ImageDraw.Draw(mask).ellipse((1,1,958,958),fill=255);im.putalpha(mask)
 im.save(f'docs/assets/photos/{name}.webp',quality=78,method=6)
 s['crop']=list(crops[name]);s['checked']='2026-11-09'
pathlib.Path('image-sources.json').write_text(json.dumps(sources,indent=2,ensure_ascii=False)+'\n',encoding='utf8')
