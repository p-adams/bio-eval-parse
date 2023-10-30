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

  const [identity, ranking, era, narrators] = $data;
  const $ranking: string | null = ranking.trim() ?? null;
  const $era: Lib.Era | null = era
    ? { strata: era.split("|")[0].trim(), date: era.split("|")[1].trim() }
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
    data: data.replaceAll("/", "").replaceAll("|", "").trim(),
    identity: { name: identity.trim() },
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
