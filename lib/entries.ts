import { createBiographicalEntry } from "./index.ts";

export const biographicalEntries: Array<Lib.CreatedBiographicalEntry> = [
  /**
     *   {
        "id": "1",
        "data": " أحمد ابن إبراهيم ابن خالد الموصلي أبو علي نزيل بغداد صدوق من العاشرة مات سنة ست وثلاثين د فق"
        },
     */
  createBiographicalEntry({
    entry: {
      id: "1",
      data: "أحمد ابن إبراهيم ابن خالد الموصلي أبو علي نزيل بغداد صدوق من العاشرة مات سنة ست وثلاثين د فق",
      identity: {
        name: "أحمد ابن إبراهيم ابن خالد",
        affiliation: "الموصلي",
        teknonym: "أبو علي",
        expansions: ["نزيل بغداد"],
      },
      ranking: "صدوق",
      era: {
        strata: "من العاشرة",
        date: " مات سنة ست وثلاثين ",
      },
      narrators: ["فق", "د"],
    },
  }),
  /* {
    id: "2",
    data: "أحمد ابن إبراهيم ابن فيل باسم الحيوان المعروف أبو الحسن البالسي نزيل أنطاكية صدوق من الثانية عشرة مات سنة أربع وثمانين كن",
  },*/
  createBiographicalEntry({
    entry: {
      id: "2",
      data: "أحمد ابن إبراهيم ابن فيل باسم الحيوان المعروف أبو الحسن البالسي نزيل أنطاكية صدوق من الثانية عشرة مات سنة أربع وثمانين كن",
      identity: {
        name: "أحمد ابن إبراهيم ابن فيل",
        affiliation: "البالسي",
        teknonym: "أبو الحسن",
        expansions: ["باسم الحيوان", "نزيل أنطاكية"],
        nickname: "المعروف أبو الحسن البالسي",
      },
      ranking: "صدوق",
      era: {
        strata: "من الثانية عشرة",
        date: "مات سنة أربع وثمانين",
      },
      narrators: ["كن"],
    },
  }),
];