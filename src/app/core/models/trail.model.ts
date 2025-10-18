import { Place } from "./place.model";

export interface Trail{
    id:number;
    name:string;
    distanceKm:number;
    estimatedTimeMinutes:number;
    difficulty:string;
    path: string;
    isLoop:boolean;
    place:Place;
}