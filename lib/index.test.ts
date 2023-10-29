import { assertEquals } from "https://deno.land/std@0.191.0/testing/asserts.ts";
import { nameFromSymbol, parseBiographicalEntry } from "./index.ts";
import { biographicalEntries } from "./entries/index.ts";

Deno.test("parseBiographicalEntry", () => {
  const rawEntry = parseBiographicalEntry({
    id: "10",
    data: " أحمد ابن إشكاب الحضرمي أبو عبد الله الصفار واسم إشكاب مجمع وهو بكسر الهمزة بعدها معجمة/ ثقة حافظ/ من الحادية عشرة| مات سنة سبع عشرة أو بعدها/ خ",
  });
  assertEquals(rawEntry.id, "10");
  assertEquals(
    rawEntry.data,
    " أحمد ابن إشكاب الحضرمي أبو عبد الله الصفار واسم إشكاب مجمع وهو بكسر الهمزة بعدها معجمة ثقة حافظ من الحادية عشرة مات سنة سبع عشرة أو بعدها خ"
  );
  assertEquals(rawEntry.narrators?.[0], "خ");
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
