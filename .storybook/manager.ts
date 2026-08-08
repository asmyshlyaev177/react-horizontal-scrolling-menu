import { STORY_CHANGED, STORY_PREPARED } from 'storybook/internal/core-events';
import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

/**
 * The panel key `storybook-addon-code-editor` registers itself under. It isn't
 * exported from the package (only `.`, `./manager` and `./getStaticDirs` are),
 * so it's mirrored here from its `dist/constants.js`.
 */
const liveCodeEditorPanelId = 'liveCodeEditorPanel';
const controlsPanelId = 'addon-controls';

const navSize = 250;
const bottomPanelHeight = 300;
/** Half the window, but never under Storybook's own 270px panel minimum. */
const halfWidth = () => Math.max(270, Math.round(window.innerWidth / 2));

/**
 * Storybook merges these under a visitor's own persisted layout, so they act as
 * first-load defaults: switching to another panel sticks.
 *
 * `layout` and `ui` used to be passed as top-level keys; since Storybook 9 that
 * form logs a deprecation warning for every key.
 */
/** Branding only — everything else stays Storybook's stock light theme. */
const theme = create({
  base: 'light',
  brandTitle: 'react-horizontal-scrolling-menu',
  brandUrl:
    'https://react-horizontal-scrolling-menu.asmyshlyaev177.workers.dev',
});

addons.setConfig({
  theme,
  // Open on the live editor rather than Controls: this Storybook is the
  // library's demo, so editing the example is the point.
  selectedPanel: liveCodeEditorPanelId,
  layout: {
    panelPosition: 'right',
    navSize,
    rightPanelWidth: halfWidth(),
    // `showNav: true` / `showPanel: true` re-derive the two sizes above from
    // `recentVisibleSizes`, which is also what a hide/show toggle restores, so
    // the two have to agree or the panel snaps back to the 400px default.
    recentVisibleSizes: {
      navSize,
      rightPanelWidth: halfWidth(),
      bottomPanelHeight,
    },
    bottomPanelHeight,
    showNav: true,
    showPanel: true,
    showToolbar: true,
    initialActive: 'sidebar',
  },
  ui: {
    enableShortcuts: false,
  },
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
    // Hide the play-function-only `Test` stories from visitors. A sidebar
    // filter only affects the nav: the stories stay in the built index, so the
    // test runner still finds and runs them (unlike the `!dev` tag, which
    // would drop them from the index entirely).
    filters: {
      patterns: (item) => !item.tags?.includes('test-only'),
    },
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});

/**
 * `layout.rightPanelWidth` is a pixel value Storybook only reads once, so on its
 * own the panel stops being half the window as soon as the window is resized.
 * Re-derive it on resize to keep the split at 50/50 at any size.
 *
 * The trade-off is that resizing the window discards a width the visitor dragged
 * to themselves; on a demo Storybook the predictable half-and-half is worth more.
 */
addons.register('rhsm/panel-defaults', (api) => {
  let frame = 0;

  window.addEventListener('resize', () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      // Skip while the panel is hidden — any non-zero width would reopen it.
      if (api.getIsPanelShown()) {
        api.setSizes({ rightPanelWidth: halfWidth() });
      }
    });
  });

  // The editor panel only enables itself for stories built with
  // `makeLiveEditStory`; on the others (the `Test` stories) it is disabled, and
  // a selection pointing at a disabled panel renders an empty panel with no tab
  // highlighted. Swap to Controls there, and back again on the editor stories.
  const reconcileSelectedPanel = () => {
    const data = api.getCurrentStoryData();

    // `parameters` is only filled in once a story has been prepared. STORY_CHANGED
    // fires before that, so on a story's first visit the editor parameter reads as
    // absent — hence the second listener, and hence bailing out rather than
    // treating "not loaded yet" as "no editor". Docs entries never have a panel.
    if (data?.type !== 'story' || !data.parameters) {
      return;
    }

    const hasEditor = !!data.parameters.liveCodeEditor?.id;
    const selected = api.getSelectedPanel();

    if (!hasEditor && selected === liveCodeEditorPanelId) {
      api.setSelectedPanel(controlsPanelId);
    } else if (hasEditor && selected === controlsPanelId) {
      api.setSelectedPanel(liveCodeEditorPanelId);
    }
  };

  api.on(STORY_CHANGED, reconcileSelectedPanel);
  api.on(STORY_PREPARED, reconcileSelectedPanel);
});
