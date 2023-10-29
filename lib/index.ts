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

export function parseBiographicalEntry(
  biographicalEntry: Lib.RawBiographicalEntry
): Lib.ParsedBiographicalEntryFields {
  const { id, data } = biographicalEntry;
  // TODO: extract entries from raw data by spliting string by "/" to get
  // name field, ranking, era, and narrators data
  const $data = data.split("/");

  const entry: Lib.ParsedBiographicalEntryFields = {
    id: id,
    // expose raw entry
    data: $data.join("/").replaceAll("/", ""),
    identity: { name: "" },
  };
  return entry;
}

export function createBiographicalEntry({
  entry,
}: {
  entry: Lib.ParsedBiographicalEntryFields;
}): Lib.CreatedBiographicalEntry {
  return { entry };
}
