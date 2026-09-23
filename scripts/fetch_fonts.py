"""Download latin woff2 fonts from Google Fonts and emit @font-face CSS."""
import re, urllib.request, os

CSS_URL = ("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700"
           "&family=Barlow:wght@400;500;600;700&display=swap")
OUT_DIR = "/home/z/my-project/public/fonts"
os.makedirs(OUT_DIR, exist_ok=True)

req = urllib.request.Request(CSS_URL, headers={
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36"})
css = urllib.request.urlopen(req, timeout=30).read().decode()

blocks = re.findall(r"/\* (\w[\w-]*) \*/\s*@font-face\s*\{([^}]+)\}", css)
faces = []
for subset, body in blocks:
    if subset != "latin":
        continue
    family = re.search(r"font-family:\s*'([^']+)'", body).group(1)
    weight = re.search(r"font-weight:\s*(\d+)", body).group(1)
    url = re.search(r"url\((https://[^)]+\.woff2)\)", body).group(1)
    fname = f"{family.replace(' ', '')}-{weight}.woff2"
    dest = os.path.join(OUT_DIR, fname)
    urllib.request.urlretrieve(url, dest)
    faces.append((family, weight, fname))
    print("saved", fname, os.path.getsize(dest))

lines = []
for family, weight, fname in faces:
    lines.append(f"""@font-face {{
  font-family: "{family}";
  font-style: normal;
  font-weight: {weight};
  font-display: swap;
  src: url("/fonts/{fname}") format("woff2");
}}""")
with open(os.path.join(OUT_DIR, "fonts.css"), "w") as f:
    f.write("\n\n".join(lines) + "\n")
print("wrote fonts.css with", len(faces), "faces")
