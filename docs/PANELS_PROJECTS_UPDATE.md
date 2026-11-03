# Panels, project synchronization and mobile type update

Mobile Quality, Expert and App share a bounded wrapper. Quality's gallery can
hold while Expert rises over it, but the wrapper ends before Projects/pricing.
Expert then translates upward inside the held view, exposing App underneath.
Tall App content receives its measured overflow distance before Projects enters.
Reduced motion keeps these panels in ordinary document flow.

MobileProjects owns one active React index, like PricingControls. A swipe or
project-name selection changes the title, category, paragraph and project link
together without the old contentAnimation caption transition. Name controls use
the same compact underline/line-height treatment as pricing controls; the old
62px distributed layout was removed.

Desktop hero holding is now owned by hero-hold.ts. Its legacy sticky attributes
are removed before runtime initialization, so two controllers cannot alternate
between lifting it and holding it. The hero remains stationary while the incoming
Process mask reveals the second section.

Desktop project masks, captions and progress share desktop-projects.ts. Five
photo stops are at 2, 3, 4, 5 and 6 viewports into the project scene. Captions
switch at the incoming photo's midpoint; forward and reverse use the same beats.
The legacy photo/pattern animation is not installed on those photo surfaces.

Mobile body copy is at least 16px in the homepage. Eyebrows, project-name controls
and button labels use 10px. Display headings retain their larger sizes.

Validation: TypeScript, homepage asset checks, all 31 motion/component tests and
the 21-route production build passed. Browser checks at 393 × 852 confirmed
Expert bottom = 0 and App top = 0 after the lift; the App is the hit-tested
foreground. The mobile controls use 10px labels and 4px bottom padding; selected
description is 16px and caption animation is none. A rendered-text audit found
no body text below 16px outside eyebrow/button labels. Pricing remains visible
after the bounded sequence. At 1363 × 852 the hero layer stayed at 0 while the
page advanced 426px. Desktop stops at 2/3/4/5/6 viewports selected Camberwell,
Dennett St Carrum, Murray St Prahran, Reay Rd Mooroolbark and Toorak Penthouse,
with matching photo masks; reverse travel restored project 2 correctly.
