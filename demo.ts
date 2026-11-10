import { CopilotClient, approveAll } from "@github/copilot-sdk";
import QRCode from "qrcode";

const client = new CopilotClient();
const session = await client.createSession({
  onPermissionRequest: approveAll,
});

session.on((event) => {
  if (event.type === "assistant.message") {
    console.log(`\n[agent] ${event.data.content}`);
  }
});

// Turn on remote access on demand and show a QR code for the session URL.
const remote = await session.rpc.remote.enable({ mode: "on" });
if (remote.warning) console.warn(`Warning: ${remote.warning}`);
if (remote.url) {
  console.log(`\nOpen on your phone: ${remote.url}\n`);
  console.log(await QRCode.toString(remote.url, { type: "terminal", small: true }));
} else {
  console.warn("Remote access did not return a URL.");
}

// Start a long-running task; keep working while you steer from your phone.
await session.sendAndWait(
  process.argv.slice(2).join(" ") ||
    "Explore this directory and summarize what it contains, then wait for further instructions.",
  10 * 60 * 1000,
);

await session.disconnect();
await client.stop();
