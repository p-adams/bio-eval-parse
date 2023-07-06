import { assertEquals } from "https://deno.land/std@0.191.0/testing/asserts.ts";
import { nameFromSymbol } from "./index.ts";
import { biographicalEntries } from "./entries.ts";

Deno.test("parseBiographicalEntry", () => {
  assertEquals(4, 2 + 2);
});

Deno.test("nameFromSymbol", () => {
  assertEquals("مسلم", nameFromSymbol("م"));
});

Deno.test("createBiographicalEntry", () => {
  assertEquals(
    "من العاشرة",
    biographicalEntries.alif.ahmad[0].entry.era?.strata
  );
});
