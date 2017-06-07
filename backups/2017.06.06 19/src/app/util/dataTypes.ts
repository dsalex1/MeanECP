
export interface Presentation {
    interval: number;
    timeStart: number;
    timeEnd: number;
    page: PresData;
}
export interface PlanData {
    type: any;
    params: any;
}
export interface PresData {
    type: string;
    params: PresParams;
}
export interface PresParams {
    id: string;
    iterations: number;
    delay: number;
}
export interface PlanParams {
    db: string;
    index1: number;
    index2: number;
    presentation: Presentation;
}
export interface KeyEvtParams {
    db: string;
    index1: number;
    timeout: number;
    filter: String;
}

