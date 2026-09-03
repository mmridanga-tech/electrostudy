# -*- coding: utf-8 -*-
import json
import os

def write_lesson_file(filepath, var_name, lesson_dict):
    ts_content = "import { Lesson } from '../types';\n\n"
    ts_content += f"export const {var_name}: Lesson = "
    ts_content += json.dumps(lesson_dict, ensure_ascii=False, indent=2)
    ts_content += ";\n"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    print(f"Wrote {filepath} ({len(ts_content)} bytes)")

print("Generator module ready.")
