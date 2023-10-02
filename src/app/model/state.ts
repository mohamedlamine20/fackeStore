import { Country } from "./country"

export interface State {
    id:number
    code: string
    country?: Country
    name ?: string
}
