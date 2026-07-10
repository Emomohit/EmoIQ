import os
import subprocess
import time

def run_cmd(cmd):
    print(f"Running: {cmd}")
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
    return result

# Set up remote and branch
run_cmd('git branch -M main')
run_cmd('git remote add origin https://github.com/Emomohit/EmoIQ')

commits = [
    {
        "files": ".gitignore .prettierrc .prettierignore eslint.config.js tsconfig.json vite.config.ts package.json package-lock.json bun.lock bunfig.toml components.json README.md .env AGENTS.md",
        "msg": "chore: initial project setup with vite and bun"
    },
    {
        "files": "public/",
        "msg": "feat: add public assets and icons"
    },
    {
        "files": "src/components/ui/",
        "msg": "feat: integrate shadcn ui component library"
    },
    {
        "files": "src/components/site/",
        "msg": "feat: build site layout and navigation components"
    },
    {
        "files": "src/lib/",
        "msg": "feat: implement utility functions and auth library"
    },
    {
        "files": "src/integrations/",
        "msg": "feat: setup supabase client integrations"
    },
    {
        "files": "src/routes/__root.tsx src/routes/index.tsx src/routes/auth.tsx src/routeTree.gen.ts src/router.tsx src/server.ts src/start.ts src/styles.css",
        "msg": "feat: configure tanstack router and root layouts"
    },
    {
        "files": "src/routes/emoiq.tsx src/routes/emoiq.index.tsx",
        "msg": "feat: create emoiq dashboard layout"
    },
    {
        "files": "src/routes/emoiq.analyze.tsx",
        "msg": "feat: implement pyq analysis module"
    },
    {
        "files": "src/routes/emoiq.predict.tsx",
        "msg": "feat: implement ai question prediction"
    },
    {
        "files": "src/routes/emoiq.plan.tsx",
        "msg": "feat: implement dynamic study planner"
    },
    {
        "files": "src/routes/emoiq.quiz.tsx",
        "msg": "feat: implement ai quiz generator"
    },
    {
        "files": "src/routes/emoiq.doubt.tsx",
        "msg": "feat: implement ai doubt solver chat"
    },
    {
        "files": "supabase/",
        "msg": "feat: setup supabase migrations and edge functions"
    },
    {
        "files": ".lovable/",
        "msg": "chore: add lovable configuration"
    }
]

for c in commits:
    run_cmd(f'git add {c["files"]}')
    run_cmd(f'git commit -m "{c["msg"]}"')
    time.sleep(1) # tiny delay to ensure timestamps are sequential

# Catch-all for any remaining untracked files
run_cmd('git add .')
res = run_cmd('git commit -m "fix: final touches and cleanup"')

# Push
print("Pushing to remote...")
run_cmd('git push -u origin main --force')

print("Done!")
