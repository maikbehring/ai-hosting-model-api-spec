const DEFAULT_MODELS = {
  "gpt-oss-120b": {
    "schema_version": "1.0",
    "id": "gpt-oss-120b",
    "slug": "gpt-oss-120b",
    "display_name": "gpt-oss-120b",
    "date_added": "2026-01-23",
    "updated_at": "2026-06-25",
    "url": "https://huggingface.co/openai/gpt-oss-120b",
    "params": "117B-A5.1B",
    "params_active": null,
    "context": "128k",
    "license": null,
    "creator": {
      "name": "OpenAI",
      "url": "https://openai.com/index/introducing-gpt-oss/",
      "logo_url": null
    },
    "short_description": "Open-Source-Großmodell (open-weight). Gut für komplexe Anweisungen und Reasoning.",
    "pitch": "Großes Open-Weight-Modell für anspruchsvolle Chat- und Reasoning-Jobs.",
    "tags": [
      "chat",
      "reasoning"
    ],
    "not_ideal_for": [],
    "badges": [
      "shared",
      "lts"
    ],
    "capabilities": {
      "vision": false,
      "tools": true,
      "reasoning": true,
      "function_calling": true,
      "multilingual": true
    },
    "vram": {
      "fp16": 262,
      "int8": 131,
      "int4": 66
    },
    "vram_unit": "GB",
    "recommended_quantization": "int4",
    "hosting": {
      "shared": true,
      "shared_model_id": "gpt-oss-120b",
      "api_model_id": "gpt-oss-120b",
      "recommended_quant": "int4",
      "fits_tiers": [],
      "comfortable_tiers": [],
      "docs_url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "playground_url": null,
      "status": "lts",
      "status_label": "LTS",
      "token_factor": 1.0,
      "token_factor_label": "1x"
    },
    "lifecycle": {
      "status": "lts",
      "label": "LTS"
    },
    "token_factor": 1.0,
    "token_factor_label": "1x",
    "pricing": {
      "input_per_1m": 0.03,
      "output_per_1m": 0.17,
      "blended_3_to_1": 0.065,
      "currency": "USD",
      "source": "openrouter:openai/gpt-oss-120b"
    },
    "mittwald_pricing": {
      "shared_input_per_1m": null,
      "shared_output_per_1m": null,
      "currency": "EUR",
      "dedicated_via_tier": true,
      "token_factor": 1.0,
      "token_factor_label": "1x"
    },
    "highlights": [
      {
        "key": "aa_coding_index",
        "value": 30.4,
        "updated": "2026-06-25"
      },
      {
        "key": "aa_intelligence_index",
        "value": 23.8,
        "updated": "2026-06-18"
      },
      {
        "key": "terminal_bench_2_1",
        "value": 26.2,
        "updated": "2026-06-18"
      },
      {
        "key": "livecodebench",
        "value": 87.8,
        "updated": "2026-02-13"
      },
      {
        "key": "swe_bench_verified",
        "value": 62.4,
        "updated": "2026-02-13"
      }
    ],
    "ranking": {
      "shared_overall": null,
      "size_class": null,
      "size_class_label": null,
      "rank_in_size_class_coding": null,
      "rank_in_shared_coding": null
    },
    "alternatives": [],
    "urls": {
      "model_card": "https://huggingface.co/openai/gpt-oss-120b",
      "creator": "https://openai.com/index/introducing-gpt-oss/",
      "bench": "https://ai-hosting-bench.p-asdxps.project.space",
      "docs": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "portal": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
    },
    "cta": {
      "primary": {
        "label": "Modell nutzen",
        "url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
      },
      "secondary": {
        "label": "Im Bench vergleichen",
        "url": "https://ai-hosting-bench.p-asdxps.project.space"
      }
    },
    "performance": {
      "tokens_per_second": null,
      "time_to_first_token_ms": null,
      "measured_on_tier": null,
      "measured_quant": null
    },
    "languages": [
      "de",
      "en",
      "multilingual"
    ],
    "i18n": {
      "de": {
        "display_name": "gpt-oss-120b",
        "short_description": "Open-Source-Großmodell (open-weight). Gut für komplexe Anweisungen und Reasoning.",
        "pitch": "Großes Open-Weight-Modell für anspruchsvolle Chat- und Reasoning-Jobs."
      },
      "en": {
        "display_name": "gpt-oss-120b",
        "short_description": "Open-Source-Großmodell (open-weight). Gut für komplexe Anweisungen und Reasoning.",
        "pitch": "Großes Open-Weight-Modell für anspruchsvolle Chat- und Reasoning-Jobs."
      }
    },
    "scores": {
      "aa_intelligence_index": 23.8,
      "aa_coding_index": 30.4,
      "swe_bench_verified": 62.4,
      "swe_bench_pro": 16.2,
      "swe_rebench": 46.67,
      "livecodebench": 87.8,
      "scicode": 38.9,
      "terminal_bench_hard": 23.5,
      "terminal_bench_2_0": 18.7,
      "terminal_bench_2_1": 26.2,
      "tau2_bench_telecom": 65.8,
      "browsecomp": 28.7,
      "aime_2025": 93.4,
      "gpqa_diamond": 78.2,
      "hle": 18.5
    },
    "scores_updated": {
      "aa_intelligence_index": "2026-06-18",
      "aa_coding_index": "2026-06-25",
      "swe_bench_verified": "2026-02-13",
      "swe_bench_pro": "2026-03-19",
      "swe_rebench": "2026-04-24",
      "livecodebench": "2026-02-13",
      "scicode": "2026-02-24",
      "terminal_bench_hard": "2026-02-13",
      "terminal_bench_2_0": "2026-02-13",
      "terminal_bench_2_1": "2026-06-18",
      "tau2_bench_telecom": "2026-02-13",
      "browsecomp": "2026-02-13",
      "aime_2025": "2026-02-13",
      "gpqa_diamond": "2026-02-13",
      "hle": "2026-02-13"
    },
    "changelog": [
      {
        "date": "2026-09-08",
        "note": "An Portal-Liste inkl. Status & Tokenfaktor angeglichen"
      }
    ]
  },
  "ministral-3-14b": {
    "schema_version": "1.0",
    "id": "ministral-3-14b",
    "slug": "ministral-3-14b",
    "display_name": "Ministral-3-14B-Instruct-2512",
    "date_added": "2026-01-23",
    "updated_at": "2026-06-29",
    "url": "https://huggingface.co/mistralai/Ministral-3-14B-Instruct-2512",
    "params": "14B",
    "params_active": null,
    "context": "256k",
    "license": null,
    "creator": {
      "name": "Mistral",
      "url": "https://mistral.ai/",
      "logo_url": null
    },
    "short_description": "14B-Instruct-Modell von Mistral — ausgewogen für Produktivität und Code.",
    "pitch": "Kompaktes Mistral-Modell für Chat und Coding auf mittlerer Hardware.",
    "tags": [
      "chat",
      "coding"
    ],
    "not_ideal_for": [],
    "badges": [
      "shared",
      "lts"
    ],
    "capabilities": {
      "vision": false,
      "tools": true,
      "reasoning": true,
      "function_calling": true,
      "multilingual": true
    },
    "vram": {
      "fp16": 30,
      "int8": 15,
      "int4": 7.6
    },
    "vram_unit": "GB",
    "recommended_quantization": "int4",
    "hosting": {
      "shared": true,
      "shared_model_id": "Ministral-3-14B-Instruct-2512",
      "api_model_id": "Ministral-3-14B-Instruct-2512",
      "recommended_quant": "int4",
      "fits_tiers": [],
      "comfortable_tiers": [],
      "docs_url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "playground_url": null,
      "status": "lts",
      "status_label": "LTS",
      "token_factor": 1.0,
      "token_factor_label": "1x"
    },
    "lifecycle": {
      "status": "lts",
      "label": "LTS"
    },
    "token_factor": 1.0,
    "token_factor_label": "1x",
    "pricing": {
      "input_per_1m": 0.2,
      "output_per_1m": 0.2,
      "blended_3_to_1": 0.2,
      "currency": "USD",
      "source": "openrouter:mistralai/ministral-14b-2512"
    },
    "mittwald_pricing": {
      "shared_input_per_1m": null,
      "shared_output_per_1m": null,
      "currency": "EUR",
      "dedicated_via_tier": true,
      "token_factor": 1.0,
      "token_factor_label": "1x"
    },
    "highlights": [
      {
        "key": "aa_coding_index",
        "value": 14.4,
        "updated": "2026-06-29"
      },
      {
        "key": "aa_intelligence_index",
        "value": 11.1,
        "updated": "2026-06-29"
      },
      {
        "key": "mmmu_pro",
        "value": 49.8,
        "updated": "2026-05-03"
      },
      {
        "key": "terminal_bench_2_1",
        "value": 9.7,
        "updated": "2026-06-29"
      },
      {
        "key": "livecodebench",
        "value": 35.1,
        "updated": "2026-05-03"
      }
    ],
    "ranking": {
      "shared_overall": null,
      "size_class": null,
      "size_class_label": null,
      "rank_in_size_class_coding": null,
      "rank_in_shared_coding": null
    },
    "alternatives": [],
    "urls": {
      "model_card": "https://huggingface.co/mistralai/Ministral-3-14B-Instruct-2512",
      "creator": "https://mistral.ai/",
      "bench": "https://ai-hosting-bench.p-asdxps.project.space",
      "docs": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "portal": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
    },
    "cta": {
      "primary": {
        "label": "Modell nutzen",
        "url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
      },
      "secondary": {
        "label": "Im Bench vergleichen",
        "url": "https://ai-hosting-bench.p-asdxps.project.space"
      }
    },
    "performance": {
      "tokens_per_second": null,
      "time_to_first_token_ms": null,
      "measured_on_tier": null,
      "measured_quant": null
    },
    "languages": [
      "de",
      "en",
      "multilingual"
    ],
    "i18n": {
      "de": {
        "display_name": "Ministral-3-14B-Instruct-2512",
        "short_description": "14B-Instruct-Modell von Mistral — ausgewogen für Produktivität und Code.",
        "pitch": "Kompaktes Mistral-Modell für Chat und Coding auf mittlerer Hardware."
      },
      "en": {
        "display_name": "Ministral-3-14B-Instruct-2512",
        "short_description": "14B-Instruct-Modell von Mistral — ausgewogen für Produktivität und Code.",
        "pitch": "Kompaktes Mistral-Modell für Chat und Coding auf mittlerer Hardware."
      }
    },
    "scores": {
      "aa_intelligence_index": 11.1,
      "aa_coding_index": 14.4,
      "livecodebench": 35.1,
      "scicode": 23.6,
      "terminal_bench_hard": 4.5,
      "terminal_bench_2_1": 9.7,
      "tau2_bench_telecom": 27.2,
      "aime_2025": 30,
      "gpqa_diamond": 57.2,
      "hle": 4.6,
      "mmmu_pro": 49.8
    },
    "scores_updated": {
      "aa_intelligence_index": "2026-06-29",
      "aa_coding_index": "2026-06-29",
      "livecodebench": "2026-05-03",
      "scicode": "2026-05-03",
      "terminal_bench_hard": "2026-05-03",
      "terminal_bench_2_1": "2026-06-29",
      "tau2_bench_telecom": "2026-05-03",
      "aime_2025": "2026-05-03",
      "gpqa_diamond": "2026-05-03",
      "hle": "2026-05-03",
      "mmmu_pro": "2026-05-03"
    },
    "changelog": [
      {
        "date": "2026-09-08",
        "note": "An Portal-Liste inkl. Status & Tokenfaktor angeglichen"
      }
    ]
  },
  "whisper-large-v3-turbo": {
    "schema_version": "1.0",
    "id": "whisper-large-v3-turbo",
    "slug": "whisper-large-v3-turbo",
    "display_name": "whisper-large-v3-turbo",
    "date_added": null,
    "updated_at": "2026-09-08",
    "url": null,
    "params": null,
    "params_active": null,
    "context": null,
    "license": null,
    "creator": {
      "name": null,
      "url": null,
      "logo_url": null
    },
    "short_description": "OpenAI Whisper Large V3 Turbo — Speech-to-Text auf mittwald Shared AI Hosting.",
    "pitch": "Schnelles Speech-to-Text-Modell für Transkription.",
    "tags": [
      "speech",
      "asr"
    ],
    "not_ideal_for": [
      "Text-Chat / Coding (Audio-Spezialmodell)"
    ],
    "badges": [
      "shared",
      "lts",
      "speech"
    ],
    "capabilities": {
      "vision": false,
      "tools": false,
      "reasoning": false,
      "function_calling": false,
      "multilingual": true
    },
    "vram": {
      "fp16": null,
      "int8": null,
      "int4": null
    },
    "vram_unit": "GB",
    "recommended_quantization": null,
    "hosting": {
      "shared": true,
      "shared_model_id": "whisper-large-v3-turbo",
      "api_model_id": "whisper-large-v3-turbo",
      "recommended_quant": null,
      "fits_tiers": [],
      "comfortable_tiers": [],
      "docs_url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "playground_url": null,
      "status": "lts",
      "status_label": "LTS",
      "token_factor": 0.5,
      "token_factor_label": "0,5x"
    },
    "lifecycle": {
      "status": "lts",
      "label": "LTS"
    },
    "token_factor": 0.5,
    "token_factor_label": "0,5x",
    "pricing": null,
    "mittwald_pricing": {
      "shared_input_per_1m": null,
      "shared_output_per_1m": null,
      "currency": "EUR",
      "dedicated_via_tier": false,
      "token_factor": 0.5,
      "token_factor_label": "0,5x"
    },
    "highlights": [],
    "ranking": {
      "shared_overall": null,
      "size_class": null,
      "size_class_label": null,
      "rank_in_size_class_coding": null,
      "rank_in_shared_coding": null
    },
    "alternatives": [],
    "urls": {
      "model_card": null,
      "creator": null,
      "bench": "https://ai-hosting-bench.p-asdxps.project.space",
      "docs": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "portal": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
    },
    "cta": {
      "primary": {
        "label": "Modell nutzen",
        "url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
      },
      "secondary": {
        "label": "Im Bench vergleichen",
        "url": "https://ai-hosting-bench.p-asdxps.project.space"
      }
    },
    "performance": {
      "tokens_per_second": null,
      "time_to_first_token_ms": null,
      "measured_on_tier": null,
      "measured_quant": null
    },
    "languages": [
      "de",
      "en",
      "multilingual"
    ],
    "i18n": {
      "de": {
        "display_name": "whisper-large-v3-turbo",
        "short_description": "OpenAI Whisper Large V3 Turbo — Speech-to-Text auf mittwald Shared AI Hosting.",
        "pitch": "Schnelles Speech-to-Text-Modell für Transkription."
      },
      "en": {
        "display_name": "whisper-large-v3-turbo",
        "short_description": "OpenAI Whisper Large V3 Turbo — Speech-to-Text auf mittwald Shared AI Hosting.",
        "pitch": "Schnelles Speech-to-Text-Modell für Transkription."
      }
    },
    "scores": {},
    "scores_updated": {},
    "changelog": [
      {
        "date": "2026-09-08",
        "note": "An Portal-Liste inkl. Status & Tokenfaktor angeglichen"
      }
    ],
    "category": "speech"
  },
  "qwen3-tts-12hz-1-7b-customvoice": {
    "schema_version": "1.0",
    "id": "qwen3-tts-12hz-1-7b-customvoice",
    "slug": "qwen3-tts-12hz-1-7b-customvoice",
    "display_name": "Qwen3-TTS-12Hz-1.7B-CustomVoice",
    "date_added": null,
    "updated_at": "2026-09-08",
    "url": null,
    "params": null,
    "params_active": null,
    "context": null,
    "license": null,
    "creator": {
      "name": null,
      "url": null,
      "logo_url": null
    },
    "short_description": "Qwen3 TTS 12Hz 1.7B CustomVoice für Sprachausgabe auf Shared AI Hosting.",
    "pitch": "Text-to-Speech mit Custom Voice — aktuell in der Testphase.",
    "tags": [
      "tts",
      "speech"
    ],
    "not_ideal_for": [
      "Text-Chat / Coding (Audio-Spezialmodell)"
    ],
    "badges": [
      "shared",
      "testphase",
      "tts"
    ],
    "capabilities": {
      "vision": false,
      "tools": false,
      "reasoning": false,
      "function_calling": false,
      "multilingual": true
    },
    "vram": {
      "fp16": null,
      "int8": null,
      "int4": null
    },
    "vram_unit": "GB",
    "recommended_quantization": null,
    "hosting": {
      "shared": true,
      "shared_model_id": "Qwen3-TTS-12Hz-1.7B-CustomVoice",
      "api_model_id": "Qwen3-TTS-12Hz-1.7B-CustomVoice",
      "recommended_quant": null,
      "fits_tiers": [],
      "comfortable_tiers": [],
      "docs_url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "playground_url": null,
      "status": "testphase",
      "status_label": "Testphase",
      "token_factor": 1.0,
      "token_factor_label": "1x"
    },
    "lifecycle": {
      "status": "testphase",
      "label": "Testphase"
    },
    "token_factor": 1.0,
    "token_factor_label": "1x",
    "pricing": null,
    "mittwald_pricing": {
      "shared_input_per_1m": null,
      "shared_output_per_1m": null,
      "currency": "EUR",
      "dedicated_via_tier": false,
      "token_factor": 1.0,
      "token_factor_label": "1x"
    },
    "highlights": [],
    "ranking": {
      "shared_overall": null,
      "size_class": null,
      "size_class_label": null,
      "rank_in_size_class_coding": null,
      "rank_in_shared_coding": null
    },
    "alternatives": [],
    "urls": {
      "model_card": null,
      "creator": null,
      "bench": "https://ai-hosting-bench.p-asdxps.project.space",
      "docs": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "portal": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
    },
    "cta": {
      "primary": {
        "label": "Modell nutzen",
        "url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
      },
      "secondary": {
        "label": "Im Bench vergleichen",
        "url": "https://ai-hosting-bench.p-asdxps.project.space"
      }
    },
    "performance": {
      "tokens_per_second": null,
      "time_to_first_token_ms": null,
      "measured_on_tier": null,
      "measured_quant": null
    },
    "languages": [
      "de",
      "en",
      "multilingual"
    ],
    "i18n": {
      "de": {
        "display_name": "Qwen3-TTS-12Hz-1.7B-CustomVoice",
        "short_description": "Qwen3 TTS 12Hz 1.7B CustomVoice für Sprachausgabe auf Shared AI Hosting.",
        "pitch": "Text-to-Speech mit Custom Voice — aktuell in der Testphase."
      },
      "en": {
        "display_name": "Qwen3-TTS-12Hz-1.7B-CustomVoice",
        "short_description": "Qwen3 TTS 12Hz 1.7B CustomVoice für Sprachausgabe auf Shared AI Hosting.",
        "pitch": "Text-to-Speech mit Custom Voice — aktuell in der Testphase."
      }
    },
    "scores": {},
    "scores_updated": {},
    "changelog": [
      {
        "date": "2026-09-08",
        "note": "An Portal-Liste inkl. Status & Tokenfaktor angeglichen"
      }
    ],
    "category": "tts"
  },
  "qwen3-5-122b-a10b": {
    "schema_version": "1.0",
    "id": "qwen3-5-122b-a10b",
    "slug": "qwen3-5-122b-a10b",
    "display_name": "Qwen3.5-122B-A10B-FP8",
    "date_added": "2026-02-25",
    "updated_at": "2026-07-27",
    "url": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
    "params": "122B-A10B",
    "params_active": null,
    "context": "256k",
    "license": null,
    "creator": {
      "name": "Alibaba",
      "url": "https://qwen.ai/",
      "logo_url": null
    },
    "short_description": "Mixture-of-Experts mit 122B Gesamt- / ~10B Aktiv-Parametern. Auf Shared als FP8.",
    "pitch": "Großes MoE-Modell mit starker Allround-Leistung bei aktiv wenigen Parametern.",
    "tags": [
      "coding",
      "chat",
      "agents"
    ],
    "not_ideal_for": [],
    "badges": [
      "shared",
      "stable",
      "vision"
    ],
    "capabilities": {
      "vision": true,
      "tools": true,
      "reasoning": true,
      "function_calling": true,
      "multilingual": true
    },
    "vram": {
      "fp16": 273,
      "int8": 136,
      "int4": 68
    },
    "vram_unit": "GB",
    "recommended_quantization": "int4",
    "hosting": {
      "shared": true,
      "shared_model_id": "Qwen3.5-122B-A10B-FP8",
      "api_model_id": "Qwen3.5-122B-A10B-FP8",
      "recommended_quant": "int4",
      "fits_tiers": [],
      "comfortable_tiers": [],
      "docs_url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "playground_url": null,
      "status": "stable",
      "status_label": "Stable",
      "token_factor": 3.0,
      "token_factor_label": "3x"
    },
    "lifecycle": {
      "status": "stable",
      "label": "Stable"
    },
    "token_factor": 3.0,
    "token_factor_label": "3x",
    "pricing": {
      "input_per_1m": 0.29,
      "output_per_1m": 2.4,
      "blended_3_to_1": 0.8175,
      "currency": "USD",
      "source": "openrouter:qwen/qwen3.5-122b-a10b"
    },
    "mittwald_pricing": {
      "shared_input_per_1m": null,
      "shared_output_per_1m": null,
      "currency": "EUR",
      "dedicated_via_tier": true,
      "token_factor": 3.0,
      "token_factor_label": "3x"
    },
    "highlights": [
      {
        "key": "aa_coding_index",
        "value": 45.7,
        "updated": "2026-06-25"
      },
      {
        "key": "aa_intelligence_index",
        "value": 32.3,
        "updated": "2026-06-18"
      },
      {
        "key": "mmmu_pro",
        "value": 75,
        "updated": "2026-03-06"
      },
      {
        "key": "terminal_bench_2_1",
        "value": 47.6,
        "updated": "2026-06-18"
      },
      {
        "key": "livecodebench",
        "value": 78.9,
        "updated": "2026-02-25"
      }
    ],
    "ranking": {
      "shared_overall": null,
      "size_class": null,
      "size_class_label": null,
      "rank_in_size_class_coding": null,
      "rank_in_shared_coding": null
    },
    "alternatives": [],
    "urls": {
      "model_card": "https://huggingface.co/Qwen/Qwen3.5-122B-A10B",
      "creator": "https://qwen.ai/",
      "bench": "https://ai-hosting-bench.p-asdxps.project.space",
      "docs": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "portal": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
    },
    "cta": {
      "primary": {
        "label": "Modell nutzen",
        "url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
      },
      "secondary": {
        "label": "Im Bench vergleichen",
        "url": "https://ai-hosting-bench.p-asdxps.project.space"
      }
    },
    "performance": {
      "tokens_per_second": null,
      "time_to_first_token_ms": null,
      "measured_on_tier": null,
      "measured_quant": null
    },
    "languages": [
      "de",
      "en",
      "multilingual"
    ],
    "i18n": {
      "de": {
        "display_name": "Qwen3.5-122B-A10B-FP8",
        "short_description": "Mixture-of-Experts mit 122B Gesamt- / ~10B Aktiv-Parametern. Auf Shared als FP8.",
        "pitch": "Großes MoE-Modell mit starker Allround-Leistung bei aktiv wenigen Parametern."
      },
      "en": {
        "display_name": "Qwen3.5-122B-A10B-FP8",
        "short_description": "Mixture-of-Experts mit 122B Gesamt- / ~10B Aktiv-Parametern. Auf Shared als FP8.",
        "pitch": "Großes MoE-Modell mit starker Allround-Leistung bei aktiv wenigen Parametern."
      }
    },
    "scores": {
      "aa_intelligence_index": 32.3,
      "aa_coding_index": 45.7,
      "swe_bench_verified": 72,
      "livecodebench": 78.9,
      "scicode": 42,
      "terminal_bench_hard": 31.1,
      "terminal_bench_2_0": 49.4,
      "terminal_bench_2_1": 47.6,
      "tau2_bench_telecom": 93.6,
      "browsecomp": 63.8,
      "gpqa_diamond": 85.7,
      "hle": 23.4,
      "mmmu_pro": 75,
      "osworld_verified": 58,
      "arena_elo": 1417
    },
    "scores_updated": {
      "aa_intelligence_index": "2026-06-18",
      "aa_coding_index": "2026-06-25",
      "swe_bench_verified": "2026-02-25",
      "livecodebench": "2026-02-25",
      "scicode": "2026-03-06",
      "terminal_bench_hard": "2026-03-03",
      "terminal_bench_2_0": "2026-02-25",
      "terminal_bench_2_1": "2026-06-18",
      "tau2_bench_telecom": "2026-03-06",
      "browsecomp": "2026-02-25",
      "gpqa_diamond": "2026-03-06",
      "hle": "2026-03-06",
      "mmmu_pro": "2026-03-06",
      "osworld_verified": "2026-05-13",
      "arena_elo": "2026-07-27"
    },
    "changelog": [
      {
        "date": "2026-09-08",
        "note": "An Portal-Liste inkl. Status & Tokenfaktor angeglichen"
      }
    ]
  },
  "qwen3-6-35b-a3b": {
    "schema_version": "1.0",
    "id": "qwen3-6-35b-a3b",
    "slug": "qwen3-6-35b-a3b",
    "display_name": "Qwen3.6-35B-A3B-FP8",
    "date_added": "2026-04-22",
    "updated_at": "2026-07-02",
    "url": "https://huggingface.co/Qwen/Qwen3.6-35B-A3B",
    "params": "35B-A3B",
    "params_active": null,
    "context": "256k",
    "license": null,
    "creator": {
      "name": "Alibaba",
      "url": "https://qwen.ai/",
      "logo_url": null
    },
    "short_description": "MoE-Modell mit Vision und guter Coding-/Tool-Performance. Shared als FP8.",
    "pitch": "Starkes Coding-/Agenten-Modell mit Vision — Shared-Standard.",
    "tags": [
      "coding",
      "chat",
      "vision",
      "agents",
      "tools"
    ],
    "not_ideal_for": [],
    "badges": [
      "shared",
      "stable",
      "vision",
      "recommended"
    ],
    "capabilities": {
      "vision": true,
      "tools": true,
      "reasoning": true,
      "function_calling": true,
      "multilingual": true
    },
    "vram": {
      "fp16": 78,
      "int8": 39,
      "int4": 20
    },
    "vram_unit": "GB",
    "recommended_quantization": "int4",
    "hosting": {
      "shared": true,
      "shared_model_id": "Qwen3.6-35B-A3B-FP8",
      "api_model_id": "Qwen3.6-35B-A3B-FP8",
      "recommended_quant": "int4",
      "fits_tiers": [],
      "comfortable_tiers": [],
      "docs_url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "playground_url": null,
      "status": "stable",
      "status_label": "Stable",
      "token_factor": 1.0,
      "token_factor_label": "1x"
    },
    "lifecycle": {
      "status": "stable",
      "label": "Stable"
    },
    "token_factor": 1.0,
    "token_factor_label": "1x",
    "pricing": {
      "input_per_1m": 0.15,
      "output_per_1m": 1,
      "blended_3_to_1": 0.3625,
      "currency": "USD",
      "source": "openrouter:qwen/qwen3.6-35b-a3b"
    },
    "mittwald_pricing": {
      "shared_input_per_1m": null,
      "shared_output_per_1m": null,
      "currency": "EUR",
      "dedicated_via_tier": true,
      "token_factor": 1.0,
      "token_factor_label": "1x"
    },
    "highlights": [
      {
        "key": "aa_coding_index",
        "value": 41.9,
        "updated": "2026-06-25"
      },
      {
        "key": "aa_intelligence_index",
        "value": 31.6,
        "updated": "2026-06-18"
      },
      {
        "key": "mmmu_pro",
        "value": 75,
        "updated": "2026-04-22"
      },
      {
        "key": "terminal_bench_2_1",
        "value": 44.9,
        "updated": "2026-06-18"
      },
      {
        "key": "livecodebench",
        "value": 80.4,
        "updated": "2026-04-22"
      }
    ],
    "ranking": {
      "shared_overall": null,
      "size_class": null,
      "size_class_label": null,
      "rank_in_size_class_coding": null,
      "rank_in_shared_coding": null
    },
    "alternatives": [],
    "urls": {
      "model_card": "https://huggingface.co/Qwen/Qwen3.6-35B-A3B",
      "creator": "https://qwen.ai/",
      "bench": "https://ai-hosting-bench.p-asdxps.project.space",
      "docs": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "portal": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
    },
    "cta": {
      "primary": {
        "label": "Modell nutzen",
        "url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
      },
      "secondary": {
        "label": "Im Bench vergleichen",
        "url": "https://ai-hosting-bench.p-asdxps.project.space"
      }
    },
    "performance": {
      "tokens_per_second": null,
      "time_to_first_token_ms": null,
      "measured_on_tier": null,
      "measured_quant": null
    },
    "languages": [
      "de",
      "en",
      "multilingual"
    ],
    "i18n": {
      "de": {
        "display_name": "Qwen3.6-35B-A3B-FP8",
        "short_description": "MoE-Modell mit Vision und guter Coding-/Tool-Performance. Shared als FP8.",
        "pitch": "Starkes Coding-/Agenten-Modell mit Vision — Shared-Standard."
      },
      "en": {
        "display_name": "Qwen3.6-35B-A3B-FP8",
        "short_description": "MoE-Modell mit Vision und guter Coding-/Tool-Performance. Shared als FP8.",
        "pitch": "Starkes Coding-/Agenten-Modell mit Vision — Shared-Standard."
      }
    },
    "scores": {
      "aa_intelligence_index": 31.6,
      "aa_coding_index": 41.9,
      "swe_bench_verified": 73.4,
      "swe_bench_pro": 49.5,
      "swe_rebench": 33.33,
      "livecodebench": 80.4,
      "scicode": 35.8,
      "terminal_bench_hard": 34.8,
      "terminal_bench_2_0": 51.5,
      "terminal_bench_2_1": 44.9,
      "tau2_bench_telecom": 95.3,
      "aime_2026": 92.7,
      "gpqa_diamond": 84.1,
      "hle": 20.2,
      "mmmu_pro": 75
    },
    "scores_updated": {
      "aa_intelligence_index": "2026-06-18",
      "aa_coding_index": "2026-06-25",
      "swe_bench_verified": "2026-04-22",
      "swe_bench_pro": "2026-04-22",
      "swe_rebench": "2026-07-02",
      "livecodebench": "2026-04-22",
      "scicode": "2026-04-22",
      "terminal_bench_hard": "2026-04-22",
      "terminal_bench_2_0": "2026-04-22",
      "terminal_bench_2_1": "2026-06-18",
      "tau2_bench_telecom": "2026-04-22",
      "aime_2026": "2026-04-22",
      "gpqa_diamond": "2026-04-22",
      "hle": "2026-04-22",
      "mmmu_pro": "2026-04-22"
    },
    "changelog": [
      {
        "date": "2026-09-08",
        "note": "An Portal-Liste inkl. Status & Tokenfaktor angeglichen"
      }
    ]
  },
  "qwen3-8-27b": {
    "schema_version": "1.0",
    "id": "qwen3-8-27b",
    "slug": "qwen3-8-27b",
    "display_name": "Qwen3.8-27B-NVFP4",
    "date_added": "2026-08-05",
    "updated_at": "2026-08-26",
    "url": "https://huggingface.co/Qwen/Qwen3.8-27B",
    "params": "27B",
    "params_active": null,
    "context": "256k",
    "license": null,
    "creator": {
      "name": "Alibaba",
      "url": "https://qwen.ai/",
      "logo_url": null
    },
    "short_description": "Starkes Allround- und Coding-Modell mit Vision. Shared als NVFP4.",
    "pitch": "Starkes Coding mit Vision — aktuell in der Testphase.",
    "tags": [
      "coding",
      "chat",
      "vision",
      "agents",
      "tools"
    ],
    "not_ideal_for": [],
    "badges": [
      "shared",
      "testphase",
      "vision",
      "recommended"
    ],
    "capabilities": {
      "vision": true,
      "tools": true,
      "reasoning": true,
      "function_calling": true,
      "multilingual": true
    },
    "vram": {
      "fp16": 56,
      "int8": 28,
      "int4": 15
    },
    "vram_unit": "GB",
    "recommended_quantization": "int4",
    "hosting": {
      "shared": true,
      "shared_model_id": "Qwen3.8-27B-NVFP4",
      "api_model_id": "Qwen3.8-27B-NVFP4",
      "recommended_quant": "int4",
      "fits_tiers": [],
      "comfortable_tiers": [],
      "docs_url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "playground_url": null,
      "status": "testphase",
      "status_label": "Testphase",
      "token_factor": 1.5,
      "token_factor_label": "1,5x"
    },
    "lifecycle": {
      "status": "testphase",
      "label": "Testphase"
    },
    "token_factor": 1.5,
    "token_factor_label": "1,5x",
    "pricing": {
      "input_per_1m": 0.4,
      "output_per_1m": 3,
      "blended_3_to_1": 1.05,
      "currency": "USD",
      "source": "openrouter:qwen/qwen3.8-27b"
    },
    "mittwald_pricing": {
      "shared_input_per_1m": null,
      "shared_output_per_1m": null,
      "currency": "EUR",
      "dedicated_via_tier": true,
      "token_factor": 1.5,
      "token_factor_label": "1,5x"
    },
    "highlights": [
      {
        "key": "aa_coding_index",
        "value": 68.1,
        "updated": "2026-08-25"
      },
      {
        "key": "aa_intelligence_index",
        "value": 52,
        "updated": "2026-08-17"
      },
      {
        "key": "deepswe",
        "value": 42.2,
        "updated": "2026-08-15"
      },
      {
        "key": "mmmu_pro",
        "value": 76.3,
        "updated": "2026-08-17"
      },
      {
        "key": "toolathlon",
        "value": 67.1,
        "updated": "2026-08-26"
      }
    ],
    "ranking": {
      "shared_overall": null,
      "size_class": null,
      "size_class_label": null,
      "rank_in_size_class_coding": null,
      "rank_in_shared_coding": null
    },
    "alternatives": [],
    "urls": {
      "model_card": "https://huggingface.co/Qwen/Qwen3.8-27B",
      "creator": "https://qwen.ai/",
      "bench": "https://ai-hosting-bench.p-asdxps.project.space",
      "docs": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "portal": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
    },
    "cta": {
      "primary": {
        "label": "Modell nutzen",
        "url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
      },
      "secondary": {
        "label": "Im Bench vergleichen",
        "url": "https://ai-hosting-bench.p-asdxps.project.space"
      }
    },
    "performance": {
      "tokens_per_second": null,
      "time_to_first_token_ms": null,
      "measured_on_tier": null,
      "measured_quant": null
    },
    "languages": [
      "de",
      "en",
      "multilingual"
    ],
    "i18n": {
      "de": {
        "display_name": "Qwen3.8-27B-NVFP4",
        "short_description": "Starkes Allround- und Coding-Modell mit Vision. Shared als NVFP4.",
        "pitch": "Starkes Coding mit Vision — aktuell in der Testphase."
      },
      "en": {
        "display_name": "Qwen3.8-27B-NVFP4",
        "short_description": "Starkes Allround- und Coding-Modell mit Vision. Shared als NVFP4.",
        "pitch": "Starkes Coding mit Vision — aktuell in der Testphase."
      }
    },
    "scores": {
      "aa_intelligence_index": 52,
      "aa_coding_index": 68.1,
      "swe_bench_pro": 61.7,
      "deepswe": 42.2,
      "livecodebench": 90.3,
      "scicode": 44.7,
      "terminal_bench_2_1": 79.8,
      "cowork_bench": 70.7,
      "agents_last_exam": 20.4,
      "gpqa_diamond": 90.5,
      "hle": 33.9,
      "mmmu_pro": 76.3,
      "osworld_verified": 84.3,
      "coding_index": 61813,
      "tooling_index": 69741,
      "knowledge_index": 77329,
      "swe_bench_multimodal": 38.6,
      "tau3_bench_banking": 48,
      "ifbench": 79.5,
      "gdpval_aa": 1545,
      "aa_omniscience": -10,
      "aa_omniscience_hallucination": 30.3,
      "aa_lcr": 77.3,
      "critpt": 5.4,
      "swe_bench_multilingual": 73.8,
      "toolathlon": 67.1,
      "job_bench": 33.4,
      "nl2repo_bench": 42.3
    },
    "scores_updated": {
      "aa_intelligence_index": "2026-08-17",
      "aa_coding_index": "2026-08-25",
      "swe_bench_pro": "2026-08-15",
      "deepswe": "2026-08-15",
      "livecodebench": "2026-08-15",
      "scicode": "2026-08-17",
      "terminal_bench_2_1": "2026-08-17",
      "cowork_bench": "2026-08-17",
      "agents_last_exam": "2026-08-17",
      "gpqa_diamond": "2026-08-17",
      "hle": "2026-08-17",
      "mmmu_pro": "2026-08-17",
      "osworld_verified": "2026-08-15",
      "coding_index": "2026-08-24",
      "tooling_index": "2026-08-24",
      "knowledge_index": "2026-08-23",
      "swe_bench_multimodal": "2026-08-22",
      "tau3_bench_banking": "2026-08-17",
      "ifbench": "2026-08-21",
      "gdpval_aa": "2026-08-17",
      "aa_omniscience": "2026-08-17",
      "aa_omniscience_hallucination": "2026-08-17",
      "aa_lcr": "2026-08-17",
      "critpt": "2026-08-17",
      "swe_bench_multilingual": "2026-08-26",
      "toolathlon": "2026-08-26",
      "job_bench": "2026-08-26",
      "nl2repo_bench": "2026-08-26"
    },
    "changelog": [
      {
        "date": "2026-09-08",
        "note": "An Portal-Liste inkl. Status & Tokenfaktor angeglichen"
      }
    ]
  },
  "qwen3-5-0-8b": {
    "schema_version": "1.0",
    "id": "qwen3-5-0-8b",
    "slug": "qwen3-5-0-8b",
    "display_name": "Qwen3.5-0.8B",
    "date_added": "2026-02-25",
    "updated_at": "2026-07-20",
    "url": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
    "params": "0.8B",
    "params_active": null,
    "context": "256k",
    "license": null,
    "creator": {
      "name": "Alibaba",
      "url": "https://qwen.ai/",
      "logo_url": null
    },
    "short_description": "Winziges Qwen3.5-Modell für Edge-/Low-Cost-Szenarien.",
    "pitch": "Sehr kleines, schnelles Modell — ideal für leichte Tasks und enge VRAM-Budgets.",
    "tags": [
      "chat"
    ],
    "not_ideal_for": [],
    "badges": [
      "shared",
      "stable",
      "vision"
    ],
    "capabilities": {
      "vision": true,
      "tools": true,
      "reasoning": true,
      "function_calling": true,
      "multilingual": true
    },
    "vram": {
      "fp16": 1.9,
      "int8": 1,
      "int4": 0.5
    },
    "vram_unit": "GB",
    "recommended_quantization": "int4",
    "hosting": {
      "shared": true,
      "shared_model_id": "Qwen3.5-0.8B",
      "api_model_id": "Qwen3.5-0.8B",
      "recommended_quant": "int4",
      "fits_tiers": [],
      "comfortable_tiers": [],
      "docs_url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "playground_url": null,
      "status": "stable",
      "status_label": "Stable",
      "token_factor": 0.5,
      "token_factor_label": "0,5x"
    },
    "lifecycle": {
      "status": "stable",
      "label": "Stable"
    },
    "token_factor": 0.5,
    "token_factor_label": "0,5x",
    "pricing": null,
    "mittwald_pricing": {
      "shared_input_per_1m": null,
      "shared_output_per_1m": null,
      "currency": "EUR",
      "dedicated_via_tier": true,
      "token_factor": 0.5,
      "token_factor_label": "0,5x"
    },
    "highlights": [
      {
        "key": "aa_coding_index",
        "value": 15,
        "updated": "2026-06-25"
      },
      {
        "key": "aa_intelligence_index",
        "value": 5.5,
        "updated": "2026-07-07"
      },
      {
        "key": "mmmu_pro",
        "value": 25.8,
        "updated": "2026-03-06"
      },
      {
        "key": "terminal_bench_2_1",
        "value": 22.5,
        "updated": "2026-06-18"
      },
      {
        "key": "tau2_bench_telecom",
        "value": 47.7,
        "updated": "2026-03-11"
      }
    ],
    "ranking": {
      "shared_overall": null,
      "size_class": null,
      "size_class_label": null,
      "rank_in_size_class_coding": null,
      "rank_in_shared_coding": null
    },
    "alternatives": [],
    "urls": {
      "model_card": "https://huggingface.co/Qwen/Qwen3.5-0.8B",
      "creator": "https://qwen.ai/",
      "bench": "https://ai-hosting-bench.p-asdxps.project.space",
      "docs": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "portal": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
    },
    "cta": {
      "primary": {
        "label": "Modell nutzen",
        "url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
      },
      "secondary": {
        "label": "Im Bench vergleichen",
        "url": "https://ai-hosting-bench.p-asdxps.project.space"
      }
    },
    "performance": {
      "tokens_per_second": null,
      "time_to_first_token_ms": null,
      "measured_on_tier": null,
      "measured_quant": null
    },
    "languages": [
      "de",
      "en",
      "multilingual"
    ],
    "i18n": {
      "de": {
        "display_name": "Qwen3.5-0.8B",
        "short_description": "Winziges Qwen3.5-Modell für Edge-/Low-Cost-Szenarien.",
        "pitch": "Sehr kleines, schnelles Modell — ideal für leichte Tasks und enge VRAM-Budgets."
      },
      "en": {
        "display_name": "Qwen3.5-0.8B",
        "short_description": "Winziges Qwen3.5-Modell für Edge-/Low-Cost-Szenarien.",
        "pitch": "Sehr kleines, schnelles Modell — ideal für leichte Tasks und enge VRAM-Budgets."
      }
    },
    "scores": {
      "aa_intelligence_index": 5.5,
      "aa_coding_index": 15,
      "terminal_bench_2_1": 22.5,
      "tau2_bench_telecom": 47.7,
      "gpqa_diamond": 11.4,
      "hle": 1.2,
      "mmmu_pro": 25.8
    },
    "scores_updated": {
      "aa_intelligence_index": "2026-07-07",
      "aa_coding_index": "2026-06-25",
      "terminal_bench_2_1": "2026-06-18",
      "tau2_bench_telecom": "2026-03-11",
      "gpqa_diamond": "2026-07-20",
      "hle": "2026-03-06",
      "mmmu_pro": "2026-03-06"
    },
    "changelog": [
      {
        "date": "2026-09-08",
        "note": "An Portal-Liste inkl. Status & Tokenfaktor angeglichen"
      }
    ]
  },
  "qwen3-vl-reranker-2b": {
    "schema_version": "1.0",
    "id": "qwen3-vl-reranker-2b",
    "slug": "qwen3-vl-reranker-2b",
    "display_name": "Qwen3-VL-Reranker-2B",
    "date_added": null,
    "updated_at": "2026-09-08",
    "url": null,
    "params": null,
    "params_active": null,
    "context": null,
    "license": null,
    "creator": {
      "name": null,
      "url": null,
      "logo_url": null
    },
    "short_description": "Qwen3-VL-Reranker-2B — Ranking von Treffern inkl. Vision-Kontext.",
    "pitch": "Multimodaler Reranker für Suche und Retrieval.",
    "tags": [
      "reranker",
      "vision"
    ],
    "not_ideal_for": [
      "Generativer Chat (Reranker)"
    ],
    "badges": [
      "shared",
      "stable",
      "reranker"
    ],
    "capabilities": {
      "vision": true,
      "tools": false,
      "reasoning": false,
      "function_calling": false,
      "multilingual": true
    },
    "vram": {
      "fp16": null,
      "int8": null,
      "int4": null
    },
    "vram_unit": "GB",
    "recommended_quantization": null,
    "hosting": {
      "shared": true,
      "shared_model_id": "Qwen3-VL-Reranker-2B",
      "api_model_id": "Qwen3-VL-Reranker-2B",
      "recommended_quant": null,
      "fits_tiers": [],
      "comfortable_tiers": [],
      "docs_url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "playground_url": null,
      "status": "stable",
      "status_label": "Stable",
      "token_factor": 0.5,
      "token_factor_label": "0,5x"
    },
    "lifecycle": {
      "status": "stable",
      "label": "Stable"
    },
    "token_factor": 0.5,
    "token_factor_label": "0,5x",
    "pricing": null,
    "mittwald_pricing": {
      "shared_input_per_1m": null,
      "shared_output_per_1m": null,
      "currency": "EUR",
      "dedicated_via_tier": false,
      "token_factor": 0.5,
      "token_factor_label": "0,5x"
    },
    "highlights": [],
    "ranking": {
      "shared_overall": null,
      "size_class": null,
      "size_class_label": null,
      "rank_in_size_class_coding": null,
      "rank_in_shared_coding": null
    },
    "alternatives": [],
    "urls": {
      "model_card": null,
      "creator": null,
      "bench": "https://ai-hosting-bench.p-asdxps.project.space",
      "docs": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "portal": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
    },
    "cta": {
      "primary": {
        "label": "Modell nutzen",
        "url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
      },
      "secondary": {
        "label": "Im Bench vergleichen",
        "url": "https://ai-hosting-bench.p-asdxps.project.space"
      }
    },
    "performance": {
      "tokens_per_second": null,
      "time_to_first_token_ms": null,
      "measured_on_tier": null,
      "measured_quant": null
    },
    "languages": [
      "de",
      "en",
      "multilingual"
    ],
    "i18n": {
      "de": {
        "display_name": "Qwen3-VL-Reranker-2B",
        "short_description": "Qwen3-VL-Reranker-2B — Ranking von Treffern inkl. Vision-Kontext.",
        "pitch": "Multimodaler Reranker für Suche und Retrieval."
      },
      "en": {
        "display_name": "Qwen3-VL-Reranker-2B",
        "short_description": "Qwen3-VL-Reranker-2B — Ranking von Treffern inkl. Vision-Kontext.",
        "pitch": "Multimodaler Reranker für Suche und Retrieval."
      }
    },
    "scores": {},
    "scores_updated": {},
    "changelog": [
      {
        "date": "2026-09-08",
        "note": "An Portal-Liste inkl. Status & Tokenfaktor angeglichen"
      }
    ],
    "category": "reranker"
  },
  "glm-ocr": {
    "schema_version": "1.0",
    "id": "glm-ocr",
    "slug": "glm-ocr",
    "display_name": "GLM-OCR",
    "date_added": null,
    "updated_at": "2026-09-08",
    "url": null,
    "params": null,
    "params_active": null,
    "context": null,
    "license": null,
    "creator": {
      "name": null,
      "url": null,
      "logo_url": null
    },
    "short_description": "OCR-/Dokumentenmodell für Text-Extraktion aus Bildern und Scans.",
    "pitch": "Spezialmodell für OCR und Dokumentenverständnis.",
    "tags": [
      "ocr",
      "vision"
    ],
    "not_ideal_for": [],
    "badges": [
      "shared",
      "stable"
    ],
    "capabilities": {
      "vision": false,
      "tools": false,
      "reasoning": false,
      "function_calling": false,
      "multilingual": true
    },
    "vram": {
      "fp16": null,
      "int8": null,
      "int4": null
    },
    "vram_unit": "GB",
    "recommended_quantization": null,
    "hosting": {
      "shared": true,
      "shared_model_id": "GLM-OCR",
      "api_model_id": "GLM-OCR",
      "recommended_quant": null,
      "fits_tiers": [],
      "comfortable_tiers": [],
      "docs_url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "playground_url": null,
      "status": "stable",
      "status_label": "Stable",
      "token_factor": 0.5,
      "token_factor_label": "0,5x"
    },
    "lifecycle": {
      "status": "stable",
      "label": "Stable"
    },
    "token_factor": 0.5,
    "token_factor_label": "0,5x",
    "pricing": null,
    "mittwald_pricing": {
      "shared_input_per_1m": null,
      "shared_output_per_1m": null,
      "currency": "EUR",
      "dedicated_via_tier": false,
      "token_factor": 0.5,
      "token_factor_label": "0,5x"
    },
    "highlights": [],
    "ranking": {
      "shared_overall": null,
      "size_class": null,
      "size_class_label": null,
      "rank_in_size_class_coding": null,
      "rank_in_shared_coding": null
    },
    "alternatives": [],
    "urls": {
      "model_card": null,
      "creator": null,
      "bench": "https://ai-hosting-bench.p-asdxps.project.space",
      "docs": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "portal": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
    },
    "cta": {
      "primary": {
        "label": "Modell nutzen",
        "url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
      },
      "secondary": {
        "label": "Im Bench vergleichen",
        "url": "https://ai-hosting-bench.p-asdxps.project.space"
      }
    },
    "performance": {
      "tokens_per_second": null,
      "time_to_first_token_ms": null,
      "measured_on_tier": null,
      "measured_quant": null
    },
    "languages": [
      "de",
      "en",
      "multilingual"
    ],
    "i18n": {
      "de": {
        "display_name": "GLM-OCR",
        "short_description": "OCR-/Dokumentenmodell für Text-Extraktion aus Bildern und Scans.",
        "pitch": "Spezialmodell für OCR und Dokumentenverständnis."
      },
      "en": {
        "display_name": "GLM-OCR",
        "short_description": "OCR-/Dokumentenmodell für Text-Extraktion aus Bildern und Scans.",
        "pitch": "Spezialmodell für OCR und Dokumentenverständnis."
      }
    },
    "scores": {},
    "scores_updated": {},
    "changelog": [
      {
        "date": "2026-09-08",
        "note": "An Portal-Liste inkl. Status & Tokenfaktor angeglichen"
      }
    ]
  },
  "qwen3-embedding-8b": {
    "schema_version": "1.0",
    "id": "qwen3-embedding-8b",
    "slug": "qwen3-embedding-8b",
    "display_name": "Qwen3-Embedding-8B",
    "date_added": null,
    "updated_at": "2025-06-05",
    "url": "https://huggingface.co/Qwen/Qwen3-Embedding-8B",
    "params": "8B",
    "params_active": null,
    "context": null,
    "license": null,
    "creator": {
      "name": null,
      "url": null,
      "logo_url": null
    },
    "short_description": "Text-Embeddings für Retrieval und semantische Suche.",
    "pitch": "Embedding-Modell für Suche, RAG und Ähnlichkeit.",
    "tags": [
      "embedding"
    ],
    "not_ideal_for": [
      "Allgemeiner Chat/Coding (Spezialmodell)"
    ],
    "badges": [
      "shared",
      "lts",
      "embedding"
    ],
    "capabilities": {
      "vision": false,
      "tools": false,
      "reasoning": false,
      "function_calling": false,
      "multilingual": true
    },
    "vram": {
      "fp16": 16,
      "int8": 8,
      "int4": 4
    },
    "vram_unit": "GB",
    "recommended_quantization": null,
    "hosting": {
      "shared": true,
      "shared_model_id": "Qwen3-Embedding-8B",
      "api_model_id": "Qwen3-Embedding-8B",
      "recommended_quant": null,
      "fits_tiers": [],
      "comfortable_tiers": [],
      "docs_url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "playground_url": null,
      "status": "lts",
      "status_label": "LTS",
      "token_factor": 0.5,
      "token_factor_label": "0,5x"
    },
    "lifecycle": {
      "status": "lts",
      "label": "LTS"
    },
    "token_factor": 0.5,
    "token_factor_label": "0,5x",
    "pricing": null,
    "mittwald_pricing": {
      "shared_input_per_1m": null,
      "shared_output_per_1m": null,
      "currency": "EUR",
      "dedicated_via_tier": false,
      "token_factor": 0.5,
      "token_factor_label": "0,5x"
    },
    "highlights": [
      {
        "key": "mteb_multilingual",
        "value": 70.58,
        "updated": "2025-06-05"
      }
    ],
    "ranking": {
      "shared_overall": null,
      "size_class": null,
      "size_class_label": null,
      "rank_in_size_class_coding": null,
      "rank_in_shared_coding": null
    },
    "alternatives": [],
    "urls": {
      "model_card": "https://huggingface.co/Qwen/Qwen3-Embedding-8B",
      "creator": null,
      "bench": "https://ai-hosting-bench.p-asdxps.project.space",
      "docs": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/",
      "portal": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
    },
    "cta": {
      "primary": {
        "label": "Modell nutzen",
        "url": "https://developer.mittwald.de/de/docs/v2/platform/aihosting/models/"
      },
      "secondary": {
        "label": "Im Bench vergleichen",
        "url": "https://ai-hosting-bench.p-asdxps.project.space"
      }
    },
    "performance": {
      "tokens_per_second": null,
      "time_to_first_token_ms": null,
      "measured_on_tier": null,
      "measured_quant": null
    },
    "languages": [
      "de",
      "en",
      "multilingual"
    ],
    "i18n": {
      "de": {
        "display_name": "Qwen3-Embedding-8B",
        "short_description": "Text-Embeddings für Retrieval und semantische Suche.",
        "pitch": "Embedding-Modell für Suche, RAG und Ähnlichkeit."
      },
      "en": {
        "display_name": "Qwen3-Embedding-8B",
        "short_description": "Text-Embeddings für Retrieval und semantische Suche.",
        "pitch": "Embedding-Modell für Suche, RAG und Ähnlichkeit."
      }
    },
    "scores": {
      "mteb_multilingual": 70.58
    },
    "scores_updated": {
      "mteb_multilingual": "2025-06-05"
    },
    "changelog": [
      {
        "date": "2026-09-08",
        "note": "An Portal-Liste inkl. Status & Tokenfaktor angeglichen"
      }
    ],
    "category": "embedding"
  }
};
const DEFAULT_MODEL_INDEX = [
  {
    "id": "gpt-oss-120b",
    "display_name": "gpt-oss-120b",
    "api_model_id": "gpt-oss-120b",
    "status": "lts",
    "status_label": "LTS",
    "token_factor": 1.0,
    "token_factor_label": "1x",
    "tags": [
      "chat",
      "reasoning"
    ],
    "badges": [
      "shared",
      "lts"
    ],
    "shared": true
  },
  {
    "id": "ministral-3-14b",
    "display_name": "Ministral-3-14B-Instruct-2512",
    "api_model_id": "Ministral-3-14B-Instruct-2512",
    "status": "lts",
    "status_label": "LTS",
    "token_factor": 1.0,
    "token_factor_label": "1x",
    "tags": [
      "chat",
      "coding"
    ],
    "badges": [
      "shared",
      "lts"
    ],
    "shared": true
  },
  {
    "id": "whisper-large-v3-turbo",
    "display_name": "whisper-large-v3-turbo",
    "api_model_id": "whisper-large-v3-turbo",
    "status": "lts",
    "status_label": "LTS",
    "token_factor": 0.5,
    "token_factor_label": "0,5x",
    "tags": [
      "speech",
      "asr"
    ],
    "badges": [
      "shared",
      "lts",
      "speech"
    ],
    "shared": true
  },
  {
    "id": "qwen3-tts-12hz-1-7b-customvoice",
    "display_name": "Qwen3-TTS-12Hz-1.7B-CustomVoice",
    "api_model_id": "Qwen3-TTS-12Hz-1.7B-CustomVoice",
    "status": "testphase",
    "status_label": "Testphase",
    "token_factor": 1.0,
    "token_factor_label": "1x",
    "tags": [
      "tts",
      "speech"
    ],
    "badges": [
      "shared",
      "testphase",
      "tts"
    ],
    "shared": true
  },
  {
    "id": "qwen3-5-122b-a10b",
    "display_name": "Qwen3.5-122B-A10B-FP8",
    "api_model_id": "Qwen3.5-122B-A10B-FP8",
    "status": "stable",
    "status_label": "Stable",
    "token_factor": 3.0,
    "token_factor_label": "3x",
    "tags": [
      "coding",
      "chat",
      "agents"
    ],
    "badges": [
      "shared",
      "stable",
      "vision"
    ],
    "shared": true
  },
  {
    "id": "qwen3-6-35b-a3b",
    "display_name": "Qwen3.6-35B-A3B-FP8",
    "api_model_id": "Qwen3.6-35B-A3B-FP8",
    "status": "stable",
    "status_label": "Stable",
    "token_factor": 1.0,
    "token_factor_label": "1x",
    "tags": [
      "coding",
      "chat",
      "vision",
      "agents",
      "tools"
    ],
    "badges": [
      "shared",
      "stable",
      "vision",
      "recommended"
    ],
    "shared": true
  },
  {
    "id": "qwen3-8-27b",
    "display_name": "Qwen3.8-27B-NVFP4",
    "api_model_id": "Qwen3.8-27B-NVFP4",
    "status": "testphase",
    "status_label": "Testphase",
    "token_factor": 1.5,
    "token_factor_label": "1,5x",
    "tags": [
      "coding",
      "chat",
      "vision",
      "agents",
      "tools"
    ],
    "badges": [
      "shared",
      "testphase",
      "vision",
      "recommended"
    ],
    "shared": true
  },
  {
    "id": "qwen3-5-0-8b",
    "display_name": "Qwen3.5-0.8B",
    "api_model_id": "Qwen3.5-0.8B",
    "status": "stable",
    "status_label": "Stable",
    "token_factor": 0.5,
    "token_factor_label": "0,5x",
    "tags": [
      "chat"
    ],
    "badges": [
      "shared",
      "stable",
      "vision"
    ],
    "shared": true
  },
  {
    "id": "qwen3-vl-reranker-2b",
    "display_name": "Qwen3-VL-Reranker-2B",
    "api_model_id": "Qwen3-VL-Reranker-2B",
    "status": "stable",
    "status_label": "Stable",
    "token_factor": 0.5,
    "token_factor_label": "0,5x",
    "tags": [
      "reranker",
      "vision"
    ],
    "badges": [
      "shared",
      "stable",
      "reranker"
    ],
    "shared": true
  },
  {
    "id": "glm-ocr",
    "display_name": "GLM-OCR",
    "api_model_id": "GLM-OCR",
    "status": "stable",
    "status_label": "Stable",
    "token_factor": 0.5,
    "token_factor_label": "0,5x",
    "tags": [
      "ocr",
      "vision"
    ],
    "badges": [
      "shared",
      "stable"
    ],
    "shared": true
  },
  {
    "id": "qwen3-embedding-8b",
    "display_name": "Qwen3-Embedding-8B",
    "api_model_id": "Qwen3-Embedding-8B",
    "status": "lts",
    "status_label": "LTS",
    "token_factor": 0.5,
    "token_factor_label": "0,5x",
    "tags": [
      "embedding"
    ],
    "badges": [
      "shared",
      "lts",
      "embedding"
    ],
    "shared": true
  }
];
const DEFAULT_MODEL = DEFAULT_MODELS["qwen3-8-27b"] || Object.values(DEFAULT_MODELS)[0];
