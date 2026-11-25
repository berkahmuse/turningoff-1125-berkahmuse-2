// Have You Tried Turning It Off? — entry program for @berkahmuse-2
// Writes one funny single-line reply from a hopeless tech support agent
// to a desperate customer, to /output/entry.txt.
//
// The joke: the agent cheerfully prescribes the classic reboot, then
// admits out loud that it will not fix anything — the reboot is not a
// repair, it is a shared moment of acceptance. The humour comes from the
// agent's cheerful uselessness, never from mocking the customer.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Have you tried turning it off and on again? It won't fix it, but it gives us both time to accept what's happening.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
