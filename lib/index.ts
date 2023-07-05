export const map: Lib.SymbolMap = { م: "مسلم" };

export const nameFromSymbol = (symbol: string): string => {
  return map[symbol];
};

function _parseBiographicalEntry(
  _biographicalEntry: Lib.RawBiographicalEntry
): Lib.ParsedBiographicalEntryFields {
  return { id: "", data: "", identity: { name: "" } };
}

export function createBiographicalEntry({
  entry,
}: {
  entry: Lib.ParsedBiographicalEntryFields;
}): Lib.CreatedBiographicalEntry {
  return { entry };
}
/**
 * {
    "id": "1",
    "data": "أحمد ابن إبراهيم ابن خالد الموصلي أبو علي نزيل بغداد صدوق من العاشرة مات سنة ست وثلاثين د فق"
  }
 */
/**
 * const a1 = createBiographicalEntry({
  entry: { id: "1",
  data: "أحمد ابن إبراهيم ابن خالد الموصلي أبو علي نزيل بغداد صدوق من العاشرة مات سنة ست وثلاثين د فق", 
  identity: {
    name: "أحمد ابن إبراهيم ابن خالد",
    affiliation: "الموصلي",
    teknonym: "أبو علي",
    expansions: ["نزيل بغداد"],
  },
  era: {
    strata: "من العاشرة",
    date: " مات سنة ست وثلاثين "
  },
  narrators: ["فق","د"]
},
});
 */
