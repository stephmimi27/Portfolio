export function patchStyle(patch, { scale = 1, position } = {}) {
  const style = {
    width: Math.round(patch.width * scale),
    height: Math.round(patch.height * scale),
    display: 'block',
  };
  if (patch.frame !== null) {
    style.backgroundPosition = `${(patch.frame * 100) / 7}% 0`;
  } else {
    Object.assign(style, {
      background: patch.background,
      opacity: 0.95,
      boxShadow: '0 1px 3px rgba(74,63,53,.25)',
    });
  }
  if (position) {
    Object.assign(style, {
      position: 'absolute',
      left: position.x,
      top: position.y,
      transform: `rotate(${position.rotation}deg)`,
      pointerEvents: 'none',
      zIndex: 5,
    });
  }
  return style;
}

export default function Patch({ patch, scale, position }) {
  return (
    <div
      className={patch.frame === null ? undefined : 'sp'}
      style={patchStyle(patch, { scale, position })}
      aria-hidden="true"
      data-placed-patch={position ? patch.id : undefined}
    />
  );
}
