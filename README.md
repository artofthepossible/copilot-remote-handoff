# copilot-remote-handoff
start a local Copilot SDK session, turn on remote access on demand, show a QR code, and watch the agent keep working from your phone.

## Setup

```sh
npm install
npm run demo -- "your prompt here"
```

Requires Node 20+ and GitHub authentication for Copilot. The demo creates a local session, enables remote access (`session.rpc.remote.enable`), prints the session URL as a QR code, and keeps the agent working while you steer it from your phone.

## Files

- `demo.ts` – the demo script
- `package.json` – deps: `@github/copilot-sdk`, `qrcode`, `tsx`
