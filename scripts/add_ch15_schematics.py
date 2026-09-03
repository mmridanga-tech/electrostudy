# -*- coding: utf-8 -*-

with open('src/components/CircuitSchematicSvg.tsx', 'r', encoding='utf-8') as f:
  content = f.read()

# Let's find "    default:"
target = '    default:'

# Let's read schematics from a separate text file to avoid python string escaping issues
with open('scripts/schematics_snippet.txt', 'r', encoding='utf-8') as sf:
  schematics_code = sf.read()

if target in content:
  new_content = content.replace(target, schematics_code + '\n    default:')
  with open('src/components/CircuitSchematicSvg.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
  print("Successfully inserted Chapter 15 schematics into CircuitSchematicSvg.tsx")
else:
  print("Target not found!")
