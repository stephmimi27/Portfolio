// Each patch is a frame in public/assets/patches.svg, left to right.
export const patchKinds = [
  'Apple',
  'Apple core',
  'Four-leaf clover',
  'Bow',
  'Heart',
  'Star',
  'Koi',
  'Leaf',
].map((name, index) => ({
  id: `patch-${index}`,
  name,
  label: `${name} patch`,
  frame: index,
  width: 64,
  height: 64,
}));

patchKinds.push({
  id: 'tape',
  name: 'Washi tape',
  label: 'Washi tape',
  frame: null,
  width: 100,
  height: 24,
  background:
    'repeating-linear-gradient(90deg,rgba(255,255,255,.4) 0 6px,transparent 6px 12px),#b8cfa8',
});
