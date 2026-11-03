/* Retained motion patterns with a data-driven Grand Pools project collection. */
window.__gpConfigureMotion = function ($) {
  $.fn.parallax.patterns.gpProcessWorkspace = {
    enableMq:'md-up', clamp:true, measureSelector:'#about',
    parallax() {
      const vh=innerHeight, end=Math.min(0,vh*.65-this.$container.outerHeight());
      return {'parallax--130-0':{transform:`translateY(${vh}px)`,opacity:0},
        'parallax--170-0':{transform:`translateY(${vh*.70}px)`,opacity:1},
        'parallax--360-0':{transform:`translateY(${end}px)`,opacity:1},
        'parallax--430-0':{transform:`translateY(${end}px)`,opacity:1}};
    }
  };
  const count = Number(document.querySelector('[data-project-count]')?.dataset.projectCount || 1);
  $.fn.parallax.patterns.residencesSlide = {
    enableMq: 'md-up', clamp: true,
    'parallax--200-0': { progress: 0 },
    [`parallax--${(count + 1) * 100}-0`]: { progress: 1 },
    update() {
      const slider = this.$slider || (this.$slider = $('.js-residences-content'));
      const progress = Math.max(0, Math.min(1, this.position));
      const index = Math.min(count - 1, Math.floor(progress * Math.max(1, count - 1) + 0.001));
      $('.js-residences-progress-line').css('width', `${progress * 100}%`);
      if (this.isItemActive !== index) {
        this.isItemActive = index;
        slider.contentAnimation('open', index + 1);
      }
    },
  };
};
