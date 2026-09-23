"""Download candidate images and build labeled contact sheets for quick review."""
import os, json, re, urllib.request
from PIL import Image, ImageDraw, ImageFont

BASE = 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/'
OUT = '/home/z/my-project/scripts/imgs/check'
os.makedirs(OUT, exist_ok=True)

def load(folder):
    p = f'/home/z/my-project/scripts/imgs/{folder}.json'
    raw = open(p).read()
    m = re.search(r'\{[\s\S]*\}', raw)
    data = json.loads(m.group(0))
    return [r['original_url'] for r in data['results']]

# candidates per slot: (label, folder, index)
plan = [
    ('C1 commercial', 'commercial', 0), ('C2 commercial', 'commercial', 1),
    ('C3 commercial', 'commercial', 2), ('C4 commercial', 'commercial', 3),
    ('R1 resident', 'residential', 0), ('R2 resident', 'residential', 1),
    ('R3 resident', 'residential', 2), ('R4 resident', 'residential', 3),
    ('V1 civil', 'civil', 0), ('V2 civil', 'civil', 1),
    ('V3 civil', 'civil', 2), ('V4 civil', 'civil', 3),
    ('I1 industrial', 'industrial', 0), ('I2 industrial', 'industrial', 1),
    ('I3 industrial', 'industrial', 2), ('I4 industrial', 'industrial', 3),
    ('N1 interior', 'interior', 0), ('N2 interior', 'interior', 1),
    ('N3 interior', 'interior', 2), ('N4 interior', 'interior', 3),
    ('B1 blueprint', 'about', 0), ('B2 blueprint', 'about', 1),
    ('B3 blueprint', 'about', 2), ('B4 blueprint', 'about', 3),
    ('T1 team', 'team', 0), ('T2 team', 'team', 1),
    ('T3 team', 'team', 2), ('T4 team', 'team', 3),
    ('T5 team', 'team', 4), ('T6 team', 'team', 5),
]

imgs = []
for label, folder, idx in plan:
    url = load(folder)[idx]
    fn = os.path.join(OUT, f'{folder}_{idx}.jpg')
    if not os.path.exists(fn):
        try:
            urllib.request.urlretrieve(url, fn)
        except Exception as e:
            print('FAIL', label, e); continue
    try:
        im = Image.open(fn).convert('RGB')
        imgs.append((label, im))
    except Exception as e:
        print('BAD', label, e)

TH_W, TH_H = 300, 220
COLS = 5
try:
    font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 18)
except Exception:
    font = ImageFont.load_default()

per_sheet = 15
for s in range(0, len(imgs), per_sheet):
    chunk = imgs[s:s+per_sheet]
    rows = (len(chunk) + COLS - 1) // COLS
    sheet = Image.new('RGB', (COLS * TH_W, rows * (TH_H + 28)), 'white')
    dr = ImageDraw.Draw(sheet)
    for i, (label, im) in enumerate(chunk):
        im2 = im.copy(); im2.thumbnail((TH_W, TH_H))
        x = (i % COLS) * TH_W; y = (i // COLS) * (TH_H + 28)
        sheet.paste(im2, (x + (TH_W - im2.width)//2, y))
        dr.text((x + 8, y + TH_H + 2), label, fill='black', font=font)
    outp = f'/home/z/my-project/scripts/imgs/sheet_{s//per_sheet}.jpg'
    sheet.save(outp, quality=82)
    print('SAVED', outp, len(chunk))
