import type { TTag } from "../types";

export function tagColor(demographic: TTag): string {
  switch (demographic) {
    case "shounen":
      return "rgb(255 165 0)";
    case "seinen":
      return "rgb(255 0 0)";
    case "shoujo":
      return "rgb(221 148 161)";
    case "josei":
      return "rgb(128 0 128)";
    case "manga":
      return "#7986cb";
    case "manhwa":
      return "#81c784";
    case "manhua":
      return "#8d6e63";
    case "ongoing":
      return "#28A745";
    case "canceled":
      return "#6C757D";
    case "finished":
      return "#FF0000";
    case "hiatus":
      return "#FFC107";
  }
}
