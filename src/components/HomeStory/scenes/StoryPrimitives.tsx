import type { CSSProperties } from 'react';

export const MQ_XL = '(min-width: 1920px) and (min-height: 700px)';
export const MQ_LG = '(min-width: 1440px) and (min-height: 700px)';
export const MQ_MD = '(min-width: 1200px) and (min-height: 500px)';
export const MQ_SM =
  '(min-width: 568px) and (max-aspect-ratio: 13 / 9), (min-width: 668px) and (min-height: 416px), (min-width: 980px)';

/**
 * Reusable rolling character link matching the exact DOM structure expected by
 * `.button-roll` and `.button-roll-char` styles.
 */
export function StoryRollingLink({
  href,
  label,
  preventAjax = false,
  className = 'group btn-underline font-body gp-original-button',
}: {
  href: string;
  label: string;
  preventAjax?: boolean;
  className?: string;
}) {
  const chars = Array.from(label.toUpperCase());
  return (
    <a
      className={className}
      href={href}
      {...(preventAjax ? { 'data-ajax-page-ignore': 'true', 'data-barba-prevent': 'all' } : {})}
    >
      <span className="button-roll" aria-label={label}>
        <span aria-hidden="true">
          {chars.map((char, index) => (
            <span
              key={index}
              className="button-roll-char"
              style={{ '--char-delay': `${index * 0.012}s` } as CSSProperties}
            >
              {char}
            </span>
          ))}
        </span>
      </span>
    </a>
  );
}
