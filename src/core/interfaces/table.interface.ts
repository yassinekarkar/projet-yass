interface ITableAction {
  name: string;
  icon: string;
  fn: (data: any) => void;
}

export interface ITableData {
  [key: string]: string | number | boolean;
}

export interface IHeader {
  name: string;
}

export interface ITable {
  header: IHeader[];
  nameTable: string[];
  data: ITableData[];
  actions: ITableAction[];
}
