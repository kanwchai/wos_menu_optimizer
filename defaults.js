const DEFAULT_INGREDIENTS = [
  { name: 'แกะ' }, { name: 'พริก' }, { name: 'เนย' },
  { name: 'ไวท์ช็อค' }, { name: 'ไข่' }, { name: 'แป้ง' },
  { name: 'เห็ด' }, { name: 'ชีส' }, { name: 'มะเขือเทศ' },
  { name: 'ปลา' }, { name: 'เกลือ' }, { name: 'ไก่' },
];

const DEFAULT_STOCK = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];

const DEFAULT_MENUS = [
  { name: 'ซี่โครงแกะ', score: 40, recipe: [2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { name: 'เค้ก', score: 40, recipe: [0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0] },
  { name: 'แรปเห็ด', score: 40, recipe: [0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0] },
  { name: 'มะเขือเทศอบ', score: 40, recipe: [0, 0, 0, 0, 1, 0, 0, 1, 2, 0, 0, 0] },
  { name: 'ปลาย่าง', score: 40, recipe: [0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 1, 0] },
  { name: 'ไก่ย่าง', score: 40, recipe: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2] },
];

const DEFAULT_MAX_ADD = 50;
