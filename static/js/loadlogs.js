// js/loadlogs.js

// Track which essay is currently displayed
let currentIndex = 0;

// Full list of all your essay filenames, in order newest-to-oldest
const logFiles = [
  'digital-climatization.html',
  'throwing-cakes-at-walls.html',
  'cognography-not-geography.html',
  'total-fragmentation.html',
  'cognitive-manipulation-chapter-1.html',
  'cognitive-manipulation-chapter-2.html',
  'cognitive-manipulation-chapter-3.html',
  'cognitive-manipulation-chapter-4.html',
  'when-the-foundation-breaks.html',
  'riding-without-a-helmet.html',
  'ipope-266.html',
  'innovation-fatigue.html',
  'durian-cappuccino.html',
  'devourers.html',
  'the-diminishing-returns-of-creativity.html',
  'the-algorithm-isn’t-broken.html',
  'the-megtrick.html',
  'space-is-not-inclusive.html',
  'tariffvision.html',
  'the-trump-landfill.html',
  'im-talking-to-an-empty-telephone.html',
  'emotion-mining.html',
  'logical-empathy.html',
  'the-real-test.html',
  'everest-level-hypocrisy.html',
  'rage-against-capitalism.html',
  'off-gridsman.html',
  'perception.html',
  'the-industrial-level-hair-manufacturers.html',
  'alien.html',
  'coming-soon-the-east.html',
  'coming-soon-the-west.html',
  'mattress.html',
  'message-in-the-bottle.html',
  'unclouding-cognition.html',
  'built-like-an-a-frame.html',
  'the-cavity-of-your-cognition.html',
  'why-i-write.html',
  'code-as-a-second-language-understanding-the-back-end-of-reality.html',
  'flying.html',
  'fuck-your-performative-empathy.html',
  'just-re-simulating-the-same-old-architecture-again-and-again.html',
  'manufactured-wanderers-a-week-in-ho-chi-minh-city.html',
  'redefining-geography-a-cognitive-infrastructure-for-the-future.html',
  'the-age-of-affiliation.html',
  'why-its-less-lonely-to-work-with-ai.html',
  'aero-chapel-is-not-dead-its-just-not-a-blog-anymore.html',
  'the-death-of-static-text-why-expression-will-soon-be-alive.html',
  'the-diminishing-return-of-the-external-world.html',
  'my-friend-json.html',
  'chart-your-uncharted.html',
  'the-depths-of-attention-who-rises-and-who-sinks-in-the-modern-attention-economy.html',
  'the-installation-game.html',
  'ambiversion-the-missing-middle-ground-in-personality-typing.html',
  'cognitive-inclusivity-why-bodin-is-better-than-mbti.html',
  'cognitive-inclusivity-the-struggles-of-being-an-intj-in-the-world.html',
  'rendering-yourself-obsolete.html',
  'selling-out-the-elderly-a-nation-that-betrays-its-own.html',
  'your-stance-is-meaningless.html',
  'birdocracy.html',
  'the-multifaceted-impact-of-tool-hygiene.html',
  'the-seven-deadly-sins-of-ai-collaboration-a-guide-to-ethical-usage.html',
  'indiana-jones-and-his-temple-of-contradictions.html',
  'the-transitions-that-nobody-is-talking-about.html',
  'the-warmth-of-solitude.html',
  'mutually-assured-destruction-of-talking.html',
  'offshore-observations-part-3-the-pale-people.html',
  'purpose.html',
  'reality-2-0-part-1.html',
  'reality-2-0-part-2.html',
  'the-binary-of-non-binary.html',
  'the-globalization-of-paris-syndrome-part-1.html',
  'the-globalization-of-paris-syndrome-part-2.html',
  'altmanatum.html',
  'deepseek-is-not-the-killer-whale-the-media-told-us.html',
  'control-z-the-undo-administration.html',
  'manufacturing-artificial-resistance-to-remain-relevant.html',
  'aero-chapels-essential-11-tracks.html',
  'merit-based-citizenship.html',
  'check-your-neighbors-system-update.html',
  'the-golden-age-of-baking.html',
  'make-grandparents-great-again.html',
  'quiet-sustainability.html',
  'why-nobody-cares-about-your-in-betweening.html',
  'jurassic-park.html',
  'karoline-leavitt-a-return-to-true-female-strength.html',
  'tariffic-part-2.html',
  'tariffic-part-1.html',
  'aerochapels-essential-11-films.html',
  'parasite.html',
  'yes-and-no.html',
  'tiktok-to-obsolescence.html',
  'offshore-observations-part-2-vellfireworks.html',
  'from-the-deep-state-to-the-deep-seek.html',
  'warming-down-the-mind.html',
  'hit-round-the-head-with-an-ipad.html',
  'the-four-seasons-of-creativity.html',
  'the-forgotten-foundation-why-cognitive-psychology-should-be-taught-in-schools.html',
  'if-the-left-want-to-be-truly-inclusive-they-should-add-republicans-to-their-long-list-of-pronouns.html',
  'social-media-is-not-the-internet.html',
  'the-preservation-of-optimism.html',
  'the-inauguration-of-common-sense.html',
  'the-hare-and-the-tortoise-of-meritocracy.html',
  'where-is-your-grey-area.html',
  'only-god-knows-who-you-identify-as.html',
  'the-corrupted-partition.html',
  'christ-is-your-creative-director.html',
  'what-constitutes-effort.html',
  'manufactured-busyness.html',
  'suspended-between-two-worlds.html',
  'building-towers-upside-down.html',
  'minted-in-christ.html',
  'rebooting-nationality.html',
  'imperfectioneers.html',
  'bidirectional-migration.html',
  'imagination-spans.html',
  'self-imposed-constraints.html',
  'remote-viewing.html',
  'impartiality.html',
  'sanding-with-the-grain.html',
  'object-permanence.html',
  'mars-is-not-enough.html',
  'attention-consumerism.html',
  'christs-ar.html',
  'disciples-of-an-algorithm.html',
  'timeline.html',
  'insulation-theory.html',
  'reset-to-factory-settings.html',
  'living-aerodynamics.html',
  'a-perfect-circle.html',
  'the-adam-and-eve-of-weightlifting.html',
  'the-topology-of-sin.html',
  'peloton.html',
  'when-the-heart-becomes-aerodynamic.html',
  'system-update.html',
  'the-wide-angle-lens-of-christ.html',
  'why-you-should-project-off-world.html',
  'payload.html',
  'failsafe.html',
  'hi-x-ai.html',
  'id-like-a-supersized-grille-please.html',
  'going-away.html',
  'retraining-your-mother-tongue.html',
  'red-card-wins.html',
  'robert-de-niro-the-illusion-of-greatness.html',
  'lifting-with-costochondritis.html',
  'oppenhyper.html',
  'offshore-observations-part-2-the-upper-echelon-of-gated-communities.html',
  'gerry-mcgovern-jaguars-human-caption.html',
  'baizuo.html',
  'pilot.html'
];

// Fetch and display the essay at `index`
function loadLog(index) {
  currentIndex = index;
  const file = logFiles[index];

  window.scrollTo({ top: 0, behavior: 'instant' });

  fetch(`logs/${file}`)
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const content = doc.querySelector('.log')?.innerHTML || doc.body.innerHTML;

      const container = document.getElementById('log-container');
      container.innerHTML = '';

      const wrapper = document.createElement('div');
      wrapper.className = 'log mb-24';
      wrapper.id = `log-${index}`;
      wrapper.innerHTML = content;
      container.appendChild(wrapper);

      // Force consistent inline date styling, including generic p.date fallback
      wrapper.querySelectorAll('time, .date, .post-date, .log-date, small, p.text-sm.text-gray-500')
        .forEach(el => {
          el.style.display = 'block';
          el.style.textAlign = 'center';
          el.style.color = '#BB9040';
          el.style.fontSize = '0.9rem';
          el.style.marginBottom = '2em';
          el.style.fontFamily = "'EBGaramond12-Regular', serif";
        });

      const moreBtn = document.createElement('button');
      moreBtn.id = 'open-logs-button';
      moreBtn.textContent = 'Read More';
      Object.assign(moreBtn.style, {
        display: 'block',
        margin: '2rem auto',
        padding: '0.5rem 1rem',
        fontFamily: "'EBGaramond12-Regular', serif",
        letterSpacing: '3px',
        textTransform: 'uppercase',
        background: '#1F1A17',
        color: '#FFF',
        border: 'none',
        cursor: 'pointer'
      });
      wrapper.after(moreBtn);

      moreBtn.addEventListener('click', () =>
        document.getElementById('log-overlay').classList.add('open')
      );
    })
    .catch(err => console.error('Error loading log:', err));
}

// Populate the overlay sidebar with all titles
function populateSidebar() {
  const listEl = document.getElementById('sidebar-list');
  listEl.innerHTML = '';
  logFiles.forEach((file, i) => {
    const title = file
      .replace('.html', '')
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    const a = document.createElement('a');
    a.textContent = title;
    a.href = '#';
    a.dataset.index = i;
    listEl.appendChild(a);
  });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  loadLog(0);
  populateSidebar();

  document.getElementById('close-overlay').addEventListener('click', () =>
    document.getElementById('log-overlay').classList.remove('open')
  );

  document.getElementById('sidebar-list').addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const idx = parseInt(e.target.dataset.index, 10);
      document.getElementById('log-overlay').classList.remove('open');
      loadLog(idx);
    }
  });
});
