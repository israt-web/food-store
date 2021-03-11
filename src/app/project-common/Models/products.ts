export interface Products {
    id: string;
    value: string;
    listOfLevel2Cards: listOfLevel2Cards[];
}

export interface listOfLevel2Cards {
    createdTS: string;
    LUT: string;
}
