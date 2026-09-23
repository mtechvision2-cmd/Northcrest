"""Second round: check remaining candidates + new team images."""
import os, json, re, urllib.request
from PIL import Image, ImageDraw, ImageFont

OUT = '/home/z/my-project/scripts/imgs/check'
os.makedirs(OUT, exist_ok=True)

def load(folder):
    p = f'/home/z/my-project/scripts/imgs/{folder}.json'
    raw = open(p).read()
    m = re.search(r'\{[\s\S]*\}', raw)
    data = json.loads(m.group(0))
    return [r['original_url'] for r in data['results']]

plan = [
    # remaining from earlier pools
    ('X1 hero', 'hero', 2),      # 14e47aa467ac? no idx2 = 14e47aa467ac is idx2? hero list: 0:5cce,1:6e19,2:14e47,3:4aaf,4:6e81,5:3cea,6:084b,7:fd32
    ('X2 hero', 'hero', 6),
    ('X3 equip', 'equipment', 0),
    ('X4 equip', 'equipment', 1),
    ('X5 equip', 'equipment', 2),
    ('X6 equip', 'equipment', 3),
    ('Y1 team2', 'team2', 0),
    ('Y2 team2', 'team2', 1),
    ('Y3 team2', 'team2', 2),
    ('Y4 team2', 'team2', 3),
    ('Y5 team2', 'team2', 4),
    ('Y6 team2', 'team2', 5),
    ('Y7 team2', 'team2', 6),
    ('Y8 team2', 'team2', 7),
    ('Z1 team3', 'team3', 0),
    ('Z2 team3', 'team3', 1),
    ('Z3 team3', 'team3', 2),
    ('Z4 team3', 'team3', 3),
    ('Z5 team3', 'team3', 4),
    ('Z6 team3', 'team3', 5),
    ('Z7 team3', 'team3', 6),
    ('Z8 team3', 'team3', 7),
]

imgs = []
for label, folder, idx in plan:
    try:
        url = load(folder)[idx]
    except Exception as e:
        print('SKIP', label, e); continue
    h = url.split('/')[-1].replace('.', '_')
    fn = os.path.join(OUT, f'{folder}_{idx}_{h}')
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
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 18)

per_sheet = 20
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
    outp = f'/home/z/my-project/scripts/imgs/sheet2_{s//per_sheet}.jpg'
    sheet.save(outp, quality=82)
    print('SAVED', outp, len(chunk))
