export const symbolMap: Lib.SymbolMap = {
  م: "مسلم",
  خ: "البخاري في صحيحه",
  خت: "البخاري معلقا",
  بخ: "البخاري في الأدب المفرد",
  عخ: "البخاري في خلق أفعال العباد",
  ر: "البخاري في جزءالقراءة",
  ي: "البخاري في رفع اليدين",
};

export const nameFromSymbol = (symbol: string): string => {
  return symbolMap[symbol];
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
