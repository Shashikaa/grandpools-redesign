/** Grand Pools content retained from the existing homepage. */
export const POOL_COST_BANDS = [
  { label: 'Standard', range: '$80k – $120k', spec: '8 x 4m, fully tiled', description: 'A full residential build with quality finishes and in-house construction.', length: 8, width: 4, spa: false },
  { label: 'Expanded', range: '$120k – $160k', spec: '10 x 5m or larger footprints', description: 'More water volume, feature finishes and upgraded plant packages.', length: 10, width: 5, spa: false },
  { label: 'Premium', range: '$160k+', spec: 'Spa, infinity edge or custom shape', description: 'Architectural forms, imported tiles, automated covers and resort-level spec.', length: 12, width: 6, spa: true },
] as const;
