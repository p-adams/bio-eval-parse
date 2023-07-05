import { assertEquals } from "https://deno.land/std@0.191.0/testing/asserts.ts";
import { createBiographicalEntry, nameFromSymbol } from "./index.ts";

Deno.test("parseBiographicalEntry", () => {
  assertEquals(4, 2 + 2);
});

Deno.test("nameFromSymbol", () => {
  assertEquals("مسلم", nameFromSymbol("م"));
});

Deno.test("createBiographicalEntry", () => {
  /**
 * {
    "id": "1",
    "data": "أحمد ابن إبراهيم ابن خالد الموصلي أبو علي نزيل بغداد صدوق من العاشرة مات سنة ست وثلاثين د فق"
  }
 */
  const entry1 = createBiographicalEntry({
    entry: {
      id: "1",
      data: "أحمد ابن إبراهيم ابن خالد الموصلي أبو علي نزيل بغداد صدوق من العاشرة مات سنة ست وثلاثين د فق",
      identity: {
        name: "أحمد ابن إبراهيم ابن خالد",
        affiliation: "الموصلي",
        teknonym: "أبو علي",
        expansions: ["نزيل بغداد"],
      },
      era: {
        strata: "من العاشرة",
        date: " مات سنة ست وثلاثين ",
      },
      narrators: ["فق", "د"],
    },
  });
  assertEquals("من العاشرة", entry1.entry.era?.strata);
});
