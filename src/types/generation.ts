export type todayGenerationType = {
  cumulativePower: number;
  power: number;
  totalDailyPower: number;
};

export type graphType = {
  measureDate?: Date;
  period?: string;
  power: number;
};

export type analysisType = {
  peakPowerTime: string;
  peakPower: number;
  totalDailyPower?: number;
  totalMonthlyPower?: number;
  co2Reduction: number;
  dayCompared: number;
};
