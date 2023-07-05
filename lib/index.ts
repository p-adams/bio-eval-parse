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
