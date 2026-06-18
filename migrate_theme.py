import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # If already using theme, skip
    if 'useTheme' in content:
        return

    # Determine import depth
    is_component = 'components' in filepath
    import_path = "'../../theme/ThemeContext'" if is_component else "'../theme/ThemeContext'"

    # 1. Strip constants
    constants_to_remove = [
        'NAVY', 'GOLD', 'CHAMPAGNE', 'SURFACE', 'SURFACE_HIGH', 'SURFACE_WHITE', 
        'WHITE', 'ON_SURFACE', 'ON_SURFACE_VARIANT', 'OUTLINE', 'OUTLINE_VARIANT', 
        'GREEN', 'RED', 'DARK_SLATE', 'ROYAL_NAVY', 'BLACK', 'GRAY'
    ]
    for c in constants_to_remove:
        content = re.sub(fr"const {c}\s*=\s*'#[0-9a-fA-F]+';\n?", "", content)

    # 2. Add import
    # Find last import
    imports = list(re.finditer(r"^import .*?;?$", content, re.MULTILINE))
    if imports:
        last_import = imports[-1]
        insert_pos = last_import.end()
        content = content[:insert_pos] + f"\nimport {{ useTheme }} from {import_path};" + content[insert_pos:]

    # 3. Inject hook into functional components
    # Look for function ComponentName(...) { or const ComponentName = (...) => {
    func_pattern = re.compile(r"((?:export\s+default\s+)?(?:export\s+)?function\s+[A-Z]\w*\s*\([^)]*\)\s*\{)")
    
    def func_replacer(match):
        return match.group(1) + "\n  const { colors, typography } = useTheme();\n"
    
    content = func_pattern.sub(func_replacer, content)
    
    # Also for const X = () => { if it's a component
    arrow_pattern = re.compile(r"(const\s+[A-Z]\w*\s*=\s*(?:async\s+)?\([^)]*\)\s*=>\s*\{)")
    content = arrow_pattern.sub(func_replacer, content)

    # 4. Map colors
    # Backgrounds/borders
    content = re.sub(r"(backgroundColor:\s*)NAVY", r"\1colors.primaryContainer", content)
    content = re.sub(r"(backgroundColor:\s*)ROYAL_NAVY", r"\1colors.primaryContainer", content)
    content = re.sub(r"(backgroundColor:\s*)DARK_SLATE", r"\1colors.primaryContainer", content)
    content = re.sub(r"(backgroundColor:\s*)CHAMPAGNE", r"\1colors.primary", content)
    content = re.sub(r"(backgroundColor:\s*)GOLD", r"\1colors.primary", content)
    content = re.sub(r"(backgroundColor:\s*)SURFACE_WHITE", r"\1colors.surfaceLowest", content)
    content = re.sub(r"(backgroundColor:\s*)WHITE", r"\1colors.surfaceLowest", content)
    content = re.sub(r"(backgroundColor:\s*)SURFACE_GRAY", r"\1colors.background", content)
    content = re.sub(r"(backgroundColor:\s*)SURFACE", r"\1colors.background", content)
    content = re.sub(r"(backgroundColor:\s*)SURFACE_HIGH", r"\1colors.surfaceLow", content)
    
    content = re.sub(r"(color:\s*)NAVY", r"\1colors.text", content)
    content = re.sub(r"(color:\s*)ROYAL_NAVY", r"\1colors.text", content)
    content = re.sub(r"(color:\s*)DARK_SLATE", r"\1colors.text", content)
    content = re.sub(r"(color:\s*)CHAMPAGNE", r"\1colors.primary", content)
    content = re.sub(r"(color:\s*)GOLD", r"\1colors.primary", content)
    content = re.sub(r"(color:\s*)SURFACE_WHITE", r"\1colors.surfaceLowest", content)
    content = re.sub(r"(color:\s*)WHITE", r"\1colors.surfaceLowest", content)
    content = re.sub(r"(color:\s*)ON_SURFACE_VARIANT", r"\1colors.textSecondary", content)
    content = re.sub(r"(color:\s*)ON_SURFACE", r"\1colors.text", content)

    content = re.sub(r"(borderColor:\s*)OUTLINE_VARIANT", r"\1colors.outlineVariant", content)
    content = re.sub(r"(borderColor:\s*)OUTLINE", r"\1colors.outline", content)
    content = re.sub(r"(borderColor:\s*)NAVY", r"\1colors.primaryContainer", content)

    content = re.sub(r"color=\{NAVY\}", r"color={colors.text}", content)
    content = re.sub(r"color=\{ROYAL_NAVY\}", r"color={colors.text}", content)
    content = re.sub(r"color=\{WHITE\}", r"color={colors.surfaceLowest}", content)
    content = re.sub(r"color=\{SURFACE_WHITE\}", r"color={colors.surfaceLowest}", content)
    content = re.sub(r"color=\{CHAMPAGNE\}", r"color={colors.primary}", content)
    content = re.sub(r"color=\{GOLD\}", r"color={colors.primary}", content)
    content = re.sub(r"color=\{GREEN\}", r"color={colors.success}", content)
    content = re.sub(r"color=\{RED\}", r"color={colors.danger}", content)
    
    content = re.sub(r"NAVY", r"colors.primaryContainer", content) # Catchall for Navy
    content = re.sub(r"ROYAL_NAVY", r"colors.primaryContainer", content)
    content = re.sub(r"DARK_SLATE", r"colors.primaryContainer", content)
    content = re.sub(r"CHAMPAGNE", r"colors.primary", content)
    content = re.sub(r"GOLD", r"colors.primary", content)
    content = re.sub(r"SURFACE_WHITE", r"colors.surfaceLowest", content)
    content = re.sub(r"WHITE", r"colors.surfaceLowest", content)
    content = re.sub(r"SURFACE_GRAY", r"colors.background", content)
    content = re.sub(r"SURFACE_HIGH", r"colors.surfaceLow", content)
    content = re.sub(r"SURFACE", r"colors.background", content)
    content = re.sub(r"ON_SURFACE_VARIANT", r"colors.textSecondary", content)
    content = re.sub(r"ON_SURFACE", r"colors.text", content)
    content = re.sub(r"OUTLINE_VARIANT", r"colors.outlineVariant", content)
    content = re.sub(r"OUTLINE", r"colors.outline", content)
    content = re.sub(r"GREEN", r"colors.success", content)
    content = re.sub(r"RED", r"colors.danger", content)

    # 5. Map Typography
    content = re.sub(r"fontFamily:\s*'System'", r"fontFamily: typography.primary", content)
    content = re.sub(r"fontWeight:\s*'700',\s*fontFamily:\s*typography\.primary", r"fontFamily: typography.primaryBold", content)
    content = re.sub(r"fontWeight:\s*'800',\s*fontFamily:\s*typography\.primary", r"fontFamily: typography.primaryExtraBold", content)
    content = re.sub(r"fontWeight:\s*'600'", r"fontFamily: typography.primaryBold", content)
    content = re.sub(r"fontWeight:\s*'700'", r"fontFamily: typography.primaryBold", content)
    content = re.sub(r"fontWeight:\s*'800'", r"fontFamily: typography.primaryExtraBold", content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            if 'ThemeContext' not in file:
                process_file(os.path.join(root, file))

print("Migration complete!")
