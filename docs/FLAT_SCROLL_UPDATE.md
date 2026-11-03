# Flat slide transitions and gallery repair

This update keeps mobile panel movement to vertical translation. It removes
mobile background zoom/counter-motion, caption fades, copy movement and rolling
button characters. Section 2 keeps its layered sequence; Quality's complete
intro and detail surfaces slide as units, with static text inside each surface.

Quality's photo gallery now has one React selected index for its native horizontal
track, pagination and caption. Captions change directly without a character or
crossfade animation. All caption slots share one measured grid cell so longer
text does not collide with the image or change the gallery height while swiping.
The gallery is in normal flow inside the opening story; it cannot remain sticky
across Projects or cover the later pool-cost content.

The hero and Process are adjacent DOM siblings again, restoring the desktop
under-previous reveal selector. The first four unique collage photographs are
preloaded, collage images are eager rather than low-priority, and images do not
wait for the appear plugin to become visible. The authored collage masks remain.

Desktop Expert/App share a held viewport. Expert lifts by one viewport to uncover
App beneath it. Projects then rises over App in the following viewport. Their
snap points are measured from the group root so the sticky child's current
position cannot move a snap destination during refresh.

No content or unrelated routes are redesigned. The project remains based on
Shashikaa/grandpools-redesign commit 584848b plus the subsequent fixes in this
conversation. Extract to a fresh folder and install with npm ci.

Verification: production build and all 31 checks pass. At 393 × 852 the
Quality gallery is relative (not sticky), has no legacy animation controller,
and displays exactly one caption at a fixed 152px caption height. The pool-cost
intro is the visible foreground at its reading position; Expanded pricing
selection updates correctly. At 1363 × 852 Expert bottom = 0, App top = 0
and Projects top = 852 after the first handoff; after the next viewport,
App stays at 0 while Projects reaches 0 and becomes the visible foreground.
Hero is immediately followed by Process in the DOM, with Process at its original
desktop top offset of 0.
