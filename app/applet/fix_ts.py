import sys

with open('src/data/chapter3Lessons.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace any unescaped single quotes in T_d' with T_d\\\'
text = text.replace("(T_d')", "(T_d\\\\')")

# Fix multiline single quoted strings
lines = text.splitlines(True)
out = []
i = 0
n = len(lines)

while i < n:
    line = lines[i]
    # count unescaped single quotes
    q = 0
    for idx, ch in enumerate(line):
        if ch == "'" and (idx == 0 or line[idx-1] != '\\'):
            q += 1
    
    if q % 2 != 0 and line.rstrip().endswith("'") is False:
        # multiline string
        buf = [line.rstrip('\r\n')]
        i += 1
        while i < n:
            curr = lines[i]
            q_curr = 0
            for idx, ch in enumerate(curr):
                if ch == "'" and (idx == 0 or curr[idx-1] != '\\'):
                    q_curr += 1
            
            buf.append(curr.strip())
            if q_curr % 2 != 0:
                break
            i += 1
        line = '\\n'.join(buf) + '\n'
    out.append(line)
    i += 1

with open('src/data/chapter3Lessons.ts', 'w', encoding='utf-8') as f:
    f.write(''.join(out))

print("Fixed TS strings.")
