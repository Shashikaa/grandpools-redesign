/** The retained scroll engine reads these serialized attributes from the DOM.
 * Keep positions in the section components; don't introduce a second scroller. */
export function motionData(value: unknown): string {
  return JSON.stringify(value);
}
