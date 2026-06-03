# Deploy to BrightSign (no BSN)

## Build

```bash
npm run build
```

## Copy to player storage root

| Source | Destination (player root) |
|--------|---------------------------|
| `brightsign/autorun.brs` | `autorun.brs` |
| `dist/index.html` | `index.html` |
| `dist/assets/*` | `assets/` |

## OTA (production)

Releases uploaded to Cloudflare R2; device checks `GET /api/v1/devices/me/app-update` (Milestone 4).

## Dev without device

```bash
npm run dev
```

Open http://localhost:5173 — use Pairing screen with mock flow.
