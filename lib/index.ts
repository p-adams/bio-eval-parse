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

  const $data = data.split("/");
  // TODO: add error handling for entries with missing fields
  // happy-path all fields <identity,ranking,era,and narrators>
  const [identity, ranking, era, narrators] = $data;
  const $ranking: string | null = ranking ?? null;
  const $era: Lib.Era | null = era
    ? { strata: era.split("|")[0], date: era.split("|")[1] }
    : null;
  const $narrators: string[] | null = narrators
    ? // process narrators
      narrators
        .split(" ")
        .map((el) => el.trim())
        .filter(Boolean)
    : null;

  const entry: Lib.ParsedBiographicalEntryFields = {
    id: id,
    // expose raw entry
    data: $data.join("/").replaceAll("/", ""),
    identity: { name: identity },
    ranking: $ranking,
    era: $era,
    narrators: $narrators,
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
