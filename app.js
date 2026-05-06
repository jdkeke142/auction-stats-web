"use strict";

// ===========================================================================
// i18n
// ===========================================================================

const STRINGS = {
  fr: {
    // Static (referenced by data-i18n / data-i18n-html in index.html)
    "title.brand": "Prix HDV",
    "title.suffix": "— Dynastia",
    "tab.market": "Marché",
    "tab.personal": "Par joueur",
    "personal.player_label": "Joueur",
    "personal.player_placeholder": "Choisir un joueur…",
    "personal.player_no_results": "Aucun joueur trouvé",
    "personal.item_filter_label": "Item",
    "personal.item_filter_placeholder": "Tous les items",
    "personal.summary.total": "Total revenu",
    "personal.summary.count": "Ventes",
    "personal.summary.median": "Médiane unitaire",
    "personal.chart.heading": "Revenu cumulé sur la période",
    "personal.chart.legend": "revenu cumulé",
    "personal.chart.empty": "Pas assez de ventes pour tracer une courbe.",
    "personal.breakdown.heading": "Top des ventes par item",
    "personal.breakdown.explainer": "Clique une ligne pour voir le marché de cet item.",
    "personal.breakdown.col.item": "Item",
    "personal.breakdown.col.count": "Ventes",
    "personal.breakdown.col.total": "Total",
    "personal.breakdown.col.median": "Médiane u.",
    "personal.table.heading": "Ventes",
    "personal.table.col.date": "Date",
    "personal.table.col.item": "Item",
    "personal.table.col.qty": "Qté",
    "personal.table.col.price_unit": "Prix u.",
    "personal.table.col.price_total": "Total",
    "personal.table.col.buyer": "Acheteur",
    "personal.no_transactions": "Aucune vente sur la période pour ce joueur.",
    "personal.pagination.prev": "Précédent",
    "personal.pagination.next": "Suivant",
    "personal.pagination.range": (n, total) => `Page ${n} / ${total}`,
    "form.item": "Item",
    "form.period": "Période",
    "form.period.7d": "7 jours",
    "form.period.30d": "30 jours",
    "form.period.90d": "90 jours",
    "form.period.1y": "1 an",
    "form.period.all": "Tout",
    "form.from": "Du",
    "form.to": "Au",
    "form.optional": "(optionnel)",
    "form.enchants": "Enchantements",
    "form.enchants.strict": "Combinaison exacte (rien de plus, rien de moins)",
    "form.enchants.help":
      "Par défaut, le filtre garde les ventes contenant <strong>au moins</strong> les enchants cochés (l'item peut en avoir d'autres). Coche <em>Combinaison exacte</em> pour ne garder que les ventes ayant pile cette combinaison.",
    "form.analyze": "Analyser",
    "form.reset": "Réinitialiser",
    "results.heading": "À quel prix vendre&nbsp;?",
    "results.unit": "par unité",
    "results.help":
      "Prix <strong>par unité</strong> = ce qui s'affiche dans /ah (taxe HDV de 10% incluse). Les <strong>totaux/revenus</strong> côté Par joueur = ce que tu reçois après la taxe. <strong>Prix juste</strong> = milieu du marché. <strong>Vendre vite</strong> = un peu en dessous. <strong>Patient</strong> = haut du marché.",
    "reco.fast": "Vendre vite",
    "reco.fast.sub": "25% des ventes en dessous",
    "reco.fair": "Prix juste",
    "reco.fair.sub": "Au milieu du marché",
    "reco.max": "Patient (max)",
    "reco.max.sub": "75% des ventes en dessous",
    "details.heading": "Détails du marché",
    "trend.heading": "Évolution sur la période",
    "empty.default": "Aucune vente trouvée pour ces critères.",
    "ui.theme": "Changer de thème",
    "ui.lang": "Langue",
    "liquidity.tier.1": "🔥 Très liquide",
    "liquidity.tier.2": "⚡ Liquide",
    "liquidity.tier.3": "✓ Marché actif",
    "liquidity.tier.4": "🐢 Lent",
    "liquidity.tier.5": "⚠️ Très lent",
    "breakdown.heading": "Top variantes vendues",

    // Dynamic
    loading: "chargement…",
    fetchError: (e) => `Erreur de chargement de data.json : ${e}`,
    metaSummary: (n, d, t) => `${n} ventes · données extraites le ${d} à ${t}`,
    item_placeholder: "Choisir un item…",
    item_no_results: "Aucun item trouvé",
    item_count_suffix: (n) => `${n} ventes`,
    enchant_placeholder: "Ajouter un enchantement…",
    enchant_no_results: "Aucun enchantement trouvé",
    variant_no_results: "Aucune variante trouvée",
    variant_flight_label: "Durée de vol",
    variant_flight_placeholder: "Toutes durées",
    variant_flight_value: (lvl) => `Vol ${ROMAN[lvl] || lvl}`,
    variant_potion_label: "Effet",
    variant_potion_placeholder: "Tous effets",
    variant_instrument_label: "Instrument",
    variant_instrument_placeholder: "Tous instruments",
    stats_n_sales: "Nombre de ventes",
    stats_pace: "Cadence",
    stats_pace_value: (n) => `${n} par jour`,
    stats_qty_median: "Quantité médiane",
    stats_qty_value: (n) => `${fmt.format(n)} unité${n > 1 ? "s" : ""}`,
    stats_avg: "Prix moyen",
    avg_warning: (avg, fair) =>
      `⚠️ Le prix moyen (${avg}) est très différent du prix juste (${fair}). Quelques ventes hors-norme tirent la moyenne. Fie-toi à la reco prix au-dessus.`,
    chart_series_name: "Prix juste",
    chart_tt_label: "prix juste",
    chart_tt_range: (low, high) => `Fourchette : ${low} – ${high}`,
    chart_tt_n_sales: (n) => `Sur ${n} vente${n > 1 ? "s" : ""}`,
    trend_text: (arrow, sign, pct) =>
      `Tendance ${arrow} ${sign}${pct}% sur la période · survole un point pour voir la fourchette typique (50% des ventes)`,
    trend_text_short:
      "Survole un point pour voir la fourchette typique (50% des ventes)",
    diag_no_match_with_ench: (n) =>
      `<br>Sans le filtre d'enchantements, il y aurait ${n} vente(s) sur la période.`,
    diag_out_of_period: (from, to, n) =>
      `<br>Cet item n'a pas été vendu sur la période choisie. Données disponibles : ${from} → ${to} (${n} vente(s) au total dans l'historique).`,
    diag_never_sold: "<br>Cet item n'apparaît jamais dans l'historique des ventes.",
    no_sales_strong: "<strong>Aucune vente trouvée pour ces critères.</strong>",
    liquidity_text: (interval) =>
      `Une vente toutes les <strong>~${interval}</strong> en moyenne sur la période sélectionnée.`,
    dur_minutes: (n) => `${n} minute${n > 1 ? "s" : ""}`,
    dur_hours: (n) => `${n} heure${n > 1 ? "s" : ""}`,
    dur_days: (n) => `${n} jour${n > 1 ? "s" : ""}`,
    dur_weeks: (n) => `${n} semaine${n > 1 ? "s" : ""}`,
    breakdown_col_variant: "Variante",
    breakdown_col_count: "Ventes",
    breakdown_col_median: "Prix médian",
    breakdown_no_ench: "Sans enchantement",
    breakdown_no_variant: "Sans variante",
    breakdown_explainer: "Clique une ligne pour pré-remplir les filtres avec cette combinaison, puis lance Analyser.",
  },

  en: {
    "title.brand": "Auction Prices",
    "title.suffix": "— Dynastia",
    "tab.market": "Market",
    "tab.personal": "Per player",
    "personal.player_label": "Player",
    "personal.player_placeholder": "Pick a player…",
    "personal.player_no_results": "No player found",
    "personal.item_filter_label": "Item",
    "personal.item_filter_placeholder": "All items",
    "personal.summary.total": "Total revenue",
    "personal.summary.count": "Sales",
    "personal.summary.median": "Unit median",
    "personal.chart.heading": "Cumulative revenue over the period",
    "personal.chart.legend": "cumulative revenue",
    "personal.chart.empty": "Not enough sales to draw a chart.",
    "personal.breakdown.heading": "Top sold items",
    "personal.breakdown.explainer": "Click a row to see the market for that item.",
    "personal.breakdown.col.item": "Item",
    "personal.breakdown.col.count": "Sales",
    "personal.breakdown.col.total": "Total",
    "personal.breakdown.col.median": "Unit median",
    "personal.table.heading": "Sales",
    "personal.table.col.date": "Date",
    "personal.table.col.item": "Item",
    "personal.table.col.qty": "Qty",
    "personal.table.col.price_unit": "Unit",
    "personal.table.col.price_total": "Total",
    "personal.table.col.buyer": "Buyer",
    "personal.no_transactions": "No sales for this player in the selected period.",
    "personal.pagination.prev": "Previous",
    "personal.pagination.next": "Next",
    "personal.pagination.range": (n, total) => `Page ${n} of ${total}`,
    "form.item": "Item",
    "form.period": "Period",
    "form.period.7d": "7 days",
    "form.period.30d": "30 days",
    "form.period.90d": "90 days",
    "form.period.1y": "1 year",
    "form.period.all": "All",
    "form.from": "From",
    "form.to": "To",
    "form.optional": "(optional)",
    "form.enchants": "Enchantments",
    "form.enchants.strict": "Exact combination (no more, no less)",
    "form.enchants.help":
      "By default, the filter keeps sales containing <strong>at least</strong> the selected enchants (the item may have others on top). Tick <em>Exact combination</em> to keep only sales with that exact set.",
    "form.analyze": "Analyze",
    "form.reset": "Reset",
    "results.heading": "What price should I sell at?",
    "results.unit": "per unit",
    "results.help":
      "<strong>Per-unit prices</strong> = what /ah shows (10% AH tax included). <strong>Totals/revenue</strong> on the per-player side = what you actually receive after tax. <strong>Fair price</strong> = middle of the market. <strong>Sell fast</strong> = a bit below. <strong>Patient</strong> = top of the market.",
    "reco.fast": "Sell fast",
    "reco.fast.sub": "25% of sales are below",
    "reco.fair": "Fair price",
    "reco.fair.sub": "Middle of the market",
    "reco.max": "Patient (max)",
    "reco.max.sub": "75% of sales are below",
    "details.heading": "Market details",
    "trend.heading": "Evolution over the period",
    "empty.default": "No sales match these criteria.",
    "ui.theme": "Toggle theme",
    "ui.lang": "Language",
    "liquidity.tier.1": "🔥 Very liquid",
    "liquidity.tier.2": "⚡ Liquid",
    "liquidity.tier.3": "✓ Active market",
    "liquidity.tier.4": "🐢 Slow",
    "liquidity.tier.5": "⚠️ Very slow",
    "breakdown.heading": "Top sold variants",

    loading: "loading…",
    fetchError: (e) => `Failed to load data.json: ${e}`,
    metaSummary: (n, d, t) => `${n} sales · data extracted on ${d} at ${t}`,
    item_placeholder: "Pick an item…",
    item_no_results: "No item found",
    item_count_suffix: (n) => `${n} sales`,
    enchant_placeholder: "Add an enchantment…",
    enchant_no_results: "No enchantment found",
    variant_no_results: "No variant found",
    variant_flight_label: "Flight duration",
    variant_flight_placeholder: "All durations",
    variant_flight_value: (lvl) => `Flight ${ROMAN[lvl] || lvl}`,
    variant_potion_label: "Effect",
    variant_potion_placeholder: "All effects",
    variant_instrument_label: "Instrument",
    variant_instrument_placeholder: "All instruments",
    stats_n_sales: "Number of sales",
    stats_pace: "Pace",
    stats_pace_value: (n) => `${n} per day`,
    stats_qty_median: "Median quantity",
    stats_qty_value: (n) => `${fmt.format(n)} unit${n > 1 ? "s" : ""}`,
    stats_avg: "Average price",
    avg_warning: (avg, fair) =>
      `⚠️ The average (${avg}) is far from the fair price (${fair}). A few outlier sales skew the mean. Trust the price reco above.`,
    chart_series_name: "Fair price",
    chart_tt_label: "fair price",
    chart_tt_range: (low, high) => `Range: ${low} – ${high}`,
    chart_tt_n_sales: (n) => `On ${n} sale${n > 1 ? "s" : ""}`,
    trend_text: (arrow, sign, pct) =>
      `Trend ${arrow} ${sign}${pct}% over the period · hover a point to see the typical range (50% of sales)`,
    trend_text_short:
      "Hover a point to see the typical range (50% of sales)",
    diag_no_match_with_ench: (n) =>
      `<br>Without the enchantment filter, there would be ${n} sale(s) in this period.`,
    diag_out_of_period: (from, to, n) =>
      `<br>This item wasn't sold in the chosen period. Available data: ${from} → ${to} (${n} sale(s) total in history).`,
    diag_never_sold: "<br>This item never appears in the sales history.",
    no_sales_strong: "<strong>No sales match these criteria.</strong>",
    liquidity_text: (interval) =>
      `One sale roughly every <strong>~${interval}</strong> on the selected period.`,
    dur_minutes: (n) => `${n} minute${n > 1 ? "s" : ""}`,
    dur_hours: (n) => `${n} hour${n > 1 ? "s" : ""}`,
    dur_days: (n) => `${n} day${n > 1 ? "s" : ""}`,
    dur_weeks: (n) => `${n} week${n > 1 ? "s" : ""}`,
    breakdown_col_variant: "Variant",
    breakdown_col_count: "Sales",
    breakdown_col_median: "Median price",
    breakdown_no_ench: "No enchantment",
    breakdown_no_variant: "No variant",
    breakdown_explainer: "Click a row to pre-fill the filters with that combination, then click Analyze.",
  },
};

let lang = "fr";

function t(key, ...args) {
  const entry = STRINGS[lang][key] ?? STRINGS.fr[key] ?? key;
  return typeof entry === "function" ? entry(...args) : entry;
}

// ===========================================================================
// Locale-aware formatters
// ===========================================================================

let fmt = new Intl.NumberFormat("fr-FR");

function rebuildFormatters() {
  fmt = new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-US");
}

// In-game currency affix. The server uses a generic "$" today; to swap units
// (€, ⛁, "coins", etc.) change these two constants — every price-displaying
// site goes through fmtPrice() (reco cards, chart axes/tooltips, stats table,
// breakdown rows, personal view).
const CURRENCY_PREFIX = "$";
const CURRENCY_SUFFIX = "";
function fmtPrice(n) {
  return `${CURRENCY_PREFIX}${fmt.format(n)}${CURRENCY_SUFFIX}`;
}
function fmtPriceRound(n) {
  return fmtPrice(Math.round(n));
}

// Auction-house tax. Plugin config declares 10%. Verified empirically by
// listing an item at 100 and checking the DB row: stored value was 90, i.e.
// the BDD already stores the seller's NET receipt (post-tax). So we treat
// every `s.p` as net and reconstruct the listed/gross price on demand
// (what `/ah` shows + what the buyer pays).
const TAX_RATE = 0.10;
const grossPrice = (net) => net / (1 - TAX_RATE);


function fmtDate(ts) {
  return new Date(ts).toLocaleDateString(
    lang === "fr" ? "fr-FR" : "en-US",
    { day: "2-digit", month: "short", year: "numeric" },
  );
}

function fmtDateLong(ts) {
  return new Date(ts).toLocaleDateString(
    lang === "fr" ? "fr-FR" : "en-US",
    { day: "2-digit", month: "long", year: "numeric" },
  );
}

function fmtTime(ts) {
  return new Date(ts).toLocaleTimeString(
    lang === "fr" ? "fr-FR" : "en-US",
    { hour: "2-digit", minute: "2-digit" },
  );
}

function fmtDateTime(ts) {
  return `${fmtDate(ts)} · ${fmtTime(ts)}`;
}

// ===========================================================================
// DOM helpers
// ===========================================================================

const $ = (id) => document.getElementById(id);
const DAY_MS = 86400000;

// ===========================================================================
// Domain mappings (French translations of vanilla Minecraft identifiers).
// ===========================================================================

const ENCH_FR = {
  SHARPNESS: "Tranchant", SMITE: "Châtiment", BANE_OF_ARTHROPODS: "Fléau des arthropodes",
  KNOCKBACK: "Recul", FIRE_ASPECT: "Aura de feu", LOOTING: "Butin",
  SWEEPING_EDGE: "Affilage", SWEEPING: "Affilage",
  EFFICIENCY: "Efficacité", SILK_TOUCH: "Toucher de soie", UNBREAKING: "Solidité", FORTUNE: "Fortune",
  POWER: "Puissance", PUNCH: "Frappe", FLAME: "Flamme", INFINITY: "Infinité",
  MULTISHOT: "Tirs multiples", QUICK_CHARGE: "Chargement rapide", PIERCING: "Perforation",
  LOYALTY: "Loyauté", IMPALING: "Empalement", RIPTIDE: "Tourbillon", CHANNELING: "Canalisation",
  DENSITY: "Densité", BREACH: "Percée", WIND_BURST: "Rafale de vent",
  LUCK_OF_THE_SEA: "Chance de la mer", LURE: "Appât",
  PROTECTION: "Protection", FIRE_PROTECTION: "Protection contre le feu",
  BLAST_PROTECTION: "Protection contre les explosions",
  PROJECTILE_PROTECTION: "Protection contre les projectiles",
  FEATHER_FALLING: "Chute amortie", RESPIRATION: "Apnée", AQUA_AFFINITY: "Affinité aquatique",
  THORNS: "Épines", DEPTH_STRIDER: "Agilité aquatique", FROST_WALKER: "Semelles givrantes",
  SOUL_SPEED: "Vitesse des âmes", SWIFT_SNEAK: "Furtivité accrue",
  MENDING: "Raccommodage",
  CURSE_OF_VANISHING: "Malédiction de disparition",
  CURSE_OF_BINDING: "Malédiction du lien",
};

const POTION_FR = {
  AWKWARD: "Étrange", WATER: "Eau", MUNDANE: "Banale", THICK: "Épaisse",
  HEALING: "Soin", HARMING: "Mal", REGENERATION: "Régénération",
  STRENGTH: "Force", WEAKNESS: "Faiblesse", POISON: "Poison",
  SLOWNESS: "Lenteur", SWIFTNESS: "Rapidité", LEAPING: "Saut",
  FIRE_RESISTANCE: "Résistance au feu", NIGHT_VISION: "Vision nocturne",
  INVISIBILITY: "Invisibilité", WATER_BREATHING: "Respiration aquatique",
  LUCK: "Chance", TURTLE_MASTER: "Maître des tortues", SLOW_FALLING: "Chute lente",
  WIND_CHARGED: "Charge de vent", WEAVING: "Tissage", OOZING: "Suintement", INFESTED: "Infesté",
};

const INSTRUMENT_FR = {
  PONDER: "Méditation", SING: "Chant", SEEK: "Quête", FEEL: "Sentiment",
  ADMIRE: "Admiration", CALL: "Appel", YEARN: "Désir", DREAM: "Rêve",
};

const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const prettyName = (s) =>
  s.toLowerCase().split("_").map((w) => (w ? w[0].toUpperCase() + w.slice(1) : "")).join(" ");

function enchBaseName(base) {
  if (lang === "fr" && ENCH_FR[base]) return ENCH_FR[base];
  return prettyName(base);
}

function enchLabel(base, lvl) {
  return `${enchBaseName(base)} ${ROMAN[lvl] || lvl}`;
}

function formatPotion(value) {
  if (lang === "fr") {
    let prefix = "";
    let base = value;
    if (value.startsWith("LONG_")) { prefix = " (longue)"; base = value.slice(5); }
    else if (value.startsWith("STRONG_")) { prefix = " II"; base = value.slice(7); }
    return (POTION_FR[base] || prettyName(base)) + prefix;
  }
  return prettyName(value);
}

function formatInstrument(value) {
  if (lang === "fr" && INSTRUMENT_FR[value]) return INSTRUMENT_FR[value];
  return prettyName(value);
}

const enchKey = (base, lvl) => `${base}:${lvl}`;
const parseEnchKey = (key) => {
  const [base, lvl] = key.split(":");
  return [base, parseInt(lvl, 10)];
};

const VARIANT_CONFIG = {
  FIREWORK_ROCKET: {
    key: "flight",
    labelKey: "variant_flight_label",
    placeholderKey: "variant_flight_placeholder",
    formatValue: (v) => t("variant_flight_value", v),
  },
  POTION: { key: "potion", labelKey: "variant_potion_label", placeholderKey: "variant_potion_placeholder", formatValue: formatPotion },
  SPLASH_POTION: { key: "potion", labelKey: "variant_potion_label", placeholderKey: "variant_potion_placeholder", formatValue: formatPotion },
  LINGERING_POTION: { key: "potion", labelKey: "variant_potion_label", placeholderKey: "variant_potion_placeholder", formatValue: formatPotion },
  TIPPED_ARROW: { key: "potion", labelKey: "variant_potion_label", placeholderKey: "variant_potion_placeholder", formatValue: formatPotion },
  GOAT_HORN: {
    key: "instrument",
    labelKey: "variant_instrument_label",
    placeholderKey: "variant_instrument_placeholder",
    formatValue: formatInstrument,
  },
};

// ===========================================================================
// State
// ===========================================================================

let DATA = null;
let itemTS = null;
let enchantTS = null;
let variantTS = null;
let chart = null;
let salesByMaterial = null;
let materialIsEnchantable = null;
let dataRange = { min: 0, max: 0 };
let _lastChartArgs = null;

// ===========================================================================
// Theme
// ===========================================================================

function initTheme() {
  applyTheme(localStorage.getItem("theme") || "light");
  $("theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  if (chart && _lastChartArgs) drawChart(..._lastChartArgs);
  // Personal chart picks up theme tokens at draw time — re-run analysis to
  // recompute with the new colors.
  if (personalChart && personalPlayer) runPersonalAnalysis();
}

// ===========================================================================
// Language
// ===========================================================================

function initLang() {
  lang = localStorage.getItem("lang") || "fr";
  rebuildFormatters();
  document.documentElement.setAttribute("lang", lang);
  $("lang-select").value = lang;
  $("lang-select").addEventListener("change", (e) => {
    lang = e.target.value;
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    rebuildFormatters();
    applyLang();
  });
}

function applyLang() {
  // Static text in HTML annotated with data-i18n / data-i18n-html.
  for (const el of document.querySelectorAll("[data-i18n]")) {
    el.textContent = t(el.dataset.i18n);
  }
  for (const el of document.querySelectorAll("[data-i18n-html]")) {
    el.innerHTML = t(el.dataset.i18nHtml);
  }
  for (const el of document.querySelectorAll("[data-i18n-title]")) {
    el.title = t(el.dataset.i18nTitle);
    el.setAttribute("aria-label", t(el.dataset.i18nTitle));
  }

  // Header: re-render the data-summary metadata.
  if (DATA) {
    const d = new Date(DATA.generated_at);
    $("meta").textContent = t("metaSummary", fmt.format(DATA.sales.length), fmtDateLong(d), fmtTime(d));
  }

  // Tom-Select: rebuild item dropdown with the new locale strings/render.
  if (itemTS) {
    const currentItem = itemTS.getValue();
    rebuildItemDropdown(currentItem);
  }
  // Variants and enchants follow from the item change.
  const item = itemTS && itemTS.getValue();
  if (item) {
    updateVariantForItem(item);
    updateEnchantsForItem(item);
  }

  // If results are visible, re-run analyze() so dynamic strings flip too.
  if (!$("results").hidden) analyze();
  if ($("empty") && !$("empty").hidden) {
    // Empty diagnostic was rendered with a previous lang; re-trigger analyze
    // to get a fresh, correctly-translated message.
    if (item) analyze();
  }

  // Personal view re-renders so its placeholders + table headers + pagination
  // labels switch language too.
  if (personalPlayerTS) rebuildPersonalPlayerOptions();
  if (personalItemFilterTS) rebuildPersonalItemFilter();
  if (personalPlayer && DATA) {
    const personalItem = personalItemFilterTS && personalItemFilterTS.getValue();
    updatePersonalVariantForItem(personalItem);
    updatePersonalEnchantsForItem(personalItem);
    runPersonalAnalysis();
  }
}

// ===========================================================================
// Init
// ===========================================================================

async function init() {
  initLang();
  initTheme();
  applyLang();
  $("meta").textContent = t("loading");

  try {
    const res = await fetch("./data.json");
    if (!res.ok) throw new Error(res.status);
    DATA = await res.json();
  } catch (e) {
    $("meta").textContent = t("fetchError", e.message);
    return;
  }

  buildIndices();
  initPeriodPresets();
  initDefaultPeriod("market");
  initDefaultPeriod("personal");
  initItemDropdown();
  initVariantDropdown();
  initEnchantDropdown();
  initPersonalPlayerPicker();
  initPersonalVariantDropdown();
  initPersonalEnchantDropdown();
  initPersonalItemFilter();
  initModeTabs();
  applyLang(); // refresh meta line + Tom-Select renderings now that DATA is loaded

  $("from").addEventListener("change", onPeriodChange);
  $("to").addEventListener("change", onPeriodChange);
  $("personal-from").addEventListener("change", onPersonalPeriodChange);
  $("personal-to").addEventListener("change", onPersonalPeriodChange);
  $("personal-form").addEventListener("submit", (e) => {
    e.preventDefault();
    runPersonalAnalysis();
  });
  $("personal-reset").addEventListener("click", resetPersonalForm);
  $("form").addEventListener("submit", (e) => {
    e.preventDefault();
    analyze();
  });
  $("reset-form").addEventListener("click", resetForm);

  // If a player was previously selected, populate the dependent dropdowns so
  // the form is ready, but leave the results blank until the user clicks
  // Analyser — same flow as Marché.
  if (personalPlayer) {
    rebuildPersonalItemFilter();
    const itemFilter = personalItemFilterTS && personalItemFilterTS.getValue();
    updatePersonalVariantForItem(itemFilter);
    updatePersonalEnchantsForItem(itemFilter);
  }
}

function resetForm() {
  itemTS.clear(true);
  variantTS.clear(true);
  variantTS.clearOptions();
  $("variant-block").hidden = true;
  hideEnchants();
  initDefaultPeriod();
  rebuildItemDropdown(null);
  if (chart) {
    try { chart.destroy(); } catch (_) { /* noop */ }
    chart = null;
    _lastChartArgs = null;
  }
  $("results").hidden = true;
  $("empty").hidden = true;
}

function resetPersonalForm() {
  if (personalPlayerTS) personalPlayerTS.clear(true);
  personalPlayer = null;
  localStorage.removeItem("personal_player");
  if (personalItemFilterTS) personalItemFilterTS.clear(true);
  if (personalVariantTS) personalVariantTS.clear(true);
  $("personal-variant-block").hidden = true;
  hidePersonalEnchants();
  initDefaultPeriod("personal");
  rebuildPersonalItemFilter();
  personalPage = 0;
  personalSortBy = "t";
  personalSortDir = "desc";
  personalBreakdownSortBy = "count";
  personalBreakdownSortDir = "desc";
  if (personalChart) {
    try { personalChart.destroy(); } catch (_) { /* noop */ }
    personalChart = null;
  }
  $("personal-results").hidden = true;
  $("personal-empty").hidden = true;
}

function buildIndices() {
  salesByMaterial = new Map();
  materialIsEnchantable = new Set();
  let minTs = Infinity;
  let maxTs = 0;
  for (const s of DATA.sales) {
    if (!salesByMaterial.has(s.m)) salesByMaterial.set(s.m, []);
    salesByMaterial.get(s.m).push(s);
    if (Object.keys(s.e).length > 0) materialIsEnchantable.add(s.m);
    if (s.t < minTs) minTs = s.t;
    if (s.t > maxTs) maxTs = s.t;
  }
  dataRange = { min: minTs, max: maxTs };
}

function initItemDropdown() {
  itemTS = new TomSelect("#item", {
    options: [],
    valueField: "value",
    labelField: "text",
    searchField: ["text", "value"],
    maxOptions: 200,
    create: false,
    sortField: { field: "$order" },
    render: {
      option: (data, escape) =>
        `<div><strong>${escape(data.text)}</strong> ` +
        `<span style="color:var(--bs-secondary-color);font-size:.85em">(${escape(data.countLabel)})</span></div>`,
      item: (data, escape) => `<div>${escape(data.text)}</div>`,
      no_results: () => `<div class="no-results">${t("item_no_results")}</div>`,
    },
    onChange: (val) => {
      updateVariantForItem(val);
      updateEnchantsForItem(val);
    },
  });
  rebuildItemDropdown(null);
}

function rebuildItemDropdown(preserveValue) {
  itemTS.clearOptions();
  const { fromTs, toTs } = getCurrentPeriod();

  const counts = new Map();
  for (const [material, sales] of salesByMaterial) {
    let c = 0;
    for (const s of sales) {
      if (s.t >= fromTs && s.t <= toTs) c++;
    }
    counts.set(material, c);
  }

  // Hide items with no sales in the selected period — the dropdown becomes a
  // "what's selling now" leaderboard. Always keep the currently-selected item
  // in the list, even at 0, so changing period doesn't yank the selection
  // (the user gets the explicit empty diagnostic on Analyze instead).
  const options = [...counts.entries()]
    .filter(([m, c]) => c > 0 || m === preserveValue)
    .sort((a, b) => b[1] - a[1])
    .map(([m, count]) => ({
      value: m,
      text: prettyName(m),
      count,
      countLabel: t("item_count_suffix", fmt.format(count)),
    }));
  itemTS.addOptions(options);
  itemTS.settings.placeholder = t("item_placeholder");
  syncTSPlaceholder(itemTS);
  if (preserveValue && options.find((o) => o.value === preserveValue)) {
    itemTS.setValue(preserveValue, true);
  }
  itemTS.refreshOptions(false);
}

function initVariantDropdown() {
  variantTS = new TomSelect("#variant", {
    options: [],
    valueField: "value",
    labelField: "text",
    searchField: ["text", "value"],
    maxOptions: 100,
    create: false,
    sortField: { field: "$order" },
    render: {
      option: (data, escape) => `<div>${escape(data.text)}</div>`,
      item: (data, escape) => `<div>${escape(data.text)}</div>`,
      no_results: () => `<div class="no-results">${t("variant_no_results")}</div>`,
    },
  });
}

function initEnchantDropdown() {
  enchantTS = new TomSelect("#enchants", {
    options: [],
    optgroups: [],
    valueField: "value",
    labelField: "text",
    optgroupField: "group",
    optgroupLabelField: "label",
    optgroupValueField: "value",
    searchField: ["text", "value"],
    plugins: ["remove_button"],
    maxItems: null,
    maxOptions: 300,
    sortField: { field: "$order" },
    render: {
      option: (data, escape) => `<div>${escape(data.text)}</div>`,
      item: (data, escape) => `<div>${escape(data.text)}</div>`,
      optgroup_header: (data, escape) =>
        `<div class="optgroup-header">${escape(data.label)}</div>`,
      no_results: () => `<div class="no-results">${t("enchant_no_results")}</div>`,
    },
    onChange: () => refreshEnchantCounts(),
  });
}

// Sliding windows anchored to dataRange.max — a calendar "this month" would
// give near-empty results on the 1st of a month, which is bad UX.
// `days: null` = full history.
const PERIOD_PRESETS = [
  { id: "7",   days: 7 },
  { id: "30",  days: 30 },
  { id: "90",  days: 90 },
  { id: "1y",  days: 365 },
  { id: "all", days: null },
];

// Each scope has its own pair of date inputs. Market is the original form;
// the personal view duplicates the controls so the two periods are
// independent (you might want 30j for market and Tout for your sales).
const PERIOD_SCOPES = {
  market:   { from: "from",          to: "to" },
  personal: { from: "personal-from", to: "personal-to" },
};

const isoDay = (ts) => new Date(ts).toISOString().slice(0, 10);

function presetBounds(preset) {
  const fromTs = preset.days === null ? dataRange.min : dataRange.max - preset.days * DAY_MS;
  return { from: isoDay(fromTs), to: isoDay(dataRange.max) };
}

function setPeriodFromPreset(id, scope = "market") {
  const preset = PERIOD_PRESETS.find((p) => p.id === id);
  if (!preset) return;
  const { from, to } = presetBounds(preset);
  const ids = PERIOD_SCOPES[scope];
  $(ids.from).value = from;
  $(ids.to).value = to;
  syncPeriodPresetButtons(scope);
}

function syncPeriodPresetButtons(scope = "market") {
  const ids = PERIOD_SCOPES[scope];
  const fromVal = $(ids.from).value;
  const toVal = $(ids.to).value;
  let activeId = null;
  for (const p of PERIOD_PRESETS) {
    const b = presetBounds(p);
    if (fromVal === b.from && toVal === b.to) { activeId = p.id; break; }
  }
  // Market chips have no data-period-scope; personal chips have one.
  const selector = scope === "market"
    ? "[data-period]:not([data-period-scope])"
    : `[data-period][data-period-scope="${scope}"]`;
  for (const btn of document.querySelectorAll(selector)) {
    const on = btn.dataset.period === activeId;
    btn.classList.toggle("active", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  }
}

function initPeriodPresets() {
  for (const btn of document.querySelectorAll("[data-period]")) {
    btn.addEventListener("click", () => {
      const scope = btn.dataset.periodScope || "market";
      setPeriodFromPreset(btn.dataset.period, scope);
      if (scope === "personal") onPersonalPeriodChange();
      else onPeriodChange();
    });
  }
}

function initDefaultPeriod(scope = "market") {
  setPeriodFromPreset("30", scope);
}

function onPeriodChange() {
  syncPeriodPresetButtons("market");
  const item = itemTS.getValue();
  rebuildItemDropdown(item);
  updateVariantForItem(item);
  updateEnchantsForItem(item);
}

function getCurrentPeriod(scope = "market") {
  const ids = PERIOD_SCOPES[scope];
  return {
    fromTs: new Date($(ids.from).value).getTime(),
    toTs: new Date($(ids.to).value).getTime() + DAY_MS - 1,
  };
}

// ===========================================================================
// Variant dropdown (per-material attribute filter, e.g. firework flight)
// ===========================================================================

function updateVariantForItem(material) {
  const cfg = VARIANT_CONFIG[material];
  variantTS.clear(true);
  variantTS.clearOptions();

  if (!cfg) {
    $("variant-block").hidden = true;
    return;
  }

  const { fromTs, toTs } = getCurrentPeriod();
  const counts = new Map();
  for (const s of salesByMaterial.get(material) || []) {
    if (s.t < fromTs || s.t > toTs) continue;
    const v = s.v && s.v[cfg.key];
    if (v === undefined) continue;
    counts.set(v, (counts.get(v) || 0) + 1);
  }

  $("variant-label").textContent = t(cfg.labelKey);
  $("variant-block").hidden = false;
  variantTS.settings.placeholder = t(cfg.placeholderKey);
  variantTS.addOption({ value: "", text: t(cfg.placeholderKey) });
  for (const [val, cnt] of [...counts.entries()].sort((a, b) => b[1] - a[1])) {
    variantTS.addOption({
      value: String(val),
      text: `${cfg.formatValue(val)}  (${fmt.format(cnt)})`,
    });
  }
  variantTS.refreshOptions(false);
  variantTS.setValue("", true);
  syncTSPlaceholder(variantTS);
}

function getSelectedVariant(material) {
  const cfg = VARIANT_CONFIG[material];
  if (!cfg) return null;
  const v = variantTS.getValue();
  if (!v) return null;
  return cfg.key === "flight"
    ? { key: cfg.key, value: parseInt(v, 10) }
    : { key: cfg.key, value: v };
}

function matchesVariant(sale, want) {
  if (!want) return true;
  return sale.v && sale.v[want.key] === want.value;
}

// ===========================================================================
// Enchant dropdown (multi-select with cumulative counts)
// ===========================================================================

function hideEnchants() {
  enchantTS.clear(true);
  enchantTS.clearOptions();
  enchantTS.clearOptionGroups();
  const cb = $("enchants-strict");
  if (cb) cb.checked = false;
  $("enchants-block").hidden = true;
}

function showEnchants() {
  $("enchants-block").hidden = false;
  enchantTS.settings.placeholder = t("enchant_placeholder");
  enchantTS.enable();
  syncTSPlaceholder(enchantTS);
}

function syncTSPlaceholder(ts) {
  const input = ts.control_input;
  if (input) input.setAttribute("placeholder", ts.settings.placeholder);
}

function updateEnchantsForItem(material) {
  const previouslySelected = enchantTS.getValue();

  if (!material || !materialIsEnchantable.has(material)) return hideEnchants();
  const { fromTs, toTs } = getCurrentPeriod();
  if (!Number.isFinite(fromTs) || !Number.isFinite(toTs)) return hideEnchants();

  const ench = new Map();
  for (const s of salesByMaterial.get(material) || []) {
    if (s.t < fromTs || s.t > toTs) continue;
    for (const [k, v] of Object.entries(s.e)) {
      ench.set(enchKey(k, v), (ench.get(enchKey(k, v)) || 0) + 1);
    }
  }
  if (ench.size === 0) return hideEnchants();

  enchantTS.clear(true);
  enchantTS.clearOptions();
  enchantTS.clearOptionGroups();
  populateEnchantOptions(ench);
  showEnchants();

  for (const v of previouslySelected) {
    if (ench.has(v)) enchantTS.addItem(v, true);
  }
}

function populateEnchantOptions(enchCounts) {
  const byBase = new Map();
  for (const [pair, count] of enchCounts) {
    const [base, lvl] = parseEnchKey(pair);
    if (!byBase.has(base)) byBase.set(base, []);
    byBase.get(base).push({ lvl, count, pair });
  }
  const sortedBases = [...byBase.entries()].sort((a, b) =>
    enchBaseName(a[0]).localeCompare(enchBaseName(b[0])),
  );
  for (const [base, lvls] of sortedBases) {
    enchantTS.addOptionGroup(base, { value: base, label: enchBaseName(base) });
    for (const { lvl, count, pair } of lvls.sort((a, b) => a.lvl - b.lvl)) {
      enchantTS.addOption({
        value: pair,
        text: `${enchLabel(base, lvl)}  (${fmt.format(count)})`,
        group: base,
      });
    }
  }
  enchantTS.refreshOptions(false);
}

let _refreshingCounts = false;
function refreshEnchantCounts() {
  if (_refreshingCounts) return;
  const material = itemTS && itemTS.getValue();
  if (!material) return;

  const { fromTs, toTs } = getCurrentPeriod();
  const requested = getSelectedEnchants();
  const counts = new Map();
  for (const s of salesByMaterial.get(material) || []) {
    if (s.t < fromTs || s.t > toTs) continue;
    if (!matchesEnchants(s.e, requested)) continue;
    for (const [k, v] of Object.entries(s.e)) {
      const key = enchKey(k, v);
      counts.set(key, (counts.get(key) || 0) + 1);
    }
  }

  _refreshingCounts = true;
  try {
    for (const value in enchantTS.options) {
      const opt = enchantTS.options[value];
      if (!opt) continue;
      const [base, lvl] = parseEnchKey(value);
      const cnt = counts.get(value) || 0;
      const newText = `${enchLabel(base, lvl)}  (${fmt.format(cnt)})`;
      if (opt.text !== newText) {
        opt.text = newText;
        enchantTS.updateOption(value, opt);
      }
    }
    enchantTS.refreshOptions(false);
  } finally {
    _refreshingCounts = false;
  }
}

function getSelectedEnchants() {
  const out = {};
  for (const v of enchantTS.getValue()) {
    const [k, lvl] = parseEnchKey(v);
    out[k] = lvl;
  }
  return out;
}

// Inclusive: item must contain at least the requested enchants (may have more).
// Strict: item must contain exactly the requested enchants and nothing else.
function matchesEnchants(itemEnch, requested, strict = false) {
  if (strict && Object.keys(itemEnch).length !== Object.keys(requested).length) {
    return false;
  }
  for (const [k, v] of Object.entries(requested)) {
    if (itemEnch[k] !== v) return false;
  }
  return true;
}

function isStrictMode() {
  const cb = $("enchants-strict");
  return !!(cb && cb.checked);
}

// Per-unit price the seller actually listed at (= what /ah shows). The DB
// stores net (`s.p` is the post-tax amount the seller pocketed), so we
// reverse the tax once here at the data layer. This makes every aggregation
// downstream (median/q1/q3/avg, chart bins, breakdown medians) operate on
// the same gross numbers the player thinks in — no "compute in net, convert
// at display" detour.
const unitPrice = (s) => grossPrice(s.p / Math.max(1, s.a));

// Convert a duration in milliseconds into a localized human label
// (rounded to a sensible unit for the magnitude).
function humanizeDuration(ms) {
  const HOUR = 3600 * 1000;
  if (ms < HOUR) return t("dur_minutes", Math.max(1, Math.round(ms / 60000)));
  if (ms < DAY_MS) return t("dur_hours", Number((ms / HOUR).toFixed(ms < 6 * HOUR ? 1 : 0)));
  if (ms < 7 * DAY_MS) return t("dur_days", Number((ms / DAY_MS).toFixed(ms < 3 * DAY_MS ? 1 : 0)));
  return t("dur_weeks", Number((ms / (7 * DAY_MS)).toFixed(1)));
}

// Liquidity tier (1=very fast … 5=very slow) from an estimated wait time.
function categorizeWait(ms) {
  const HOUR = 3600 * 1000;
  if (ms < HOUR) return 1;
  if (ms < 6 * HOUR) return 2;
  if (ms < 2 * DAY_MS) return 3;
  if (ms < 7 * DAY_MS) return 4;
  return 5;
}

function showLiquidity(salesPerDay) {
  const block = $("liquidity");
  if (salesPerDay <= 0) { block.hidden = true; return; }

  // Average interval between two sales over the selected period — a purely
  // historical liquidity signal that follows the date filter.
  const intervalMs = DAY_MS / salesPerDay;
  const tier = categorizeWait(intervalMs);

  const badge = $("liquidity-badge");
  badge.className = `liquidity-badge liquidity-tier-${tier}`;
  badge.textContent = t(`liquidity.tier.${tier}`);

  $("liquidity-text").innerHTML = t("liquidity_text", humanizeDuration(intervalMs));
  block.hidden = false;
}

// Group sales by their distinguishing attribute (variant value for items
// like fireworks/potions/horns, enchant signature for enchantable items).
// Returns [{label, sales}] sorted by sale count desc.
function groupSalesByVariant(item, sales) {
  const cfg = VARIANT_CONFIG[item];
  if (cfg) {
    const map = new Map();
    for (const s of sales) {
      const v = s.v && s.v[cfg.key];
      const key = v === undefined ? null : String(v);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(s);
    }
    return [...map.entries()].map(([key, ss]) => ({
      label: key === null
        ? t("breakdown_no_variant")
        : cfg.formatValue(cfg.key === "flight" ? parseInt(key, 10) : key),
      filter: key === null ? null : { kind: "variant", value: key },
      sales: ss,
    }));
  }

  if (materialIsEnchantable.has(item)) {
    const map = new Map();
    for (const s of sales) {
      const entries = Object.entries(s.e).sort((a, b) => a[0].localeCompare(b[0]));
      const sig = entries.length === 0
        ? null
        : entries.map(([k, v]) => enchKey(k, v)).join("+");
      if (!map.has(sig)) map.set(sig, []);
      map.get(sig).push(s);
    }
    return [...map.entries()].map(([sig, ss]) => ({
      label: sig === null
        ? t("breakdown_no_ench")
        : sig.split("+").map((p) => {
            const [b, l] = parseEnchKey(p);
            return enchLabel(b, l);
          }).join(" + "),
      filter: sig === null ? null : { kind: "enchant", value: sig.split("+") },
      sales: ss,
    }));
  }

  return [];
}

function showBreakdown(item, sales) {
  const block = $("breakdown");
  const groups = groupSalesByVariant(item, sales);

  // Skip when there's nothing to break down (simple items, or only one combo).
  if (groups.length <= 1) {
    block.hidden = true;
    return;
  }
  groups.sort((a, b) => b.sales.length - a.sales.length);
  // Promote the catch-all "Sans variante / Sans enchantement" row to the top —
  // it's a useful baseline that's also the only row without a chevron, so it
  // visually anchors the table.
  const noFilterIdx = groups.findIndex((g) => !g.filter);
  if (noFilterIdx > 0) {
    const [row] = groups.splice(noFilterIdx, 1);
    groups.unshift(row);
  }

  $("breakdown-thead").innerHTML = `<tr>
    <th>${t("breakdown_col_variant")}</th>
    <th class="text-end">${t("breakdown_col_count")}</th>
    <th class="text-end">${t("breakdown_col_median")}</th>
  </tr>`;

  const tbody = $("breakdown-tbody");
  tbody.innerHTML = "";
  for (const g of groups) {
    const prices = g.sales.map(unitPrice).sort((a, b) => a - b);
    const med = quantile(prices, 0.5);
    const tr = document.createElement("tr");
    if (g.filter) tr.classList.add("breakdown-row");
    tr.innerHTML = `
      <td>${g.label}</td>
      <td class="text-end font-monospace">${fmt.format(g.sales.length)}</td>
      <td class="text-end font-monospace">${fmtPriceRound(med)}</td>`;
    if (g.filter) {
      tr.addEventListener("click", () => applyBreakdownFilter(g.filter));
    }
    tbody.appendChild(tr);
  }
  $("breakdown-foot").innerHTML = t("breakdown_explainer");
  block.hidden = false;
}

function applyBreakdownFilter({ kind, value }) {
  if (kind === "variant") {
    variantTS.setValue(value, false);
  } else if (kind === "enchant") {
    enchantTS.clear(true);
    for (const v of value) enchantTS.addItem(v, true);
    // A breakdown row represents an exact combo, so enable strict matching
    // by default. The user can untick if they want to broaden the search.
    const cb = $("enchants-strict");
    if (cb) cb.checked = true;
  }
  // Pre-fill only — the user triggers the analysis themselves.
  $("form").scrollIntoView({ behavior: "smooth", block: "start" });
}

function quantile(sorted, q) {
  if (!sorted.length) return null;
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  return sorted[base + 1] !== undefined
    ? sorted[base] + rest * (sorted[base + 1] - sorted[base])
    : sorted[base];
}

// ===========================================================================
// Analysis
// ===========================================================================

function analyze() {
  const item = itemTS.getValue();
  if (!item) return;

  const { fromTs, toTs } = getCurrentPeriod();
  const ench = getSelectedEnchants();
  const strict = isStrictMode();
  const variant = getSelectedVariant(item);
  const candidates = salesByMaterial.get(item) || [];
  const sales = candidates.filter(
    (s) => s.t >= fromTs && s.t <= toTs && matchesEnchants(s.e, ench, strict) && matchesVariant(s, variant),
  );

  if (!sales.length) {
    showEmptyDiagnostic(item, ench, candidates, fromTs, toTs);
    return;
  }
  $("empty").hidden = true;
  $("results").hidden = false;

  const prices = sales.map(unitPrice).sort((a, b) => a - b);
  const sum = prices.reduce((a, b) => a + b, 0);
  const avg = sum / prices.length;
  const median = quantile(prices, 0.5);
  const q1 = quantile(prices, 0.25);
  const q3 = quantile(prices, 0.75);
  const days = Math.max(1, (toTs - fromTs) / DAY_MS);
  const perDay = sales.length / days;
  const quantities = sales.map((s) => s.a).sort((a, b) => a - b);
  const medianQty = quantile(quantities, 0.5);

  // q1/median/q3 are quantiles of unitPrice() — already gross.
  $("reco-fast").textContent = fmtPriceRound(q1);
  $("reco-fair").textContent = fmtPriceRound(median);
  $("reco-max").textContent  = fmtPriceRound(q3);

  showLiquidity(perDay);
  showBreakdown(item, sales);

  $("stats-body").innerHTML = [
    [t("stats_n_sales"), fmt.format(sales.length)],
    [t("stats_pace"), t("stats_pace_value", perDay.toFixed(1))],
    [t("stats_qty_median"), t("stats_qty_value", Math.round(medianQty))],
    [t("stats_avg"), fmtPriceRound(avg)],
  ].map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("");

  const ratio = avg / median;
  $("avg-note").textContent =
    ratio > 1.5 || ratio < 0.7
      ? t("avg_warning", fmtPriceRound(avg), fmtPriceRound(median))
      : "";

  drawChart(sales, fromTs, toTs);
}

function showEmptyDiagnostic(item, ench, candidates, fromTs, toTs) {
  const inPeriod = candidates.filter((s) => s.t >= fromTs && s.t <= toTs).length;
  const totalAllTime = candidates.length;
  let msg = t("no_sales_strong");
  if (Object.keys(ench).length > 0 && inPeriod > 0) {
    msg += t("diag_no_match_with_ench", fmt.format(inPeriod));
  } else if (inPeriod === 0 && totalAllTime > 0) {
    msg += t("diag_out_of_period", fmtDate(dataRange.min), fmtDate(dataRange.max), fmt.format(totalAllTime));
  } else if (totalAllTime === 0) {
    msg += t("diag_never_sold");
  }
  $("empty").innerHTML = msg;
  $("results").hidden = true;
  $("empty").hidden = false;
}

// ===========================================================================
// Chart (ApexCharts area + adaptive smoothing window)
// ===========================================================================

function adaptiveWindow(byDay, centerIdx, total, minSamples, maxRadius) {
  const window = [...byDay[centerIdx]];
  let r = 1;
  while (window.length < minSamples && r <= maxRadius) {
    const left = centerIdx - r;
    const right = centerIdx + r;
    if (left >= 0) window.push(...byDay[left]);
    if (right < total) window.push(...byDay[right]);
    r++;
  }
  if (window.length < 3) return null;
  return { samples: window.sort((a, b) => a - b), radius: r - 1 };
}

function drawChart(sales, fromTs, toTs) {
  _lastChartArgs = [sales, fromTs, toTs];
  const nDays = Math.max(1, Math.ceil((toTs - fromTs) / DAY_MS));
  const byDay = Array.from({ length: nDays }, () => []);
  for (const s of sales) {
    const i = Math.min(nDays - 1, Math.max(0, Math.floor((s.t - fromTs) / DAY_MS)));
    byDay[i].push(unitPrice(s));
  }

  const minSamples = 8;
  const maxRadius = Math.max(3, Math.ceil(nDays / 4));

  const medianData = [];
  const rangeData = [];
  const counts = [];
  for (let i = 0; i < nDays; i++) {
    const w = adaptiveWindow(byDay, i, nDays, minSamples, maxRadius);
    if (!w) continue;
    const x = fromTs + i * DAY_MS + DAY_MS / 2;
    medianData.push({ x, y: Math.round(quantile(w.samples, 0.5)) });
    rangeData.push({
      x,
      y: [Math.round(quantile(w.samples, 0.25)), Math.round(quantile(w.samples, 0.75))],
    });
    counts.push(w.samples.length);
  }

  if (chart) {
    try { chart.destroy(); } catch (_) { /* noop */ }
    chart = null;
  }
  const el = $("chart");
  el.innerHTML = "";
  chart = new ApexCharts(el, buildChartOptions(medianData, rangeData, counts));
  chart.render();
  $("trend-note").textContent = buildTrendText(medianData);
}

function buildChartOptions(medianData, rangeData, counts) {
  const css = getComputedStyle(document.documentElement);
  const isDark = document.documentElement.getAttribute("data-bs-theme") === "dark";
  const axisColor = css.getPropertyValue("--bs-secondary-color").trim() || (isDark ? "#9ba1a6" : "#6c757d");
  const gridColor = css.getPropertyValue("--bs-border-color").trim() || (isDark ? "#2a2d31" : "#eef0f3");
  const primary   = css.getPropertyValue("--bs-primary").trim() || "#3e63dd";
  const valueColor = css.getPropertyValue("--bs-emphasis-color").trim() || (isDark ? "#f0f1f3" : "#1c1c1c");

  return {
    chart: {
      type: "area",
      height: 320,
      fontFamily: "inherit",
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: true, speed: 350, animateGradually: { enabled: false } },
      background: "transparent",
    },
    theme: { mode: isDark ? "dark" : "light" },
    series: [{ name: t("chart_series_name"), data: medianData }],
    colors: [primary],
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.02, stops: [0, 100] },
    },
    stroke: { curve: "smooth", width: 2.5 },
    markers: { size: 0, hover: { sizeOffset: 5 }, strokeWidth: 0 },
    xaxis: {
      type: "datetime",
      labels: { datetimeUTC: false, style: { colors: axisColor, fontSize: "11px" } },
      axisBorder: { color: gridColor },
      axisTicks: { color: gridColor },
      tooltip: { enabled: false },
    },
    yaxis: {
      labels: { style: { colors: axisColor, fontSize: "11px" }, formatter: (v) => fmtPriceRound(v) },
    },
    grid: { borderColor: gridColor, strokeDashArray: 3, padding: { left: 10, right: 10 } },
    legend: { show: false },
    dataLabels: { enabled: false },
    tooltip: {
      shared: false,
      intersect: false,
      x: { format: "dd MMM yyyy" },
      custom: ({ dataPointIndex, w }) => {
        const med = w.config.series[0].data[dataPointIndex].y;
        const x = w.config.series[0].data[dataPointIndex].x;
        const r = rangeData[dataPointIndex];
        const c = counts[dataPointIndex];
        const low = r ? fmtPrice(r.y[0]) : "—";
        const high = r ? fmtPrice(r.y[1]) : "—";
        return `
          <div style="padding:.5rem .75rem;font-family:inherit">
            <div style="font-weight:600;font-size:.8rem;color:${axisColor};margin-bottom:.25rem">${fmtDate(x)}</div>
            <div style="margin-bottom:.25rem"><strong style="font-size:1.1rem;color:${valueColor}">${fmtPrice(med)}</strong> <span style="color:${axisColor};font-size:.85rem">${t("chart_tt_label")}</span></div>
            <div style="font-size:.85rem;color:${axisColor}">${t("chart_tt_range", low, high)}</div>
            <div style="font-size:.85rem;color:${axisColor}">${t("chart_tt_n_sales", c)}</div>
          </div>`;
      },
    },
  };
}

function buildTrendText(medianData) {
  if (medianData.length < 2) return t("trend_text_short");
  const first = medianData[0].y;
  const last = medianData[medianData.length - 1].y;
  const delta = ((last - first) / first) * 100;
  const arrow = delta > 5 ? "↑" : delta < -5 ? "↓" : "→";
  return t("trend_text", arrow, delta >= 0 ? "+" : "", delta.toFixed(1));
}

// ===========================================================================
// Mode tabs (Marché / Mes ventes)
// ===========================================================================

let currentMode = "market";

function setMode(mode) {
  currentMode = mode;
  localStorage.setItem("mode", mode);
  $("section-market").hidden = mode !== "market";
  $("section-personal").hidden = mode !== "personal";
  for (const btn of document.querySelectorAll(".mode-tabs .nav-link")) {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  }
}

function initModeTabs() {
  for (const btn of document.querySelectorAll(".mode-tabs .nav-link")) {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
  }
  if (localStorage.getItem("mode") === "personal") setMode("personal");
}

// ===========================================================================
// Personal "Mes ventes" view
// ===========================================================================

let personalPlayer = null;
let personalPlayerTS = null;
let personalItemFilterTS = null;
let personalVariantTS = null;
let personalEnchantTS = null;
let personalChart = null;
let personalPage = 0;
let personalSortBy = "t";
let personalSortDir = "desc";
let personalBreakdownSortBy = "count";
let personalBreakdownSortDir = "desc";
const PERSONAL_PAGE_SIZE = 50;

function getPersonalSortValue(sale, key) {
  switch (key) {
    case "t":     return sale.t;
    case "item":  return formatSaleLabel(sale).toLowerCase();
    case "a":     return sale.a;
    case "unit":  return unitPrice(sale);
    case "total": return sale.p;
    case "buyer": return (sale.b ? (DATA.players[sale.b] || sale.b) : "").toLowerCase();
    default:      return 0;
  }
}

function personalSortComparator(a, b) {
  const dir = personalSortDir === "asc" ? 1 : -1;
  const va = getPersonalSortValue(a, personalSortBy);
  const vb = getPersonalSortValue(b, personalSortBy);
  if (va < vb) return -1 * dir;
  if (va > vb) return 1 * dir;
  return 0;
}

function setPersonalSort(key) {
  if (personalSortBy === key) {
    personalSortDir = personalSortDir === "asc" ? "desc" : "asc";
  } else {
    personalSortBy = key;
    // Numeric/date columns default to desc (most recent / biggest first);
    // text columns default to asc (alphabetical).
    personalSortDir = ["item", "buyer"].includes(key) ? "asc" : "desc";
  }
  personalPage = 0;
  runPersonalAnalysis();
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]),
  );
}

function initPersonalPlayerPicker() {
  personalPlayerTS = new TomSelect("#personal-player", {
    options: [],
    valueField: "value",
    labelField: "text",
    searchField: ["text"],
    maxOptions: 200,
    create: false,
    sortField: { field: "$order" },
    render: {
      option: (data, escape) =>
        `<div><strong>${escape(data.text)}</strong> ` +
        `<span style="color:var(--bs-secondary-color);font-size:.85em">(${escape(data.countLabel)})</span></div>`,
      item: (data, escape) => `<div>${escape(data.text)}</div>`,
      no_results: () => `<div class="no-results">${t("personal.player_no_results")}</div>`,
    },
    onChange: (uuid) => {
      personalPlayer = uuid || null;
      if (personalPlayer) localStorage.setItem("personal_player", personalPlayer);
      else localStorage.removeItem("personal_player");
      personalPage = 0;
      rebuildPersonalItemFilter();
      $("personal-variant-block").hidden = true;
      hidePersonalEnchants();
      // Results stay stale until the user hits Analyser — same flow as Marché.
    },
  });

  if (!DATA.players) {
    personalPlayerTS.disable();
    return;
  }
  rebuildPersonalPlayerOptions();

  // Restore previous selection on reload (silent — onChange wires runPersonalAnalysis below).
  const stored = localStorage.getItem("personal_player");
  if (stored && DATA.players[stored]) {
    personalPlayer = stored;
    personalPlayerTS.setValue(stored, true);
  }
}

function rebuildPersonalPlayerOptions() {
  if (!personalPlayerTS || !DATA.players) return;
  const previous = personalPlayerTS.getValue();
  personalPlayerTS.clearOptions();
  // Sort by sale-count desc so the most active sellers surface first; name as tiebreaker.
  const counts = new Map();
  for (const s of DATA.sales) {
    if (s.s) counts.set(s.s, (counts.get(s.s) || 0) + 1);
  }
  const options = Object.entries(DATA.players)
    .map(([uuid, name]) => {
      const count = counts.get(uuid) || 0;
      return {
        value: uuid,
        text: name,
        count,
        countLabel: t("item_count_suffix", fmt.format(count)),
      };
    })
    .sort((a, b) => b.count - a.count || a.text.localeCompare(b.text));
  personalPlayerTS.addOptions(options);
  personalPlayerTS.settings.placeholder = t("personal.player_placeholder");
  syncTSPlaceholder(personalPlayerTS);
  if (previous) personalPlayerTS.setValue(previous, true);
  personalPlayerTS.refreshOptions(false);
}

function initPersonalItemFilter() {
  personalItemFilterTS = new TomSelect("#personal-item-filter", {
    options: [],
    valueField: "value",
    labelField: "text",
    searchField: ["text", "value"],
    maxOptions: 200,
    create: false,
    // clear_button (X inside the input) replaces the awkward "all items" empty
    // option — the user types into a clean field, hits X to clear back to
    // "Tous les items" (which is purely a placeholder, not a selectable row).
    plugins: ["clear_button"],
    sortField: { field: "$order" },
    render: {
      option: (data, escape) => `<div>${escape(data.text)}</div>`,
      item: (data, escape) => `<div>${escape(data.text)}</div>`,
      no_results: () => `<div class="no-results">${t("item_no_results")}</div>`,
    },
    onChange: (val) => {
      personalPage = 0;
      updatePersonalVariantForItem(val);
      updatePersonalEnchantsForItem(val);
    },
  });
  rebuildPersonalItemFilter();
}

function initPersonalVariantDropdown() {
  personalVariantTS = new TomSelect("#personal-variant", {
    options: [],
    valueField: "value",
    labelField: "text",
    searchField: ["text", "value"],
    maxOptions: 100,
    create: false,
    sortField: { field: "$order" },
    render: {
      option: (data, escape) => `<div>${escape(data.text)}</div>`,
      item: (data, escape) => `<div>${escape(data.text)}</div>`,
      no_results: () => `<div class="no-results">${t("variant_no_results")}</div>`,
    },
  });
}

function initPersonalEnchantDropdown() {
  personalEnchantTS = new TomSelect("#personal-enchants", {
    options: [],
    optgroups: [],
    valueField: "value",
    labelField: "text",
    optgroupField: "group",
    optgroupLabelField: "label",
    optgroupValueField: "value",
    searchField: ["text", "value"],
    plugins: ["remove_button"],
    maxItems: null,
    maxOptions: 300,
    sortField: { field: "$order" },
    render: {
      option: (data, escape) => `<div>${escape(data.text)}</div>`,
      item: (data, escape) => `<div>${escape(data.text)}</div>`,
      optgroup_header: (data, escape) =>
        `<div class="optgroup-header">${escape(data.label)}</div>`,
      no_results: () => `<div class="no-results">${t("enchant_no_results")}</div>`,
    },
  });
}

// Mirror of updateVariantForItem but scoped to the selected player + period.
function updatePersonalVariantForItem(material) {
  const cfg = VARIANT_CONFIG[material];
  if (!personalVariantTS) return;
  personalVariantTS.clear(true);
  personalVariantTS.clearOptions();

  if (!cfg || !personalPlayer) {
    $("personal-variant-block").hidden = true;
    return;
  }

  const { fromTs, toTs } = getCurrentPeriod("personal");
  const counts = new Map();
  for (const s of DATA.sales) {
    if (s.s !== personalPlayer) continue;
    if (s.m !== material) continue;
    if (s.t < fromTs || s.t > toTs) continue;
    const v = s.v && s.v[cfg.key];
    if (v === undefined) continue;
    counts.set(v, (counts.get(v) || 0) + 1);
  }

  if (counts.size === 0) {
    $("personal-variant-block").hidden = true;
    return;
  }

  $("personal-variant-label").textContent = t(cfg.labelKey);
  $("personal-variant-block").hidden = false;
  personalVariantTS.settings.placeholder = t(cfg.placeholderKey);
  personalVariantTS.addOption({ value: "", text: t(cfg.placeholderKey) });
  for (const [val, cnt] of [...counts.entries()].sort((a, b) => b[1] - a[1])) {
    personalVariantTS.addOption({
      value: String(val),
      text: `${cfg.formatValue(val)}  (${fmt.format(cnt)})`,
    });
  }
  personalVariantTS.refreshOptions(false);
  personalVariantTS.setValue("", true);
  syncTSPlaceholder(personalVariantTS);
}

function getSelectedPersonalVariant(material) {
  const cfg = VARIANT_CONFIG[material];
  if (!cfg || !personalVariantTS) return null;
  const v = personalVariantTS.getValue();
  if (!v) return null;
  return cfg.key === "flight"
    ? { key: cfg.key, value: parseInt(v, 10) }
    : { key: cfg.key, value: v };
}

function hidePersonalEnchants() {
  if (!personalEnchantTS) return;
  personalEnchantTS.clear(true);
  personalEnchantTS.clearOptions();
  personalEnchantTS.clearOptionGroups();
  $("personal-enchants-block").hidden = true;
  const cb = $("personal-enchants-strict");
  if (cb) cb.checked = false;
}

function isPersonalStrictMode() {
  const cb = $("personal-enchants-strict");
  return !!(cb && cb.checked);
}

function updatePersonalEnchantsForItem(material) {
  if (!personalEnchantTS) return;
  if (!material || !materialIsEnchantable.has(material) || !personalPlayer) {
    return hidePersonalEnchants();
  }

  const { fromTs, toTs } = getCurrentPeriod("personal");
  const ench = new Map();
  for (const s of DATA.sales) {
    if (s.s !== personalPlayer) continue;
    if (s.m !== material) continue;
    if (s.t < fromTs || s.t > toTs) continue;
    for (const [k, v] of Object.entries(s.e)) {
      ench.set(enchKey(k, v), (ench.get(enchKey(k, v)) || 0) + 1);
    }
  }
  if (ench.size === 0) return hidePersonalEnchants();

  const previouslySelected = personalEnchantTS.getValue();
  personalEnchantTS.clear(true);
  personalEnchantTS.clearOptions();
  personalEnchantTS.clearOptionGroups();

  const byBase = new Map();
  for (const [pair, count] of ench) {
    const [base, lvl] = parseEnchKey(pair);
    if (!byBase.has(base)) byBase.set(base, []);
    byBase.get(base).push({ lvl, count, pair });
  }
  const sortedBases = [...byBase.entries()].sort((a, b) =>
    enchBaseName(a[0]).localeCompare(enchBaseName(b[0])),
  );
  for (const [base, lvls] of sortedBases) {
    personalEnchantTS.addOptionGroup(base, { value: base, label: enchBaseName(base) });
    for (const { lvl, count, pair } of lvls.sort((a, b) => a.lvl - b.lvl)) {
      personalEnchantTS.addOption({
        value: pair,
        text: `${enchLabel(base, lvl)}  (${fmt.format(count)})`,
        group: base,
      });
    }
  }
  personalEnchantTS.refreshOptions(false);

  $("personal-enchants-block").hidden = false;
  personalEnchantTS.settings.placeholder = t("enchant_placeholder");
  personalEnchantTS.enable();
  syncTSPlaceholder(personalEnchantTS);

  for (const v of previouslySelected) {
    if (ench.has(v)) personalEnchantTS.addItem(v, true);
  }
}

function getSelectedPersonalEnchants() {
  if (!personalEnchantTS) return {};
  const out = {};
  for (const v of personalEnchantTS.getValue()) {
    const [k, lvl] = parseEnchKey(v);
    out[k] = lvl;
  }
  return out;
}

function rebuildPersonalItemFilter() {
  if (!personalItemFilterTS) return;
  const previousValue = personalItemFilterTS.getValue();
  personalItemFilterTS.clearOptions();
  personalItemFilterTS.settings.placeholder = t("personal.item_filter_placeholder");

  if (!personalPlayer) {
    personalItemFilterTS.clear(true);
    syncTSPlaceholder(personalItemFilterTS);
    return;
  }

  const { fromTs, toTs } = getCurrentPeriod("personal");
  const counts = new Map();
  for (const s of DATA.sales) {
    if (s.s !== personalPlayer) continue;
    if (s.t < fromTs || s.t > toTs) continue;
    counts.set(s.m, (counts.get(s.m) || 0) + 1);
  }

  const options = [];
  for (const [m, c] of [...counts.entries()].sort((a, b) => b[1] - a[1])) {
    options.push({
      value: m,
      text: `${prettyName(m)} (${fmt.format(c)})`,
    });
  }
  personalItemFilterTS.addOptions(options);
  syncTSPlaceholder(personalItemFilterTS);
  if (previousValue && counts.has(previousValue)) {
    personalItemFilterTS.setValue(previousValue, true);
  } else {
    personalItemFilterTS.clear(true);
  }
  personalItemFilterTS.refreshOptions(false);
}

function onPersonalPeriodChange() {
  syncPeriodPresetButtons("personal");
  rebuildPersonalItemFilter();
  // Variant/enchant counts shift with the period; refresh them too. Results
  // stay stale until the user clicks Analyser — same flow as Marché.
  const itemFilter = personalItemFilterTS && personalItemFilterTS.getValue();
  updatePersonalVariantForItem(itemFilter);
  updatePersonalEnchantsForItem(itemFilter);
  personalPage = 0;
}

function formatSaleLabel(sale) {
  let label = prettyName(sale.m);
  if (sale.v) {
    const cfg = VARIANT_CONFIG[sale.m];
    if (cfg) {
      const val = sale.v[cfg.key];
      if (val !== undefined) {
        label += ` (${cfg.formatValue(cfg.key === "flight" ? parseInt(val, 10) : val)})`;
      }
    }
  }
  if (sale.e && Object.keys(sale.e).length) {
    const enchs = Object.entries(sale.e)
      .map(([k, v]) => enchLabel(k, v))
      .join(", ");
    label += ` — ${enchs}`;
  }
  if (sale.n) label = `${sale.n} (${label})`;
  return label;
}

function runPersonalAnalysis() {
  if (!personalPlayer) {
    $("personal-results").hidden = true;
    $("personal-empty").hidden = true;
    return;
  }

  const { fromTs, toTs } = getCurrentPeriod("personal");
  const itemFilter = personalItemFilterTS && personalItemFilterTS.getValue();
  const variant = itemFilter ? getSelectedPersonalVariant(itemFilter) : null;
  const ench = itemFilter ? getSelectedPersonalEnchants() : {};
  const strict = itemFilter ? isPersonalStrictMode() : false;
  const sales = DATA.sales.filter(
    (s) =>
      s.s === personalPlayer &&
      s.t >= fromTs &&
      s.t <= toTs &&
      (!itemFilter || s.m === itemFilter) &&
      matchesVariant(s, variant) &&
      matchesEnchants(s.e, ench, strict),
  );

  if (!sales.length) {
    $("personal-results").hidden = true;
    $("personal-empty").hidden = false;
    return;
  }

  $("personal-empty").hidden = true;
  $("personal-results").hidden = false;

  const total = sales.reduce((acc, s) => acc + s.p, 0);
  const unitPrices = sales.map(unitPrice).sort((a, b) => a - b);
  const median = quantile(unitPrices, 0.5);
  // Single-value convention: totals are net (received), per-unit is gross.
  $("personal-total").textContent = fmtPrice(total);
  $("personal-count").textContent = fmt.format(sales.length);
  $("personal-median").textContent = fmtPriceRound(median);

  const sorted = sales.slice().sort(personalSortComparator);
  const totalPages = Math.max(1, Math.ceil(sorted.length / PERSONAL_PAGE_SIZE));
  if (personalPage >= totalPages) personalPage = totalPages - 1;
  if (personalPage < 0) personalPage = 0;
  const pageSlice = sorted.slice(
    personalPage * PERSONAL_PAGE_SIZE,
    (personalPage + 1) * PERSONAL_PAGE_SIZE,
  );

  renderPersonalBreakdown(sales);
  renderPersonalTable(pageSlice);
  renderPersonalPagination(totalPages);
  drawPersonalChart(sorted);
}

function buildPersonalBreakdown(sales) {
  // Group by full m+v+e signature so e.g. "Diamond Sword (Sharp V)" and
  // "Diamond Sword (Sharp IV)" stay separate — each combo is its own row.
  const groups = new Map();
  for (const s of sales) {
    const enchSig = Object.entries(s.e)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([k, l]) => `${k}:${l}`).join("+");
    const variantSig = s.v ? JSON.stringify(s.v) : "";
    const sig = `${s.m}|${variantSig}|${enchSig}`;
    if (!groups.has(sig)) groups.set(sig, { sample: s, sales: [] });
    groups.get(sig).sales.push(s);
  }
  return [...groups.values()].map((g) => {
    const total = g.sales.reduce((acc, s) => acc + s.p, 0);
    const unitPrices = g.sales.map(unitPrice).sort((a, b) => a - b);
    return {
      sample: g.sample,
      label: formatSaleLabel(g.sample),
      count: g.sales.length,
      total,
      medianUnit: quantile(unitPrices, 0.5),
    };
  });
}

function getPersonalBreakdownSortValue(row, key) {
  switch (key) {
    case "label":  return row.label.toLowerCase();
    case "count":  return row.count;
    case "total":  return row.total;
    case "median": return row.medianUnit;
    default:       return 0;
  }
}

function personalBreakdownComparator(a, b) {
  const dir = personalBreakdownSortDir === "asc" ? 1 : -1;
  const va = getPersonalBreakdownSortValue(a, personalBreakdownSortBy);
  const vb = getPersonalBreakdownSortValue(b, personalBreakdownSortBy);
  if (va < vb) return -1 * dir;
  if (va > vb) return 1 * dir;
  return 0;
}

function setPersonalBreakdownSort(key) {
  if (personalBreakdownSortBy === key) {
    personalBreakdownSortDir = personalBreakdownSortDir === "asc" ? "desc" : "asc";
  } else {
    personalBreakdownSortBy = key;
    personalBreakdownSortDir = key === "label" ? "asc" : "desc";
  }
  runPersonalAnalysis();
}

function renderPersonalBreakdown(sales) {
  const block = $("personal-breakdown");
  const rows = buildPersonalBreakdown(sales).sort(personalBreakdownComparator);

  if (!rows.length) {
    block.hidden = true;
    return;
  }
  block.hidden = false;

  const cols = [
    { key: "label",  i18n: "personal.breakdown.col.item" },
    { key: "count",  i18n: "personal.breakdown.col.count",  end: true },
    { key: "total",  i18n: "personal.breakdown.col.total",  end: true },
    { key: "median", i18n: "personal.breakdown.col.median", end: true },
  ];
  $("personal-breakdown-thead").innerHTML = "<tr>" + cols.map((c) => {
    const isActive = c.key === personalBreakdownSortBy;
    const arrow = isActive ? (personalBreakdownSortDir === "asc" ? "↑" : "↓") : "↕";
    const classes = ["sortable"];
    if (isActive) classes.push("sort-active");
    if (c.end) classes.push("text-end");
    return `<th class="${classes.join(" ")}" data-sort="${c.key}">${escapeHtml(t(c.i18n))} <span class="sort-icon">${arrow}</span></th>`;
  }).join("") + "</tr>";
  for (const th of $("personal-breakdown-thead").querySelectorAll("th.sortable")) {
    th.addEventListener("click", () => setPersonalBreakdownSort(th.dataset.sort));
  }

  const tbody = $("personal-breakdown-tbody");
  tbody.innerHTML = "";
  for (const row of rows) {
    const tr = document.createElement("tr");
    tr.classList.add("breakdown-row");
    tr.innerHTML = `
      <td>${escapeHtml(row.label)}</td>
      <td class="text-end font-monospace">${fmt.format(row.count)}</td>
      <td class="text-end font-monospace">${fmtPriceRound(row.total)}</td>
      <td class="text-end font-monospace">${fmtPriceRound(row.medianUnit)}</td>
    `;
    tr.addEventListener("click", () => switchToMarketWithSale(row.sample));
    tbody.appendChild(tr);
  }
}

function drawPersonalChart(salesAsc) {
  // salesAsc is the date-desc-sorted view; flip to chronological for cumul.
  const chrono = salesAsc.slice().sort((a, b) => a.t - b.t);
  if (personalChart) {
    try { personalChart.destroy(); } catch (_) { /* noop */ }
    personalChart = null;
  }
  const el = $("personal-chart");
  el.innerHTML = "";

  // Need at least 2 points to draw a meaningful curve.
  if (chrono.length < 2) {
    el.style.display = "none";
    $("personal-chart-empty").classList.remove("d-none");
    return;
  }
  el.style.display = "";
  $("personal-chart-empty").classList.add("d-none");

  let cumul = 0;
  const data = chrono.map((s) => {
    cumul += s.p;
    return { x: s.t, y: cumul };
  });

  personalChart = new ApexCharts(el, buildPersonalChartOptions(data));
  personalChart.render();
}

function buildPersonalChartOptions(data) {
  const css = getComputedStyle(document.documentElement);
  const isDark = document.documentElement.getAttribute("data-bs-theme") === "dark";
  const axisColor  = css.getPropertyValue("--bs-secondary-color").trim() || (isDark ? "#9ba1a6" : "#6c757d");
  const gridColor  = css.getPropertyValue("--bs-border-color").trim()   || (isDark ? "#2a2d31" : "#eef0f3");
  const primary    = css.getPropertyValue("--bs-primary").trim()         || "#3e63dd";
  const valueColor = css.getPropertyValue("--bs-emphasis-color").trim()  || (isDark ? "#f0f1f3" : "#1c1c1c");

  return {
    chart: {
      type: "area",
      height: 320,
      fontFamily: "inherit",
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: true, speed: 350, animateGradually: { enabled: false } },
      background: "transparent",
    },
    theme: { mode: isDark ? "dark" : "light" },
    series: [{ name: t("personal.chart.legend"), data }],
    colors: [primary],
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.02, stops: [0, 100] },
    },
    stroke: { curve: "smooth", width: 2.5 },
    markers: { size: 0, hover: { sizeOffset: 5 }, strokeWidth: 0 },
    xaxis: {
      type: "datetime",
      labels: { datetimeUTC: false, style: { colors: axisColor, fontSize: "11px" } },
      axisBorder: { color: gridColor },
      axisTicks: { color: gridColor },
      tooltip: { enabled: false },
    },
    yaxis: {
      labels: { style: { colors: axisColor, fontSize: "11px" }, formatter: (v) => fmtPriceRound(v) },
    },
    grid: { borderColor: gridColor, strokeDashArray: 3, padding: { left: 10, right: 10 } },
    legend: { show: false },
    dataLabels: { enabled: false },
    tooltip: {
      shared: false,
      intersect: false,
      custom: ({ dataPointIndex, w }) => {
        const point = w.config.series[0].data[dataPointIndex];
        return `
          <div style="padding:.5rem .75rem;font-family:inherit">
            <div style="font-weight:600;font-size:.8rem;color:${axisColor};margin-bottom:.25rem">${fmtDateTime(point.x)}</div>
            <div><strong style="font-size:1.1rem;color:${valueColor}">${fmtPrice(point.y)}</strong> <span style="color:${axisColor};font-size:.85rem">${t("personal.chart.legend")}</span></div>
          </div>`;
      },
    },
  };
}

function renderPersonalTable(sales) {
  const cols = [
    { key: "t",     i18n: "personal.table.col.date" },
    { key: "item",  i18n: "personal.table.col.item" },
    { key: "a",     i18n: "personal.table.col.qty",         end: true },
    { key: "unit",  i18n: "personal.table.col.price_unit",  end: true },
    { key: "total", i18n: "personal.table.col.price_total", end: true },
    { key: "buyer", i18n: "personal.table.col.buyer" },
  ];
  $("personal-thead").innerHTML = "<tr>" + cols.map((c) => {
    const isActive = c.key === personalSortBy;
    const arrow = isActive ? (personalSortDir === "asc" ? "↑" : "↓") : "↕";
    const classes = ["sortable"];
    if (isActive) classes.push("sort-active");
    if (c.end) classes.push("text-end");
    return `<th class="${classes.join(" ")}" data-sort="${c.key}">${escapeHtml(t(c.i18n))} <span class="sort-icon">${arrow}</span></th>`;
  }).join("") + "</tr>";
  for (const th of $("personal-thead").querySelectorAll("th.sortable")) {
    th.addEventListener("click", () => setPersonalSort(th.dataset.sort));
  }

  const tbody = $("personal-tbody");
  tbody.innerHTML = "";
  for (const sale of sales) {
    const tr = document.createElement("tr");
    const buyerName = sale.b ? (DATA.players[sale.b] || sale.b.slice(0, 8)) : null;
    tr.innerHTML = `
      <td class="text-nowrap">${escapeHtml(fmtDateTime(sale.t))}</td>
      <td><a href="#" class="personal-item-link link-primary text-decoration-none">${escapeHtml(formatSaleLabel(sale))}</a></td>
      <td class="text-end font-monospace">${fmt.format(sale.a)}</td>
      <td class="text-end font-monospace">${fmtPriceRound(unitPrice(sale))}</td>
      <td class="text-end font-monospace">${fmtPrice(sale.p)}</td>
      <td>${buyerName ? `<a href="#" class="personal-buyer-link">${escapeHtml(buyerName)}</a>` : "—"}</td>
    `;
    tr.querySelector(".personal-item-link")?.addEventListener("click", (e) => {
      e.preventDefault();
      switchToMarketWithSale(sale);
    });
    tr.querySelector(".personal-buyer-link")?.addEventListener("click", (e) => {
      e.preventDefault();
      if (sale.b && DATA.players[sale.b]) {
        personalPlayerTS.setValue(sale.b, false);
      }
    });
    tbody.appendChild(tr);
  }
}

function renderPersonalPagination(totalPages) {
  const pag = $("personal-pagination");
  if (totalPages <= 1) {
    pag.hidden = true;
    pag.innerHTML = "";
    return;
  }
  pag.hidden = false;
  const prevLabel = t("personal.pagination.prev");
  const nextLabel = t("personal.pagination.next");
  pag.innerHTML = `
    <button type="button" class="pagination-btn" id="personal-prev" aria-label="${escapeHtml(prevLabel)}" title="${escapeHtml(prevLabel)}" ${personalPage === 0 ? "disabled" : ""}>‹</button>
    <span class="text-secondary">${t("personal.pagination.range", personalPage + 1, totalPages)}</span>
    <button type="button" class="pagination-btn" id="personal-next" aria-label="${escapeHtml(nextLabel)}" title="${escapeHtml(nextLabel)}" ${personalPage >= totalPages - 1 ? "disabled" : ""}>›</button>
  `;
  $("personal-prev")?.addEventListener("click", () => {
    personalPage--;
    runPersonalAnalysis();
  });
  $("personal-next")?.addEventListener("click", () => {
    personalPage++;
    runPersonalAnalysis();
  });
}

function switchToMarketWithSale(sale) {
  setMode("market");
  itemTS.setValue(sale.m, false);
  // The item onChange handler rebuilds the variant + enchant blocks; pre-fill
  // those after the rebuild (microtask delay so Tom-Select is populated).
  // Pre-fill only — the user triggers Analyser themselves, same flow as
  // applyBreakdownFilter (`app.js`).
  Promise.resolve().then(() => {
    if (sale.v) {
      const cfg = VARIANT_CONFIG[sale.m];
      if (cfg) {
        const val = sale.v[cfg.key];
        if (val !== undefined) variantTS.setValue(String(val), false);
      }
    }
    if (sale.e && Object.keys(sale.e).length) {
      enchantTS.clear(true);
      for (const [k, v] of Object.entries(sale.e)) {
        enchantTS.addItem(`${k}:${v}`, true);
      }
    }
    $("form").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

init();
