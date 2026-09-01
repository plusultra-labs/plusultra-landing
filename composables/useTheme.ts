/**
 * Light/dark, with the system setting as the starting point.
 *
 * Until the visitor touches the toggle there is no stored preference and no
 * data-theme attribute, so the palette is whatever `prefers-color-scheme`
 * says and it keeps following the system live. The first click stores an
 * explicit choice, which then wins everywhere until they clear it.
 *
 * The attribute is written by the inline script in nuxt.config.ts before the
 * first paint; this composable only keeps it in sync afterwards.
 */
export const THEME_KEY = "pu-theme";

export type Theme = "light" | "dark";

export function useTheme() {
  // Server-rendered markup has no way to know the visitor's system setting,
  // so it renders the light-side state and the client corrects on mount.
  const resolved = useState<Theme>("theme", () => "light");
  const explicit = useState<Theme | null>("theme-explicit", () => null);

  const read = (): Theme =>
    document.documentElement.dataset.theme === "dark" ||
    (!document.documentElement.dataset.theme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";

  const apply = (theme: Theme | null) => {
    const el = document.documentElement;
    if (theme) el.dataset.theme = theme;
    else delete el.dataset.theme;
    resolved.value = read();
    // Mobile browser chrome reads theme-color, and the two tags in the head
    // are scoped to the system setting, so an explicit choice has to pick the
    // winner by hand: the browser uses the first tag whose media matches.
    for (const meta of document.querySelectorAll<HTMLMetaElement>("meta[name='theme-color']")) {
      const scheme = meta.dataset.scheme as Theme | undefined;
      if (!scheme) continue;
      meta.media = theme
        ? scheme === theme
          ? "all"
          : "not all"
        : `(prefers-color-scheme: ${scheme})`;
    }
  };

  const set = (theme: Theme) => {
    explicit.value = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Safari in private mode, and anything else that refuses storage: the
      // choice still applies to this page, it just will not be remembered.
    }
    apply(theme);
  };

  const toggle = () => set(resolved.value === "dark" ? "light" : "dark");

  onMounted(() => {
    const stored = (() => {
      try {
        return localStorage.getItem(THEME_KEY);
      } catch {
        return null;
      }
    })();
    explicit.value = stored === "light" || stored === "dark" ? stored : null;
    resolved.value = read();

    // Only while the visitor has not chosen: keep following the system.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!explicit.value) apply(null);
    };
    mq.addEventListener("change", onChange);
    onUnmounted(() => mq.removeEventListener("change", onChange));
  });

  return { resolved, explicit, set, toggle };
}
