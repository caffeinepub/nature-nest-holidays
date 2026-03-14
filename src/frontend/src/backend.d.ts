import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TourPackage {
    durationDays: bigint;
    destination: string;
    name: string;
    highlights: Array<string>;
    category: Category;
    priceINR: bigint;
}
export interface Inquiry {
    id: bigint;
    destinationOfInterest: string;
    name: string;
    travelDates: string;
    email: string;
    numberOfTravelers: bigint;
    message: string;
    phone: string;
}
export interface Destination {
    region: string;
    name: string;
    description: string;
    bestSeason: BestSeason;
}
export interface BestSeason {
    endMonth: string;
    startMonth: string;
}
export interface Testimonial {
    name: string;
    reviewText: string;
    rating: bigint;
    location: string;
    tourPackageName: string;
}
export enum Category {
    spiritual = "spiritual",
    cultural = "cultural",
    adventure = "adventure",
    wildlife = "wildlife",
    beach = "beach"
}
export interface backendInterface {
    addInquiry(inquiry: Inquiry): Promise<bigint>;
    addTestimonial(testimonial: Testimonial): Promise<void>;
    getDestinations(): Promise<Array<Destination>>;
    getInquiries(): Promise<Array<Inquiry>>;
    getTestimonials(): Promise<Array<Testimonial>>;
    getTourPackages(): Promise<Array<TourPackage>>;
}
