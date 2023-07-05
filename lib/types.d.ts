declare namespace Lib {
  interface RawBiographicalEntry {
    id: string;
    data: string;
  }

  interface ParsedBiographicalEntry extends RawBiographicalEntry {
    identity: Identity;
    // TODO: create ranking, era, type
    ranking?: string;
    era?: string;
    narrators?: SymbolMap;
  }

  interface Identity {
    name: string;
    lineage?: Array<string>;
    teknonym?: string;
    affiliation?: string;
    nickname?: string;
    // Provides supplementary information about a person's name to ensure accuracy
    // or to account for variations in spelling or pronunciation
    name_expansion?: string;
  }

  interface SymbolMap {
    [key: string]: string;
  }
}
