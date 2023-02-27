export interface IItem {
    itemId: string;
    itemTask: string;
  }
  
  
  export interface IData {
    [id: string]: {
      header: string;
      items: IItem[];
      bgc: string
    };
  }
  