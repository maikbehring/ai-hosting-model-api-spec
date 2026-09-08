# AI Hosting Model API Spec

Spec, Fixtures und Live-Editor für die mittwald **AI-Hosting-Landingpage**.

Ziel: Website-Entwickler können gegen ein stabiles JSON-Schema bauen, bevor die echte API steht. Die Fixtures spiegeln die Portal-Liste „Verfügbare Modelle“ (inkl. Lifecycle-Status und Tokenfaktor).

## Schnellstart

```bash
# lokal ansehen (wichtig: über HTTP, nicht file://)
npx --yes serve .
# dann im Browser: http://localhost:3000/api-spec.html
```

Oder einen anderen Static-Server nutzen. Relativpfade zu `api-fixture/` brauchen einen HTTP-Server.

## Was liegt wo?

| Pfad | Zweck |
|---|---|
| [`api-spec.html`](./api-spec.html) | Entwickler-Doku + Live-Editor + Tabellenansicht |
| [`api-fixture/catalog.json`](./api-fixture/catalog.json) | Gemeinsamer Katalog (`GET /v1/catalog`) |
| [`api-fixture/models.json`](./api-fixture/models.json) | Modell-Liste (`GET /v1/models`) |
| [`api-fixture/models/*.json`](./api-fixture/models/) | Einzelmodelle (`GET /v1/models/{id}`) |
| [`api-fixture/_embed_*.js`](./api-fixture/) | Eingebettete Defaults für den Editor (ohne Fetch) |
| [`examples/qwen3-8-27b.landing.json`](./examples/qwen3-8-27b.landing.json) | All-in-one Beispiel (älterer Monolith, nur Referenz) |

## Ziel-API (Schema)

```
GET /v1/catalog          → Benchmarks, Tiers, Taxonomy, Meta-Hinweise
GET /v1/models           → leichte Liste (id, display_name, status, token_factor, …)
GET /v1/models/{id}      → volles Modell-Objekt
```

**Faustregel**

- Gemeinsam / wiederkehrend → `catalog.json`
- Pro Modell unterschiedlich → `models/{id}.json`

## Landingpage: was rendern?

Pro Modell-Karte typischerweise:

1. `display_name` + Creator  
2. Lifecycle-Status (`lifecycle.label`) + Tokenfaktor (`token_factor_label`)  
3. `pitch` / `short_description`  
4. Specs: Params, Context, Lizenz, Vision, VRAM INT4  
5. 3–5 `highlights` — Label/Blurb aus dem Catalog joinen  
6. Quantisierungs-Hinweis aus `catalog.meta.score_precision.note`  
7. CTAs (`cta.primary` / `cta.secondary`)

Highlight-Join (vereinfacht):

```js
const card = model.highlights.map((h) => {
  const b = catalog.benchmarks[h.key] || {}
  return {
    value: h.value,
    label: b.short_name || b.name || h.key,
    blurb: b.blurb?.de || ""
  }
})
```

## Quantisierung

Es gibt **einen Score pro Modell** (typisch BF16/FP16).  
`vram.fp16` / `int8` / `int4` sind Speicher-Schätzungen — keine getrennten Benchmarks.

## Modelle in den Fixtures

Die Liste entspricht dem Developer-Portal „Verfügbare Modelle“ (Stand der Spec):

- gpt-oss-120b  
- Ministral-3-14B-Instruct-2512  
- whisper-large-v3-turbo  
- Qwen3-TTS-12Hz-1.7B-CustomVoice  
- Qwen3.5-122B-A10B-FP8  
- Qwen3.6-35B-A3B-FP8  
- Qwen3.8-27B-NVFP4  
- Qwen3.5-0.8B  
- Qwen3-VL-Reranker-2B  
- GLM-OCR  
- Qwen3-Embedding-8B  

## Editor in `api-spec.html`

- Modell- und Catalog-Felder bearbeiten  
- Live-Vorschau + JSON-Download  
- Tabellenansicht mit Spaltenwahl und Sortierung  
- Änderungen im Browser (`localStorage`) — nicht automatisch in den Fixture-Dateien

## Quellen

- [mittwald AI Hosting Models (Docs)](https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/)  
- [AI Hosting Bench](https://ai-hosting-bench.mittwald.app)  

`schema_version`: `1.0`
