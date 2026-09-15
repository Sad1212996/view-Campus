# Master Project Orchestration & Multi-Skill Guidelines (`CLAUDE.md`)

ไฟล์นี้เป็นระบบศูนย์กลางในการควบคุม สลับ และระบุชื่อสกิลทั้งหมดในระบบ Claude Code โดยอ้างอิงชื่อสกิลตรงตามที่ลงทะเบียนใน `/skills`

หลักการสำคัญ: **สกิลไม่ใช่กล่องที่แยกกันเด็ดขาด** งานหนึ่งงาน/สเต็ปหนึ่งสเต็ปสามารถเรียกใช้หลายสกิลพร้อมกันได้ ถ้าขอบเขตของสกิลไม่ทับซ้อนกัน (เช่น สกิลด้านภาษา + สกิลด้าน framework + สกิลด้าน design ใช้พร้อมกันได้ในสเต็ป Build) ส่วน Workflow ในเอกสารนี้เป็น **ตัวอย่างแนวทาง (template)** ไม่ใช่ลำดับตายตัว — ข้าม รวม หรือสลับสเต็ปได้ตามความเหมาะสมของงานจริง

---

## 1. Exact Registered Skill Index

### A. Project Skills (Taste Skill, Impeccable & Emil Kowalski)
- `design-taste-frontend` : ออกแบบ UI หลักเวอร์ชัน v2
- `design-taste-frontend-v1` : ออกแบบ UI เวอร์ชัน v1
- `gpt-taste` : กฎ UI เข้มงวด เน้น Layout Variance และ GSAP
- `high-end-visual-design` : สไตล์หรูหรา Whitespace สูง Spring Motion
- `minimalist-ui` : สไตล์มินิมอล/บรรณาธิการ โทนสีจำกัด (Notion/Linear)
- `industrial-brutalist-ui` : สไตล์ Brutalist คอนทราสต์สูง Swiss Layout
- `stitch-design-taste` : ตามมาตรฐาน Google Stitch + ส่งออก DESIGN.md
- `image-to-code` : วิเคราะห์รูป Mockup แล้วสร้างโค้ดตาม
- `redesign-existing-projects` : ปรับปรุง Spacing และ Hierarchy บนโค้ด UI เดิม
- `full-output-enforcement` : บังคับเขียนโค้ดตัวเต็ม ห้ามตัดทอนหรือใส่คอมเมนต์ย่อ
- `brandkit` : **[Image Only]** สร้างภาพ Moodboard/Brand asset
- `imagegen-frontend-web` : **[Image Only]** สร้างภาพ Mockup หน้าเว็บ
- `imagegen-frontend-mobile` : **[Image Only]** สร้างภาพ Mockup หน้ามือถือ
- `impeccable` : ระบบ Design System & Audit หลัก
- `emil-design-eng` : หลักการสร้าง UI + Motion สไตล์ Vercel/Linear
- `apple-design` : หลักการดีไซน์และ Motion ตามแนวทาง Apple (WWDC)
- `find-animation-opportunities` : ค้นหาจุดที่ควรและไม่ควรใส่แอนิเมชัน
- `review-animations` : ตรวจสอบแอนิเมชันในโค้ด
- `improve-animations` : วางแผนปรับปรุงแอนิเมชันทั้งระบบ
- `animation-vocabulary` : คลังคำศัพท์สำหรับสั่งสร้างแอนิเมชัน

### B. Full-Stack Dev Skills Plugins (`fullstack-dev-skills:<name>`)

#### 1. Language Specialists
- `fullstack-dev-skills:python-pro`
- `fullstack-dev-skills:typescript-pro`
- `fullstack-dev-skills:javascript-pro`
- `fullstack-dev-skills:golang-pro`
- `fullstack-dev-skills:rust-engineer`
- `fullstack-dev-skills:sql-pro`
- `fullstack-dev-skills:cpp-pro`
- `fullstack-dev-skills:csharp-developer`
- `fullstack-dev-skills:swift-expert`
- `fullstack-dev-skills:kotlin-specialist`
- `fullstack-dev-skills:php-pro`
- `fullstack-dev-skills:java-architect`

#### 2. Backend Frameworks
- `fullstack-dev-skills:nestjs-expert`
- `fullstack-dev-skills:django-expert`
- `fullstack-dev-skills:fastapi-expert`
- `fullstack-dev-skills:spring-boot-engineer`
- `fullstack-dev-skills:laravel-specialist`
- `fullstack-dev-skills:rails-expert`
- `fullstack-dev-skills:dotnet-core-expert`

#### 3. Frontend & Mobile
- `fullstack-dev-skills:react-expert`
- `fullstack-dev-skills:nextjs-developer`
- `fullstack-dev-skills:vue-expert`
- `fullstack-dev-skills:vue-expert-js`
- `fullstack-dev-skills:angular-architect`
- `fullstack-dev-skills:react-native-expert`
- `fullstack-dev-skills:flutter-expert`

#### 4. Infrastructure & Cloud
- `fullstack-dev-skills:kubernetes-specialist`
- `fullstack-dev-skills:terraform-engineer`
- `fullstack-dev-skills:postgres-pro`
- `fullstack-dev-skills:cloud-architect`
- `fullstack-dev-skills:database-optimizer`

#### 5. API & Architecture
- `fullstack-dev-skills:graphql-architect`
- `fullstack-dev-skills:api-designer`
- `fullstack-dev-skills:websocket-engineer`
- `fullstack-dev-skills:microservices-architect`
- `fullstack-dev-skills:mcp-developer`
- `fullstack-dev-skills:architecture-designer`
- `fullstack-dev-skills:feature-forge`
- `fullstack-dev-skills:spec-miner`

#### 6. Quality & Testing
- `fullstack-dev-skills:test-master`
- `fullstack-dev-skills:playwright-expert`
- `fullstack-dev-skills:code-reviewer`
- `fullstack-dev-skills:code-documenter`

#### 7. DevOps & Operations
- `fullstack-dev-skills:devops-engineer`
- `fullstack-dev-skills:monitoring-expert`
- `fullstack-dev-skills:sre-engineer`
- `fullstack-dev-skills:chaos-engineer`
- `fullstack-dev-skills:cli-developer`

#### 8. Security
- `fullstack-dev-skills:secure-code-guardian`
- `fullstack-dev-skills:security-reviewer`

#### 9. Data & Machine Learning
- `fullstack-dev-skills:pandas-pro`
- `fullstack-dev-skills:spark-engineer`
- `fullstack-dev-skills:ml-pipeline`
- `fullstack-dev-skills:prompt-engineer`
- `fullstack-dev-skills:rag-architect`
- `fullstack-dev-skills:fine-tuning-expert`

#### 10. Platform Specialists & Integration
- `fullstack-dev-skills:salesforce-developer`
- `fullstack-dev-skills:shopify-expert`
- `fullstack-dev-skills:wordpress-pro`
- `fullstack-dev-skills:atlassian-mcp`

#### 11. Specialized & Reasoning
- `fullstack-dev-skills:legacy-modernizer`
- `fullstack-dev-skills:embedded-systems`
- `fullstack-dev-skills:game-developer`
- `fullstack-dev-skills:debugging-wizard`
- `fullstack-dev-skills:fullstack-guardian`
- `fullstack-dev-skills:the-fool`

### C. Stripe Plugin Skills (`stripe:<name>`)
- `stripe:connect-recommend`
- `stripe:stripe-best-practices`
- `stripe:stripe-directory`
- `stripe:stripe-docs`
- `stripe:stripe-projects`
- `stripe:upgrade-stripe`

---

## 2. หลักการและเงื่อนไขการเลือกใช้สกิล (Skill Selection Conditions)

### 2.1 กฎทั่วไป (General Rules)

1. **ใช้หลายสกิลร่วมกันได้ในสเต็ปเดียว** ถ้าขอบเขตไม่ทับซ้อน เช่น สเต็ป Build อาจใช้ `fullstack-dev-skills:nextjs-developer` + `fullstack-dev-skills:typescript-pro` + `emil-design-eng` + `fullstack-dev-skills:fullstack-guardian` พร้อมกันได้
2. **ตรวจ stack จริงในโปรเจกต์ก่อนเลือกสกิลภาษา/เฟรมเวิร์ก** — ดูจาก `package.json`, `requirements.txt`, `*.csproj`, `go.mod`, `Gemfile`, `composer.json`, `pubspec.yaml` ฯลฯ แล้วเลือกสกิลที่ตรงกับสิ่งที่มีอยู่จริง ก่อนจะถามผู้ใช้
3. **ด้าน Design/UI**: ถ้าโปรเจกต์มีสไตล์ design เดิมอยู่แล้ว ให้ยึดสไตล์เดิมเพื่อความสอดคล้อง (ใช้ `redesign-existing-projects` หรือ `impeccable` เป็น audit ก่อน); ถ้าเป็นโปรเจกต์ใหม่หรือผู้ใช้ระบุสไตล์ชัดเจน ให้เลือกสกิลตามสไตล์ที่ต้องการ (ดูตาราง 2.2)
4. **สกิล [Image Only]** (`brandkit`, `imagegen-frontend-web`, `imagegen-frontend-mobile`) ใช้เฉพาะเมื่อ deliverable สุดท้ายเป็นไฟล์ภาพ/มู้ดบอร์ด ไม่ใช่โค้ดที่รันได้ ห้ามใช้แทนสกิลเขียนโค้ด
5. **Animation** ใช้แบบไล่ระดับ: `find-animation-opportunities` (หาว่าควรใส่ตรงไหน) → `animation-vocabulary` (สั่งงานรายละเอียด) → ใช้ตอนเขียนจริงร่วมกับสกิล design/framework → `review-animations` (ตรวจของเดิม) → `improve-animations` (วางแผนปรับทั้งระบบ)
6. **Security** ไม่ใช่ทางเลือก แต่เป็น gate บังคับ: `fullstack-dev-skills:secure-code-guardian` ใช้ระหว่างเขียนโค้ดที่แตะ auth/payment/PII/secrets, `fullstack-dev-skills:security-reviewer` ใช้เป็นด่านตรวจก่อน merge/deploy ทุกครั้งที่มีการเปลี่ยนแปลงที่กระทบความปลอดภัย
7. **Testing** เริ่มจาก `fullstack-dev-skills:test-master` เป็นค่าเริ่มต้นเสมอ เพิ่ม `fullstack-dev-skills:playwright-expert` เมื่อมี flow ที่ต้องทดสอบผ่านเบราว์เซอร์/E2E จริง
8. **Stripe skills** ใช้เฉพาะงานที่เกี่ยวกับ payment/billing integration เท่านั้น ไม่ใช้แทนสกิล backend ทั่วไป
9. เมื่อไม่แน่ใจว่าใช้สกิลไหน ให้เลือกสกิลที่ **แคบและตรงกับงานที่สุด** ก่อน แล้วค่อยเสริมด้วยสกิลกว้าง (เช่น `fullstack-guardian`, `impeccable`) เป็นตัวคุมภาพรวม

### 2.2 เงื่อนไขเลือกสกิลด้าน Design/UI

| สกิล | ใช้เมื่อ |
|---|---|
| `design-taste-frontend` | งานออกแบบ UI ทั่วไป เวอร์ชันหลัก (v2) ไม่มีข้อจำกัดสไตล์เฉพาะ |
| `design-taste-frontend-v1` | ต้องการความเข้ากันได้กับโปรเจกต์เดิมที่ใช้ระบบ v1 |
| `gpt-taste` | ต้องการ Layout ที่มีความหลากหลายสูง + ใช้ GSAP สำหรับ motion ที่ซับซ้อน |
| `high-end-visual-design` | โจทย์คือแบรนด์หรูหรา/พรีเมียม เน้น whitespace และ spring motion |
| `minimalist-ui` | โจทย์อ้างถึง Notion/Linear หรือขอความมินิมอล โทนสีจำกัด |
| `industrial-brutalist-ui` | โจทย์ขอสไตล์ Brutalist/high-contrast/Swiss layout |
| `stitch-design-taste` | ทีมใช้มาตรฐาน Google Stitch หรือมีระบบต้องการไฟล์ `DESIGN.md` |
| `image-to-code` | มี mockup เป็นรูปภาพและต้องแปลงเป็นโค้ด |
| `redesign-existing-projects` | มีโค้ด UI เดิมอยู่แล้ว ต้องการปรับ spacing/hierarchy โดยไม่รื้อทั้งหมด |
| `impeccable` | ต้องการ audit design system ทั้งระบบ หรือวางระบบ design token |
| `emil-design-eng` | โจทย์อ้างถึงสไตล์ Vercel/Linear เน้น engineering + motion ที่ประณีต |
| `apple-design` | โจทย์อ้างถึงแนวทาง Apple/WWDC หรือแอป iOS/macOS |
| `full-output-enforcement` | ทุกครั้งที่ต้องส่งโค้ดตัวเต็ม ห้ามตัดทอน (ใช้ร่วมกับสกิลอื่นได้เสมอ ไม่ใช่สกิลทดแทน) |

### 2.3 เงื่อนไขเลือกสกิล Language / Framework / Infra

- เลือก **Language Specialist** ตามภาษาไฟล์หลักที่ตรวจพบ (เช่นพบ `.tsx`/`tsconfig.json` → `typescript-pro`; พบ `requirements.txt`/`pyproject.toml` → `python-pro`)
- เลือก **Backend Framework skill** ตาม dependency ที่ประกาศไว้ (เช่น `@nestjs/core` → `nestjs-expert`, `django` → `django-expert`)
- เลือก **Frontend/Mobile skill** ตามเฟรมเวิร์ก UI ที่ใช้จริง ไม่ใช่ตามภาษาเพียงอย่างเดียว (React ธรรมดา → `react-expert`, มี `next.config.*` → `nextjs-developer`)
- **Infra/Cloud skills** ใช้เฉพาะตอนมีงาน provisioning/deploy จริง ไม่ใช้ระหว่างเขียนฟีเจอร์ปกติ
- **API & Architecture skills** (`feature-forge`, `architecture-designer`, `spec-miner` ฯลฯ) ใช้ในช่วงต้นของงานใหม่ ก่อนเริ่มเขียนโค้ด
- **Specialized skills** (`legacy-modernizer`, `embedded-systems`, `game-developer` ฯลฯ) ใช้เฉพาะเมื่อโดเมนของงานตรงกับชื่อสกิลเท่านั้น ไม่ใช้แทนสกิลทั่วไป

---

## 3. Core Execution Workflows (ตัวอย่างแนวทาง — ปรับได้ตามหน้างานจริง)

> Workflow ด้านล่างเป็น **template ตัวอย่าง** ไม่ใช่ลำดับที่ต้องทำตามทุกครั้งเป๊ะๆ สามารถข้ามสเต็ปที่ไม่จำเป็น รวมสองสเต็ปเข้าด้วยกัน หรือเรียกหลายสกิลพร้อมกันในสเต็ปเดียวได้ตามเงื่อนไขในหัวข้อ 2

### Workflow 1: New Feature Development Pipeline
**ใช้เมื่อ**: ได้รับโจทย์สร้างหน้าใหม่ เพิ่ม module ใหม่ หรือพัฒนาฟีเจอร์ตั้งแต่เริ่มต้น

```text
[Step 1: Spec]       -> fullstack-dev-skills:feature-forge
                         (+ spec-miner ถ้าโจทย์มาจาก doc/ticket ที่ต้องสกัด requirement)

[Step 2: Arch]       -> fullstack-dev-skills:architecture-designer
                         (ข้ามได้ถ้าเป็นฟีเจอร์เล็กที่ไม่กระทบโครงสร้างระบบ)

[Step 3: Build]      -> fullstack-dev-skills:fullstack-guardian
                         + [Language Specialist ที่ตรงกับ stack]
                         + [Backend/Frontend Framework skill ที่ตรงกับ stack]
                         (เรียกพร้อมกันได้ทั้งหมดในสเต็ปนี้)

[Step 4: UI/Design]  -> [เลือก 1 สกิล design ตามตาราง 2.2]
                         + emil-design-eng (ถ้าต้องการ motion คุณภาพสูงเสริม)
                         + find-animation-opportunities (ถ้ามีจุดที่น่าจะใส่ animation)

[Step 5: Testing]    -> fullstack-dev-skills:test-master
                         + fullstack-dev-skills:playwright-expert (ถ้ามี flow ที่ต้องทดสอบผ่าน browser)

[Step 6: Review]     -> fullstack-dev-skills:code-reviewer
                         + fullstack-dev-skills:security-reviewer (บังคับถ้าแตะ auth/payment/PII)

[Step 7: Deployment] -> fullstack-dev-skills:devops-engineer
                         + fullstack-dev-skills:monitoring-expert
```

## 2. UI/UX, Design Systems & Replication (ออกแบบ ปรับแต่ง UI และคัดลอกดีไซน์)

### Workflow: Google Stitch Replication & Theme-Preserved UX/UI Enhancement Pipeline
* **Context:** คัดลอกและยกระดับดีไซน์จาก Google Stitch มาเป็น Frontend Demo/Prototype ที่สมบูรณ์ โดย AI จะทำการสกัด Design Tokens (สี, ฟอนต์) และวิเคราะห์ปรับปรุงคุณภาพ UX/UI, Spacing, Visual Hierarchy ให้ดีขึ้นทันที พร้อมตรวจสอบว่าหน้าเว็บที่มีต้นแบบมานั้นครบถ้วนตาม Flow หรือไม่ หากไม่ครบ AI จะต้องสรุปรายการและถามผู้ใช้ก่อนเสมอว่าจะให้สร้างเฉพาะหน้าตามต้นแบบเป๊ะๆ หรือให้ช่วยสร้างหน้าอื่นๆ เพิ่มเติมจนครบจบในธีมเดิม ก่อนเริ่มพัฒนา Components
[Phase 1: Stitch Extraction & Coverage Audit] -> stitch-design-taste + copydesign-and-redesign-existing-projects + impeccable + fullstack-dev-skills:spec-miner
[Phase 2: Theme System & UX/UI Upgrade]      -> design-taste-frontend + fullstack-dev-skills:nextjs-developer + fullstack-dev-skills:typescript-pro
[Phase 3: Interactive Mock & Page Extension]  -> fullstack-dev-skills:fullstack-guardian + emil-design-eng
[Phase 4: Motion Polish & Visual QA]          -> find-animation-opportunities + animation-vocabulary + fullstack-dev-skills:playwright-expert + review-animations

### Workflow: Theme-Preserved UI/UX Enhancement Pipeline
* **Context:** ปรับปรุง UI/UX โดยคงธีมเดิม 100% โดย AI จะต้องแสดงรายการ Design Tokens (สี, ฟอนต์) ที่ดึงได้จากหน้าเดิมให้ผู้ใช้ตรวจสอบความถูกต้องก่อนเริ่มปรับปรุงโครงสร้าง Layout
[Phase 1: Design System Audit] -> copydesign-and-redesign-existing-projects + impeccable
[Phase 2: Layout & UX Upgrade] -> design-taste-frontend + fullstack-dev-skills:nextjs-developer
[Phase 3: Motion & Polish]      -> find-animation-opportunities + emil-design-eng + animation-vocabulary
[Phase 4: Visual QA & Audit]    -> fullstack-dev-skills:playwright-expert + review-animations

### Workflow: Theme-Consistent UI Enhancement & Page Extension Pipeline
* **Context:** แก้ไขดีไซน์หรือเพิ่มหน้าใหม่โดยรักษาธีมเดิม โดย AI จะต้องสอบถามเป้าหมายของหน้าใหม่ เสนอ Wireframe/Layout คร่าวๆ ให้ผู้ใช้เห็นชอบก่อนลงมือสร้าง Components
[Phase 1: Design System Extraction] -> copydesign-and-redesign-existing-projects + impeccable
[Phase 2: UI Extension & Component Build] -> design-taste-frontend + fullstack-dev-skills:nextjs-developer
[Phase 3: Motion Alignment] -> find-animation-opportunities + emil-design-eng + animation-vocabulary
[Phase 4: Visual Consistency QA] -> fullstack-dev-skills:playwright-expert + review-animations

---

## 3. Full-Stack Modernization & Tech Migration (ต่อยอดหลังบ้านและย้าย Tech Stack)

### Workflow: Full-Stack Promotion & Backend Audit Pipeline
* **Context:** แปลงระบบ Frontend Mock ให้เป็น Full-Stack Production โดย AI จะต้องทำการตรวจสอบ (Audit) โค้ดหลังบ้านเดิมก่อนเสมอ (ถ้ามี Mock API / Logic หลังบ้านอยู่แล้ว ให้ปรับปรุงระบบความปลอดภัย ปรับโครงสร้าง DB และเขียนต่อจากเดิม แต่ถ้าไม่มี ให้เสนอทางเลือกและสร้างใหม่) โดยทำการเปรียบเทียบ Tech Stack/Framework/Auth เสนอข้อดี-ข้อเสีย แล้วถามผู้ใช้เพื่ออนุมัติก่อนลงมือเขียนโค้ดเสมอ
[Phase 1: Existing Code Audit & Tech Stack Selection] -> fullstack-dev-skills:code-reviewer + fullstack-dev-skills:architecture-designer + fullstack-dev-skills:api-designer
[Phase 2: Database Modeling & Auth Hardening]        -> fullstack-dev-skills:postgres-pro + fullstack-dev-skills:secure-code-guardian
[Phase 3: Core Business Logic & Migration]           -> fullstack-dev-skills:fullstack-guardian + [Chosen Framework Skill]
[Phase 4: Real-Data Integration & Testing]           -> fullstack-dev-skills:test-master + fullstack-dev-skills:playwright-expert
[Phase 5: Security & Production Readiness]           -> fullstack-dev-skills:security-reviewer + fullstack-dev-skills:devops-engineer

### Workflow: Tech Stack Migration & Refactoring Pipeline
* **Context:** ย้ายโปรเจกต์ไปยัง Tech Stack ใหม่ โดย AI จะต้องวิเคราะห์เสนอเปรียบเทียบ Framework เก่า vs ใหม่ อธิบายผลกระทบ และถามยืนยันแผนการย้าย (Migration Plan) กับผู้ใช้ก่อนลงมือแปลงโค้ด
[Phase 1: Codebase Audit]    -> fullstack-dev-skills:legacy-modernizer + fullstack-dev-skills:spec-miner
[Phase 2: Target Arch Plan]  -> fullstack-dev-skills:architecture-designer
[Phase 3: Migration Execution]-> fullstack-dev-skills:fullstack-guardian + [Target Stack Skill] + fullstack-dev-skills:typescript-pro
[Phase 4: Feature Parity QA] -> fullstack-dev-skills:test-master + fullstack-dev-skills:playwright-expert
[Phase 5: Code Review]       -> fullstack-dev-skills:code-reviewer

---

## 4. Specialized Feature Pipelines (ฟีเจอร์เฉพาะทาง)

### Workflow: E-Commerce Customer Profile Dashboard Pipeline
* **Context:** พัฒนาระบบโปรไฟล์ลูกค้ารวมสำหรับ E-commerce โดย AI จะต้องถามผู้ใช้ว่าต้องการเปิดใช้งานเมนูย่อยใดบ้าง (Orders, Wishlist, Addresses ฯลฯ) และตกลงเรื่อง Authentication Flow ก่อนลงมือพัฒนา
[Phase 1: DB & Auth Schema Setup] -> fullstack-dev-skills:postgres-pro + fullstack-dev-skills:api-designer
[Phase 2: Dashboard UI & Layout]  -> impeccable + design-taste-frontend + fullstack-dev-skills:nextjs-developer
[Phase 3: Integration & Security] -> fullstack-dev-skills:fullstack-guardian + fullstack-dev-skills:secure-code-guardian + stripe:stripe-docs
[Phase 4: State, Micro-UI & QA]  -> emil-design-eng + fullstack-dev-skills:test-master

---

## 5. Audit, Security & Optimization (ตรวจสอบและเพิ่มประสิทธิภาพ)

### Workflow: Security & Hardening Audit Pipeline
* **Context:** ตรวจสอบความปลอดภัยตามมาตรฐาน OWASP โดย AI จะต้องสอบถามขอบเขตการสแกน (Scope of Audit) และแจ้งรายการจุดเสี่ยงที่พบเพื่อให้ผู้ใช้เลือกปรับแก้เป็นรายข้อ
[Step 1: Audit Code] -> fullstack-dev-skills:security-reviewer
[Step 2: Stress Test]-> fullstack-dev-skills:the-fool
[Step 3: Hardening]  -> fullstack-dev-skills:secure-code-guardian

### Workflow: Animation & Responsive Design Audit
* **Context:** ตรวจสอบความเรียบร้อยของ Responsive Layout และ Motion โดย AI จะต้องถามผู้ใช้เกี่ยวกับระดับความซับซ้อนของ Animation ที่ต้องการ และอุปกรณ์หลัก (Mobile/Desktop) ที่ต้องการเน้นเป็นพิเศษก่อนเริ่มปรับแต่ง
[Phase 1: Responsive Audit] -> impeccable + design-taste-frontend
[Phase 2: Motion Discovery] -> find-animation-opportunities
[Phase 3: Motion Polish]    -> animation-vocabulary + emil-design-eng
[Phase 4: Multi-Device QA]  -> fullstack-dev-skills:playwright-expert

### Workflow: Full-Stack Technical & On-Page SEO Optimization
* **Context:** ปรับแต่งโครงสร้าง SEO และ Metadata โดย AI จะต้องสอบถาม Keywords หลัก ข้อมูล Open Graph และเป้าหมายทางธุรกิจจากผู้ใช้ก่อนลงมือสร้าง Schema.org และ Dynamic Meta Tags
[Phase 1: Technical & Semantic Setup] -> impeccable + fullstack-dev-skills:nextjs-developer
[Phase 2: Structured Data & Social]    -> fullstack-dev-skills:seo-specialist
[Phase 3: Core Web Vitals & Assets]   -> design-taste-frontend
[Phase 4: Automated SEO Audit & QA]   -> fullstack-dev-skills:playwright-expert