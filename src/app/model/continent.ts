import { Country } from "./country"

export interface Continent {
     id : number
    code: string
    countries ?: Country[]
    name ?: string
}
