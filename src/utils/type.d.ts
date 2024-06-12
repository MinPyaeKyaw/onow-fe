import { ReactNode } from "react";

export {};

declare global {
  export interface MenuType {
    id: string;
    name: string;
    icon: ReactNode;
    route: string;
  }

  export type ListType = {
    id: number;
    name: string;
    amt: number;
    time: Date;
    currency: string;
  };

  export type HistoryType = {
    id: number;
    date: Date;
    totalExpense: number;
    income: number;
    currency: string;
  };
}
