import {
  createBiographicalEntry,
  parseBiographicalEntry,
} from "../lib/index.ts";

async function buildEntriesFromData() {
  const decoder = new TextDecoder("utf-8");
  const encoder = new TextEncoder();
  const file = await Deno.readFile("../data/test_raw.json");
  //  const data = encoder.encode(decoder.decode(file));
  const parsedData = JSON.parse(
    decoder.decode(file)
  ) as Lib.RawBiographicalEntry[];
  // iterate data and build entries, write entries to file
  // TODO: during iteration, group entries by first letter
  const parsedBiographies = parsedData.map((d) => parseBiographicalEntry(d));

  Deno.writeFile(
    "../data/test_entries.json",
    encoder.encode(JSON.stringify(parsedBiographies))
  );
}

buildEntriesFromData();
