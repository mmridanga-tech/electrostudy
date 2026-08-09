with open('/app/applet/src/data/chapter4Lessons.ts', 'r', encoding='utf-8', errors='replace') as f:
    text = f.read()

print(f"File length: {len(text)}")
p_fund = text.find("export const LESSON_DC_NETWORK_FUNDAMENTALS: Lesson = {")
p_kcl = text.find("export const LESSON_KCL: Lesson = {")
p_kvl = text.find("export const LESSON_KVL: Lesson = {")
p_nb = text.find("export const LESSON_NODE_BRANCH: Lesson = {")
p_nodal = text.find("export const LESSON_NODAL_ANALYSIS: Lesson = {")
p_mesh = text.find("export const LESSON_MESH_ANALYSIS: Lesson = {")
p_reduction = text.find("export const LESSON_NETWORK_REDUCTION: Lesson = {")
p_divider = text.find("export const LESSON_DIVIDER_NETWORKS: Lesson = {")
p_stardelta = text.find("export const LESSON_STAR_DELTA: Lesson = {")
p_theorems_intro = text.rfind("export const LESSON_NETWORK_THEOREMS_INTRO: Lesson = {")

print(f"Positions: fund={p_fund}, kcl={p_kcl}, kvl={p_kvl}, nb={p_nb}, nodal={p_nodal}, mesh={p_mesh}, red={p_reduction}, div={p_divider}, sd={p_stardelta}, intro={p_theorems_intro}")

