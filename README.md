# WOS Menu Optimizer

เว็บแอปสำหรับวางแผนเมนูอาหารให้ได้คะแนนสูงสุด โดยใช้ **Integer Linear Programming (ILP)**

## การใช้งาน

1. กรอก **คงเหลือ** ของวัตถุดิบแต่ละชนิด
2. กรอก **สูตรอาหาร** (จำนวนวัตถุดิบต่อจาน) ของแต่ละเมนู
3. ตั้งค่า **ขอเพิ่มวัตถุดิบรวมได้ไม่เกิน** (default: 50 หน่วย)
4. กด **▶ คำนวณ LP** เพื่อหาจำนวนจานที่เหมาะสมที่สุด
5. กรอก **ทำแล้ว** เพื่อติดตามจานที่ทำเสร็จแล้ว — คะแนนรวมจะอัพเดตอัตโนมัติ

## Features

- **Integer Linear Programming** — หาคำตอบที่ดีที่สุดด้วย `javascript-lp-solver`
- **วัตถุดิบแบบ dynamic** — เพิ่ม/ลบวัตถุดิบและเมนูได้อิสระ
- **ขอเพิ่มวัตถุดิบ** — LP จะเลือกเองว่าควรขอเพิ่มวัตถุดิบใดและเท่าไหร่ (ภายในขีดจำกัดที่กำหนด)
- **ติดตาม "ทำแล้ว"** — บันทึกจานที่ทำเสร็จแล้ว แยกจากผล LP
- **คะแนนรวม real-time** — รวมจาน LP + ทำแล้ว และคำนวณคะแนนทันที
- **บันทึกอัตโนมัติ** — ข้อมูลทั้งหมดเก็บใน localStorage ไม่หายเมื่อรีเฟรช

## LP Formulation

**ตัวแปร:**
- `x_i` = จำนวนจานของเมนู i (integer ≥ 0)
- `z_j` = จำนวนวัตถุดิบ j ที่ขอเพิ่ม (integer ≥ 0)

**Objective:** maximize Σ score_i × x_i

**Constraints:**
- Σ recipe[i][j] × x_i − z_j ≤ stock[j]  (ต่อทุก ingredient j)
- Σ z_j ≤ maxAdd

## Tech Stack

| ส่วน | เทคโนโลยี |
|------|-----------|
| Frontend | HTML / CSS / Vanilla JS |
| LP Solver | [javascript-lp-solver](https://github.com/JWally/jsLPSolver) (CDN) |
| Persistence | localStorage |
| Deploy | Single HTML file — ไม่ต้องติดตั้ง |
