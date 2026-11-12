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

## Suggested Copilot prompts

### New developer (onboarding)

- Give me a guided tour of this repo: the main entry points, how a request flows through the code, and where tests live. Finish with a diagram in Mermaid.
- Set up my local dev environment from the README, run the app and the test suite, and tell me anything that fails or is undocumented.
- Find a good first issue in this repo, explain the relevant code, and propose a plan. Don't change anything yet.
- Explain the three most complex functions in this codebase in plain English, with a one-line summary for each.

### Existing developer (build and fix)

- Add a `/health` endpoint, write tests for it, run them, and summarize what you changed.
- Reproduce the failing test in `<file>`, find the root cause, fix it, and show me the diff.
- Refactor `<module>` to remove duplicated logic. Keep behavior identical and prove it by running the existing tests before and after.
- Upgrade `<dependency>` to the latest major version, fix breaking changes, and run the full test suite.

### Quality and security

- Review the changes on this branch like a senior engineer. Flag bugs, missing tests, and risky patterns, ranked by severity.
- Scan this repo for hardcoded secrets, outdated dependencies, and unsafe input handling. Fix the low-risk ones and list the rest.
- Raise test coverage on `<module>` to 80%. Prioritize edge cases and error paths.

### Docs and housekeeping

- Update the README and inline docs to match the current code. List anything you couldn't verify.
- Draft a PR description for the current branch: what changed, why, how it was tested, and any risks.
- Generate an ADR documenting the design choice in `<file>`, including alternatives that were plausible.
