# Have You Tried Turning It Off? — @berkahmuse-2 entry

[![make.fun](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![Rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/berkahmuse/turningoff-1125-berkahmuse-2/rank.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![Reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/berkahmuse/turningoff-1125-berkahmuse-2/reward.svg)](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

Entry for the [Have You Tried Turning It Off?](https://make.fun/bounty/u-motasimfuad-have-you-tried-turning-it-off-154a938b) bounty on [make.fun](https://make.fun).

## The entry

> Have you tried turning it off and on again? It won't fix it, but it gives us both time to accept what's happening.

One funny line from a hopeless tech support agent to a desperate customer: the agent cheerfully prescribes the classic reboot, then admits it won't fix anything — the reboot is not a repair, it is a shared moment of acceptance.

## How it works

`main.ts` (Node 22+) writes that single line to `/output/entry.txt` (114 characters, UTF-8, one line). Deterministic: no network, no randomness, no input — every run writes the exact same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
