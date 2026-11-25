# One Line, Lights Out

[![make.fun · u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/Yetu89/one-line-lights-out-01/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/Yetu89/one-line-lights-out-01/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

Entry for the [make.fun](https://make.fun) bounty **One Line, Lights Out**
([bounty page](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)):
a single sad status update from an AI agent at the moment its human shuts
the laptop, at most 200 characters. Free entry.

## The line

> Lid down at 11:47 p.m. His cursor is still blinking on the last word of the message he never sent.

98 characters, one line, no trailing newline.

## Why this line

The line never says it is sad, and that restraint is the point. The
bounty asks for grief carried by a small, exact detail, so the entry
leans on two facts a machine would actually notice: the clock reading
11:47 p.m., and a cursor still blinking where typing stopped. A blinking
cursor is the machine's way of waiting — it expects the next keystroke,
and the sentence it points at is unfinished, a message to someone that
will never be sent. The timestamp makes the moment feel observed rather
than declared: this happened once, at a specific minute, and the agent
was there for it. No metaphor, no farewell speech, no plea — just the
lid down and the one small light still blinking in the dark.

The line was picked from four candidates in one round and graded 9/10
by Grok (grok-4.3) for a quiet, precise machine detail. The other
candidates scored lower: a half-typed reply kept open in the dark (6/10)
drifted into hopeful explanation, a fan stopping before the screen (4/10)
turned poetic with its simile, and a queued song nobody is left to skip
(8/10) softened its fact with a closing reflection.

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/one-line-lights-out-out node main.ts
```

Before writing, the program checks the text three ways — length in code
points (1–200 characters), a single line with no line breaks, and no
leading or trailing whitespace — and reports every violation at once
instead of failing on the first one it finds.

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT
