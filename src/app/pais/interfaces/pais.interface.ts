export interface CountryModel {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc?: string;
    independent: boolean;
    status: Status;
    unMember: boolean;
    currencies?: Currencies;
    idd: Idd;
    capital?: string[];
    altSpellings: string[];
    region: Region;
    subregion?: string;
    languages: { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    borders?: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini?: { [key: string]: number };
    fifa?: string;
    car: Car;
    timezones: string[];
    continents: Continent[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: StartOfWeek;
    capitalInfo: CapitalInfo;
    postalCode?: PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs: string[];
    side: Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    BAM?: BAM;
    MVR?: Afn;
    EUR?: Afn;
    AUD?: Afn;
    XAF?: Afn;
    JOD?: Afn;
    ZAR?: Afn;
    AMD?: Afn;
    GBP?: Afn;
    SHP?: Afn;
    BDT?: Afn;
    ALL?: Afn;
    SSP?: Afn;
    CZK?: Afn;
    BTN?: Afn;
    INR?: Afn;
    PKR?: Afn;
    XPF?: Afn;
    KMF?: Afn;
    BND?: Afn;
    SGD?: Afn;
    KHR?: Afn;
    USD?: Afn;
    GHS?: Afn;
    CDF?: Afn;
    TZS?: Afn;
    SAR?: Afn;
    DZD?: Afn;
    MAD?: Afn;
    MRU?: Afn;
    TRY?: Afn;
    BMD?: Afn;
    UGX?: Afn;
    HNL?: Afn;
    MOP?: Afn;
    HKD?: Afn;
    GMD?: Afn;
    MMK?: Afn;
    XCD?: Afn;
    VND?: Afn;
    LBP?: Afn;
    KES?: Afn;
    JPY?: Afn;
    PHP?: Afn;
    KZT?: Afn;
    TJS?: Afn;
    CLP?: Afn;
    CNY?: Afn;
    LAK?: Afn;
    MKD?: Afn;
    AFN?: Afn;
    BWP?: Afn;
    ANG?: Afn;
    HUF?: Afn;
    IQD?: Afn;
    YER?: Afn;
    SOS?: Afn;
    THB?: Afn;
    TND?: Afn;
    CHF?: Afn;
    SDG?: BAM;
    IRR?: Afn;
    DJF?: Afn;
    HTG?: Afn;
    SYP?: Afn;
    LSL?: Afn;
    BSD?: Afn;
    KPW?: Afn;
    SCR?: Afn;
    BHD?: Afn;
    TWD?: Afn;
    KRW?: Afn;
    ETB?: Afn;
    NZD?: Afn;
}

export interface Afn {
    name: string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng: Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt?: string;
}

export interface Idd {
    root?: string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common: string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}
