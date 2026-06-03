# perform6-touchscreen

Perform6 app for **BrightSign players** — React, TypeScript, Tailwind, offline-first.

- **Startup:** [`brightsign/autorun.brs`](./brightsign/autorun.brs) (one file for all tenants)
- **Deploy:** `dist/` + `autorun.brs` to device, or OTA via R2 (no BSN)
- **Dev:** browser at http://localhost:5173 (no player required)

## Quick start

```bash
cp .env.example .env
npm install
npm run dev
```

## Build for player

```bash
npm run build
```

See [docs/deploy-to-player.md](./docs/deploy-to-player.md).

## Related repos

- [perform6-api](../perform6-api)
- [perform6-admin](../perform6-admin)
