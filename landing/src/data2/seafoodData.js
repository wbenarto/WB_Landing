import buri from "../images/seafood/yellowtail.webp";
import albacore from "../images/seafood/albacore.webp";
import atlanticsalmon from "../images/seafood/albacore.webp";
import bluecrab from "../images/seafood/bluecrab.webp";
import bluefin from "../images/seafood/bluefin-tuna.webp";
import mackerel from "../images/seafood/mackerel.webp";
import octopus from "../images/seafood/octopus.webp";
import uni from "../images/seafood/red-sea-urchin.webp";
import snowcrab from "../images/seafood/snowcrab.webp";
import tigershrimp from "../images/seafood/tiger-shrimp.webp";
import yellowfin from "../images/seafood/yellowfin_tuna.webp";
import bigeye from "../images/seafood/bigeye-tuna.webp";
import skipjack from "../images/seafood/skipjack.webp";

const seafoodData = [
  {
    id: 1,
    species: "Amberjack",
    alias:
      "Amberjack, Buri, Hamachi, Hawaiian Kanpachi, Yellowtail, Hiramasa, Kanpachi",
    region: "Worldwide",
    method: ["Farmed indoor with recirculating tanks.", "good"],
    population: "In Abundance",
    recommendation: "Best Choice",
    img: buri,
    reason: "",
  },
  {
    id: 2,
    species: "Blue Crab",
    alias: "Blue-claw, Hardshell Crab, Kani, Softshell Crab",
    region: "Maryland, US",
    method: ["Trotline", "good"],
    population: "In Abundance",
    recommendation: "Best Choice",
    img: bluecrab,
    reason: "",
  },
  {
    id: 3,
    species: "Snow Crab",
    alias: "Kani, Queen, Snow, Spider crab, Tanner crab.",
    region: "Alaska, US",
    method: ["Pots", "good"],
    population: "In Abundance",
    recommendation: "Best Choice",
    img: snowcrab,
    reason: "",
  },
  {
    id: 4,
    species: "Atlantic Spanish Mackerel",
    alias:
      "Bay Mackerel, Saba, Sierra, Spaniard, Spanish Mackerel, Spotted Cybium, Spotted Mackerel, Sawara",
    region: "US",
    method: ["Cast nets", "good"],
    population: "In Abundance",
    recommendation: "Best Choice",
    img: mackerel,
    reason: "",
  },
  {
    id: 5,
    species: "Giant Pacific Octopus",
    alias: "Tako",
    region: "Alaska, US",
    method: ["Pots", "good"],
    population: "In Abundance",
    recommendation: "Best Choice",
    img: octopus,
    reason: "",
  },
  {
    id: 6,
    species: "Atlantic Salmon",
    alias: "Sake",
    region: "Norway",
    method: ["Marine Net Pen", "bad"],
    population: "In Abundance",
    recommendation: "Avoid",
    img: atlanticsalmon,
    reason:
      "Net Pen farms tends to spread more diseases to the species and surrounding environment.",
  },
  {
    id: 7,
    species: "Atlantic Salmon ASC Certified",
    alias: "Sake",
    region: "Norway",
    method: ["Marine Net Pen", "good"],
    population: "In Abundance",
    recommendation: "Best Choice",
    img: atlanticsalmon,
    reason: "",
  },
  {
    id: 8,
    species: "Purple Sea Urchin",
    alias: "Uni",
    region: "Oregon, US",
    method: ["Diving", "good"],
    population: "In Abundance",
    recommendation: "Best Choice",
    img: uni,
    reason: "",
  },
  {
    id: 9,
    species: "Shrimp",
    alias: "Ebi, Prawn",
    region: "Worldwide",
    method: ["Farmed", "good"],
    population: "In Abundance",
    recommendation: "Best Choice",
    img: tigershrimp,
    reason: "",
  },
  {
    id: 10,
    species: "Albacore",
    alias: "White Tuna",
    region: "Worldwide",
    method: ["Drifting Longlines", "bad"],
    population: "In Abundance",
    recommendation: "Avoid",
    img: albacore,
    reason: "Drifting Longlines causes overfishing and huge amount of bycatch.",
  },
  {
    id: 11,
    species: "Pacific Bluefin Tuna",
    alias: "Maguro, Toro",
    region: "Eastern Central Pacific Ocean",
    method: ["Drift Gillnets", "bad"],
    population: "Endangered",
    recommendation: "Avoid",
    img: bluefin,
    reason:
      "Blue fin livestock has gone down drastically and facing extinction. Overfishing and bycatch also the result of tuna fishing using gillnets.",
  },
  {
    id: 12,
    species: "Albacore",
    alias: "White Tuna",
    region: "Northeast Pacific Ocean",
    method: ["Handlines and hand-operated pole-and-lines", "good"],
    population: "In Abundance",
    recommendation: "Best Choice",
    img: albacore,
    reason: "",
  },
  {
    id: 13,
    species: "Yellowfin Tuna",
    alias: "Ahi, Maguro",
    region: "Western Central Pacific Ocean",
    method: ["Handlines and hand-operated pole-and-lines", "good"],
    population: "Healthy",
    recommendation: "Best Choice",
    img: yellowfin,
    reason: "",
  },
  {
    id: 14,
    species: "Bigeye Tuna",
    alias: "Ahi, Maguro",
    region: "Western Central Pacific Ocean",
    method: ["Handlines and hand-operated pole-and-lines", "good"],
    population: "Healthy",
    recommendation: "Best Choice",
    img: bigeye,
    reason: "",
  },
  {
    id: 15,
    species: "Skipjack Tuna",
    alias: "Katsuo, Ocean Bonito",
    region: "Western Central Pacific Ocean",
    method: ["Handlines and hand-operated pole-and-lines", "good"],
    population: "Healthy",
    recommendation: "Best Choice",
    img: skipjack,
    reason: "",
  },
  {
    id: 16,
    species: "Atlantic Bluefin Tuna",
    alias: "Maguro, Toro",
    region: "Mediterranean Sea",
    method: ["Farmed in Marine Net Pen", "bad"],
    population: "Endangered",
    recommendation: "Avoid",
    img: bluefin,
    reason:
      "All Atlantic bluefin tuna that's farmed in this region is sourced from vulnerable wild stocks. The highly inefficient conversion of feed into harvestable fish is a critical concern: 20 tons of wild fish are used to produce a single ton of farmed Atlantic bluefin tuna.",
  },
  {
    id: 17,
    species: "Bigeye Tuna",
    alias: "Ahi, Maguro",
    region: "Indian Ocean",
    method: ["Floating Object Purse Seine (FAD)", "bad"],
    population: "Healthy",
    recommendation: "Avoid",
    img: bigeye,
    reason:
      "Population of Bigeye in this region isn't depleting, but overfishing is occurring with the use of Floating Object Purse Seines (FAD) harvesting method. ",
  },
  {
    id: 18,
    species: "Yellowfin Tuna",
    alias: "Ahi, Maguro",
    region: "Southwest Atlantic Ocean",
    method: ["Drifting Longlines", "bad"],
    population: "Healthy",
    recommendation: "Avoid",
    img: bigeye,
    reason:
      "Population of Yellowfin in this region isn't depleting, but bycatch of turtles, seabirds and sharks are occurring with the use of drifting longlines harvesting method. ",
  },
  {
    id: 19,
    species: "Bigeye Tuna",
    alias: "Ahi, Maguro",
    region: "Indian Ocean",
    method: ["Floating Object Purse Seine (FAD)", "bad"],
    population: "Healthy",
    recommendation: "Avoid",
    img: bigeye,
    reason:
      "Population of Bigeye in this region isn't depleting, but overfishing is occurring with the use of Floating Object Purse Seines (FAD) harvesting method. ",
  },
];

export default seafoodData;

// All data combined from Seafoodwatch.org, WWF Data online website
