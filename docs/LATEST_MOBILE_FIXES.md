# Latest repository mobile corrections

Based on Shashikaa/grandpools-redesign commit
584848b71c405ca575043a069bc0a64b162cf4cc (3 November 2026).

Section 2 now uses one CSS-sticky viewport with three layered panels. Scrolling
raises the founder panel above the opening photo, traverses any founder content
taller than the viewport, then lifts that panel completely away to expose the
service gallery underneath. The next viewport holds the gallery while Designed
for Stillness rises above it. Height is calculated from the actual two content
panels, rather than clipping a tall founder panel to one screen. Native touch
scrolling remains the input owner, and reverse scrolling reverses the sequence.

Quality's mobile prose card has 20px exterior gutters and 24px interior padding.
The Expert section holds behind the incoming App section; their surfaces rise on
entry. The project intro has a dark gradient overlay. Its z-index is lower than
the incoming project gallery, resolving the gallery being covered by the intro.

The active homepage remains React/TSX. Unused alternative scene drafts and old
HTML templates from upstream are preserved in reference/inactive-scene-draft.zip.
They are not imported by the active homepage. The draft imported missing content
constants and prevented the upstream project from typechecking.

Validation: TypeScript check, homepage assets/connections, 31 motion/component
tests and the production build (21 generated routes) passed. Browser verification
notes are included with the delivery; physical-device touch feel is not measured
by the automated checks. Desktop layout rules were not changed for this update.

Production browser checks at 393 × 852: process panel 2 top = 0 at its cover
checkpoint; after it lifts, panel 2 bottom = 0 and panel 3 top = 0, with
Stillness entering at 852px. Quality card exterior gutters = 20px each.
The project gallery is above its intro (z-index 2 versus 0), receives hit tests
and changes to Dennett St Carrum when selected.
