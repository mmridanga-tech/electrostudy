# -*- coding: utf-8 -*-
"""
Generator script for Chapter 11 Lessons 8 to 14.
Generates full TypeScript data files with trilingual translations (EN, HI, BN),
8 MCQs per lesson, 5 practice questions per lesson, formulas, sections,
worked examples, and engineering metadata.
"""

import json
import os

def generate_file(filepath, var_name, data):
    code = "import { Lesson } from '../types';\n\n"
    code += f"export const {var_name}: Lesson = "
    code += json.dumps(data, ensure_ascii=False, indent=2)
    code += ";\n"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Generated {filepath} ({len(code)} bytes)")

print("Script framework initialized.")
