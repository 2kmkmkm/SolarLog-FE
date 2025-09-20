export type todayGenerationType = {
  cumulativePower: number;
  power: number;
  totalDailyPower: number;
};

export type graphType = {
  measuredDate?: string;
  period?: string;
  power: number;
};

export type analysisType = {
  peakPowerTime: number;
  peakPowerDay: number;
  peakPower: number;
  totalDailyPower: number;
  totalMonthlyPower: number;
  co2Reduction: number;
  dayCompared: number;
};

export type graphDataType = {
  list: graphType[];
  dataKey: string;
  label: string;
};
