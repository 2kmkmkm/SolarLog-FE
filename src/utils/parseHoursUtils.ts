import type { graphType } from "../types/generationType";

export function parseHours(data: graphType[]) {
  return data.map((item) => ({
    hour: item.measuredDate ? new Date(item.measuredDate).getHours() : null,
    power: item.power,
  }));
}
