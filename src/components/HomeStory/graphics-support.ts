let supported: boolean | undefined;

/** Probe once, before eagerly mounting the desktop water scene. */
export function canUseHomeWebGL() {
  if (supported !== undefined) return supported;
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl2');
    supported = Boolean(context);
    context?.getExtension('WEBGL_lose_context')?.loseContext();
  } catch { supported = false; }
  return supported;
}
