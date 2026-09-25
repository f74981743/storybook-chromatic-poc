# Storybook + Chromatic POC

Small React, TypeScript, and Chakra UI v3 visual-testing example using pnpm.

## Run locally

```sh
pnpm install
pnpm dev
pnpm storybook
```

The `StatusCard` stories cover ready, attention, long-content, and narrow layouts. Run `pnpm build` and `pnpm build-storybook` to verify production builds.

## Chromatic PR check

1. Create a Chromatic project and link it to this GitHub repository.
2. Add its project token as the GitHub Actions repository secret `CHROMATIC_PROJECT_TOKEN`.
3. Run Chromatic on `main` to establish a baseline. Review any new snapshots.
4. Open a pull request into `main`. The workflow runs automatically. Chromatic's **UI Tests** check stays pending for visual changes, passes after all changes are accepted, and fails if changes are denied.
5. In GitHub branch protection for `main`, require Chromatic's **UI Tests** check after it appears. The GitHub Actions job is separate and may pass while UI Tests waits for review.

This repository is public, so GitHub can enforce the required UI Tests check on `main`. The `demo/visual-review-check` branch changes the Attention story's button label to exercise the review workflow in a pull request.

The Storybook allowlist in `.storybook/main.ts` limits the pilot to four stories. With one browser and one mode, a full build uses roughly four billed snapshots. Expand the allowlist deliberately and watch Chromatic Billing before applying this to a larger component library.
