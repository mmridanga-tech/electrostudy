# -*- coding: utf-8 -*-
"""
Full generation script for Chapter 11 Lessons 8-14.
"""
import json
import os

def save_lesson(filepath, var_name, data):
    header = "import { Lesson } from '../types';\n\n"
    content = header + f"export const {var_name}: Lesson = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Generated {filepath} successfully.")

EOF = None
