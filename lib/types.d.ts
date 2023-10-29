declare namespace Lib {
  interface RawBiographicalEntry {
    id: string;
    data: string;
  }

  /**
   * Separators:
   * "/أحمد ابن إبراهيم ابن خالد الموصلي أبو علي نزيل بغداد/ صدوق/ من العاشرة| مات سنة ست وثلاثين/ د فق"
   * const [name, ranking, era, narrators] = data.split("/");
   * const [strata, date] era.split("|")
   */

  interface ParsedBiographicalEntryFields extends RawBiographicalEntry {
    identity: Identity;
    // TODO: create ranking, era, type
    ranking?: string;
    era?: Era;
    narrators?: Array<string>;
  }

  interface Identity {
    // For MVP: record all lineage, teknonym, affiliations, nickname, and expansion in the 'name' property
    name: string;
    lineage?: Array<string>;
    teknonym?: string;
    affiliations?: Array<string>;
    nickname?: string;
    // Provides supplementary information about a person's name to ensure accuracy
    // or to account for variations in spelling or pronunciation
    expansions?: Array<string>;
  }

  interface Era {
    strata: string;
    date: string;
  }

  interface BiographicalChapters {
    alif: {
      ahmad: Array<CreatedBiographicalEntry>;
    };
  }

  interface SymbolMap {
    [key: string]: string;
  }

  interface CreatedBiographicalEntry {
    entry: ParsedBiographicalEntryFields;
  }
}
