declare namespace Lib {
  interface RawBiographicalEntry {
    id: string;
    data: string;
  }

  interface ParsedBiographicalEntry extends RawBiographicalEntry {
    name: string;
  }
}
