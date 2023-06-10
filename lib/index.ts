export const map: Lib.SymbolMap = { م: "مسلم" };

export const nameFromSymbol = (symbol: string): string => {
  return map[symbol];
};

export function parseBiographicalEntry(
  _biographicalEntry: Lib.RawBiographicalEntry
): Lib.ParsedBiographicalEntry {
  return { id: "", data: "", name: "" };
}
