import { 
  format, 
  parseISO, 
  addDays, 
  addMonths, 
  addHours, 
  addMinutes, 
  addYears, 
  isValid, 
  formatDistanceToNow, 
  getUnixTime, 
  parse, 
  getQuarter 
} from "date-fns";
import { ptBR } from "date-fns/locale";

export const getDate = (date?: string | null) => {
  if (!date) return null;
  return parseISO(date);
};

export const getTodayBR = (formatStr: string = "dd/MM/yyyy HH:mm") => {
  return format(new Date(), formatStr, { locale: ptBR });
};

export const getTodayEnUs = (formatStr: string = "yyyy-MM-dd HH:mm") => {
  return format(new Date(), formatStr);
};

export const getFormatDate = (date: string, formatStr: string = "PPPPp") => {
  return format(parseISO(date), formatStr, { locale: ptBR });
};

export const getDateFromNow = (date: string) => {
  return formatDistanceToNow(parseISO(date), { locale: ptBR, addSuffix: true });
};

export const getDateToNow = (date: string) => {
  return formatDistanceToNow(parseISO(date), { locale: ptBR, addSuffix: false });
};

export const getDateBR = (date: string) => {
  return format(parseISO(date), "dd/MM/yyyy", { locale: ptBR });
};

export const getDateEnUs = (date: string) => {
  return format(parseISO(date), "yyyy-MM-dd");
};

export const getDayDate = (date: string) => {
  const parsedDate = parseISO(date);

  return {
    dayNum: parsedDate.getDate(),
    day: format(parsedDate, "EEEE", { locale: ptBR }),
    dayWithoutSuffix: format(parsedDate, "EEEE", { locale: ptBR }).replace("-feira", ""),
    dayShort: format(parsedDate, "EEE", { locale: ptBR }),
    month: format(parsedDate, "MMMM", { locale: ptBR }),
    monthShort: format(parsedDate, "MMM", { locale: ptBR }),
    monthNum: parsedDate.getMonth() + 1,
    year: parsedDate.getFullYear(),
    hour: format(parsedDate, "HH:mm")
  };
};

export const getQuarterDate = (date: string) => {
  const parsedDate = parseISO(date);
  return {
    quarter: getQuarter(parsedDate),
    year: parsedDate.getFullYear()
  };
};

export const getDateAddDays = (date: string, days: number = 1, formatStr: string = "dd/MM/yyyy") => {
  return format(addDays(parseISO(date), days), formatStr, { locale: ptBR });
};

export const getDateAddMonths = (date: string, months: number = 1, formatStr: string = "dd/MM/yyyy") => {
  return format(addMonths(parseISO(date), months), formatStr, { locale: ptBR });
};

export const getDateAddHours = (date: string, hours: number = 1, formatStr: string = "dd/MM/yyyy 'às' HH:mm") => {
  return format(addHours(parseISO(date), hours), formatStr, { locale: ptBR });
};

export const getDateAddMinutes = (date: string, minutes: number = 1, formatStr: string = "dd/MM/yyyy 'às' HH:mm") => {
  return format(addMinutes(parseISO(date), minutes), formatStr, { locale: ptBR });
};

export const getDateAddYears = (date: string, years: number = 1, formatStr: string = "dd/MM/yyyy 'às' HH:mm") => {
  return format(addYears(parseISO(date), years), formatStr, { locale: ptBR });
};

export type GetDayToEnForPtBr = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export const getDayToEnForPtBr = (day: GetDayToEnForPtBr): string => {
  const dayMappings: Record<string, string> = {
    sunday: "Domingo",
    monday: "Segunda",
    tuesday: "Terça",
    wednesday: "Quarta",
    thursday: "Quinta",
    friday: "Sexta",
    saturday: "Sábado",
    sun: "Domingo",
    mon: "Segunda",
    tue: "Terça",
    wed: "Quarta",
    thu: "Quinta",
    fri: "Sexta",
    sat: "Sábado"
  };

  return dayMappings[day.toLowerCase()] || "Dia inválido";
};

export const isDate = (date: string | null | undefined): boolean => {
  if (!date) return false;
  return isValid(parse(date, "yyyy-MM-dd", new Date()));
};

export const getUnixTimeStamp = (date: string | null | undefined) => {
  if (!date || !isValid(parseISO(date))) return null;
  return getUnixTime(parseISO(date));
};

export const getIsoDate = (date: string | null | undefined) => {
  if (!date || !isValid(parseISO(date))) return null;
  return parseISO(date).toISOString();
};
