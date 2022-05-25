import { Baggage } from "./baggage.interface"

export interface Passenger {
    id: number,
    name: string,
    checked: boolean,
    date?: number,
    children?: Array<Child>
    baggage?: string
  }

export interface Child {
    name: string,
    age: number
  }
