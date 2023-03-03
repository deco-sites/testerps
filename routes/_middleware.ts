import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 556,
  site: "testerps",
  domains: ["testerps.deco.site"],
});