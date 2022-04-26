export interface Passenger {
    id: number,
    name: string,
    checked: boolean,
    date?: number,
    children?: Array<Child>
  
  }

export interface Child {
    name: string,
    age: number
  }
