import { Continent } from "./continent"
import { Language } from "./language"
import { State } from "./state"
import { Subdivision } from "./subdivision"

export interface Country {
    id:number;
    awsRegion?: string
    capital?: string
    code: String
    continent: Continent
    currencies?: string[]
    currency ?: string
    emoji?: string
    emojiU?: string
    languages?: Language[]
    name?: string
    native?: string
    phone ?: string
    phones?:string []
    states: State[]
    subdivisions: Subdivision []



}
