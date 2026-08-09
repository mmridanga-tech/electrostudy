with open('/app/applet/src/data/chapter4Lessons.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Fix FormulaItem in LESSON_NETWORK_THEOREMS_INTRO
old_formula = """    {
      title: { en: 'Source Deactivation Rules', hi: 'स्रोत निष्क्रियकरण नियम', bn: 'সোর্স ডিঅ্যাক্টিভেশন नियम' },
      formula: 'Voltage Source \\\\rightarrow \\\\text{Short Circuit } (V = 0), \\\\quad Current Source \\\\rightarrow \\\\text{Open Circuit } (I = 0)',
      description: {"""

new_formula = """    {
      symbol: 'Sources',
      expression: 'V_{source} \\\\rightarrow 0 \\\\text{ (Short)}, \\\\quad I_{source} \\\\rightarrow 0 \\\\text{ (Open)}',
      description: {"""

if old_formula in text:
    text = text.replace(old_formula, new_formula)

lines = text.split('\n')
new_lines = []
in_lesson_root = True

for line in lines:
    trimmed = line.strip()
    # Check if this line is an invalid property on Lesson root (like description, sections, summary, svgType when indented by 2 spaces)
    if line.startswith("  description:") or line.startswith("  sections:") or line.startswith("  summary:") or line.startswith("  svgType:"):
        # skip this block or line
        continue
    # If it's a multiline block starting with "  sections: [" or "  summary: {" or "  description: {"
    new_lines.append(line)

cleaned_text = '\n'.join(new_lines)

# Remove any dangling sections/summary blocks if needed
with open('/app/applet/src/data/chapter4Lessons.ts', 'w', encoding='utf-8') as f:
    f.write(cleaned_text)

print("Cleaned description/sections/summary/svgType from lesson roots")
