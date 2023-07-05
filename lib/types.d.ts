declare namespace Lib {
  interface RawBiographicalEntry {
    id: string;
    data: string;
  }

  interface ParsedBiographicalEntryFields extends RawBiographicalEntry {
    identity: Identity;
    // TODO: create ranking, era, type
    ranking?: string;
    era?: Era;
    narrators?: Array<string>;
  }

  interface Identity {
    name: string;
    lineage?: Array<string>;
    teknonym?: string;
    affiliation?: string;
    nickname?: string;
    // Provides supplementary information about a person's name to ensure accuracy
    // or to account for variations in spelling or pronunciation
    expansions?: Array<string>;
  }

  interface Era {
    strata: string;
    date: string;
  }

  interface SymbolMap {
    [key: string]: string;
  }

  interface CreatedBiographicalEntry {
    entry: ParsedBiographicalEntryFields;
  }
}
