import { useEffect, useRef, useState } from 'react';
import { patchKinds } from '../data/patches.js';

export const LAST_SPREAD = 6;
const TURN_DURATION = 1000;
const PATCH_LIMIT = 80;

export function useJournal() {
  const [spread, setSpread] = useState(0);
  const [previous, setPrevious] = useState(null);
  const [direction, setDirection] = useState('next');
  const [selectedPatch, setSelectedPatch] = useState(null);
  const [placedPatches, setPlacedPatches] = useState([]);
  const turnTimer = useRef(null);
  const turning = useRef(false);
  const nextPatchId = useRef(0);

  useEffect(() => () => clearTimeout(turnTimer.current), []);

  function goTo(nextSpread) {
    if (turning.current || nextSpread < 0 || nextSpread > LAST_SPREAD) return;
    turning.current = true;
    setPrevious(spread);
    setDirection(nextSpread > spread ? 'next' : 'prev');
    setSpread(nextSpread);
    turnTimer.current = setTimeout(() => {
      setPrevious(null);
      turning.current = false;
    }, TURN_DURATION);
  }

  function togglePatch(id) {
    setSelectedPatch((current) => (current === id ? null : id));
  }

  function placePatch(event) {
    const patch = patchKinds.find((item) => item.id === selectedPatch);
    if (!patch) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const placed = {
      id: nextPatchId.current++,
      kind: patch.id,
      spread,
      x: Math.round(event.clientX - bounds.left - patch.width / 2),
      y: Math.round(event.clientY - bounds.top - patch.height / 2),
      rotation: Math.round(Math.random() * 24 - 12),
    };
    setPlacedPatches((current) => [...current, placed].slice(-PATCH_LIMIT));
  }

  function spreadClass(index) {
    if (previous === null) return 'spread';
    const coverTransition = spread === 0 || previous === 0 ? ' nf' : '';
    return `spread ${index === spread ? 'cur' : 'old'} ${direction}${coverTransition}`;
  }

  return {
    spread,
    previous,
    goTo,
    spreadClass,
    selectedPatch,
    togglePatch,
    placePatch,
    placedPatches,
    clearPatches: () => setPlacedPatches([]),
  };
}
