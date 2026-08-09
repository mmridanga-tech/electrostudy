import re

with open('/app/applet/src/data/chapter4Lessons.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix common unescaped apostrophes inside single-quoted TS strings
content = content.replace("Cramer's", "Cramer\\'s")
content = content.replace("Thevenin's", "Thevenin\\'s")
content = content.replace("Norton's", "Norton\\'s")
content = content.replace("wouldn't", "wouldn\\'t")
content = content.replace("don't", "don\\'t")
content = content.replace("doesn't", "doesn\\'t")
content = content.replace("can't", "can\\'t")

with open('/app/applet/src/data/chapter4Lessons.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed quotes in chapter4Lessons.ts")
