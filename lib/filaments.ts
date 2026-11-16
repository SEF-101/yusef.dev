/**
 * THE SPOOL SHELF: every color shown on /prints comes from this list.
 *
 * One line per spool you have on hand:
 *   - Got a new spool?   Copy a line, change the name and hex.
 *   - Running low?        Add  low: true   (shows "Running low").
 *   - Ran out?            Add  out: true   (shows it crossed out) or just delete the line.
 *
 * material must match a key in lib/prints.ts (pla-basic, pla-matte, pla-silk, petg, abs-asa, tpu).
 * hex is only the swatch color on the page, so close enough is fine. Bambu's color names are used so
 * customers can look them up.
 *
 * STARTER LIST: replace these with the spools you actually own.
 */

export type MaterialKey = "pla-basic" | "pla-matte" | "pla-silk" | "petg" | "abs-asa" | "tpu";

export type Filament = {
  material: MaterialKey;
  name: string;
  hex: string;
  low?: boolean;
  out?: boolean;
};

export const filaments: Filament[] = [
  // PLA Basic
  { material: "pla-basic", name: "Jade White", hex: "#F4F4F2" },
  { material: "pla-basic", name: "Black", hex: "#1A1A1A" },
  { material: "pla-basic", name: "Gray", hex: "#8E9089" },
  { material: "pla-basic", name: "Red", hex: "#C12E1F" },
  { material: "pla-basic", name: "Orange", hex: "#FF6A13" },
  { material: "pla-basic", name: "Yellow", hex: "#F4EE2A" },
  { material: "pla-basic", name: "Bambu Green", hex: "#00AE42" },
  { material: "pla-basic", name: "Blue", hex: "#0A2989" },

  // PLA Matte
  { material: "pla-matte", name: "Ivory White", hex: "#F3EFE6" },
  { material: "pla-matte", name: "Charcoal", hex: "#2B2B2D" },
  { material: "pla-matte", name: "Ash Gray", hex: "#9B9EA0" },
  { material: "pla-matte", name: "Sakura Pink", hex: "#E8AFCF" },
  { material: "pla-matte", name: "Marine Blue", hex: "#0078BF" },

  // PLA Silk
  { material: "pla-silk", name: "Gold", hex: "#D9A63A" },
  { material: "pla-silk", name: "Silver", hex: "#BFC3C7" },

  // PETG
  { material: "petg", name: "Black", hex: "#1A1A1A" },
  { material: "petg", name: "White", hex: "#F4F4F2" },

  // ABS / ASA and TPU: no spools listed yet, so the page says "ordered in for your print".
];
