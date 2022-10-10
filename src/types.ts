export interface Picture {
    CloudinaryID: string;
    Url: string;
    Alt: string;
    Caption: string;
}

export interface Profile {
    ID: number;
    Name: string;
    CamperType: string;
    Description: string;
    Highlights: string;
    Beds: number;
    MaxPeople: number;
    Lat: number;
    Lng: number;
    City: string;
    OwnerID: number;
    OwnerName: string;
    OwnerPicture: string;
    Pictures: Picture[];
    Slug: string;
    Rating: number;
    NumberReviews: number;
    CRMStatus: string;
    PublishingStatus: string;
    PausedTill?: any;
    Make: string;
    Model: string;
    CountryCode: string;
    Direct: boolean;
    DirectAllowed: boolean;
    AnimalsAllowed: string;
    COVIDCancellationPromised: boolean;
    WinterSuitability: string[];
    BathroomFacilities: string[];
    SectionComplete: boolean;
    InsuranceType: string;
}

export interface PricePerDayFrom {
    Amount: number;
    Currency: string;
}

export interface Datum {
    Profile: Profile;
    DistanceKm: number;
    PricePerDayFrom: PricePerDayFrom;
    BookableFrom: string;
    Path?: any;
    NewFlag: boolean;
}

export interface Pagination {
    CurrentOffset: number;
    PageSize: number;
    Total: number;
}

export interface Equipment {
    Pets: boolean;
    Bikes: boolean;
    Winter: boolean;
    Towbar: boolean;
    Automatic: boolean;
    AirConditioningDriverZone: boolean;
    AirConditioningLivingZone: boolean;
    Shower: boolean;
    Toilette: boolean;
    SmokingNotAllowed: boolean;
    Heating: boolean;
}

export interface Params {
    PageSize: number;
    centerLat: number;
    centerLng: number;
    dateRangeValid: boolean;
    equipment: Equipment;
    geoBoundsValid: boolean;
    geoCenterValid: boolean;
    geoDestinationValid: boolean;
}

export interface Predictions {
    'search-ranking-v3'?: any;
}

export interface RootObject {
    Data: Datum[];
    Pagination: Pagination;
    Params: Params;
    Path?: any;
    Predictions: Predictions;
}
