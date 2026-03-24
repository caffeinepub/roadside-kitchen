import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    displayName: string;
    displayEmoji: string;
}
export interface RestaurantInfo {
    tagline: string;
    name: string;
    address: string;
}
export interface Review {
    reviewText: string;
    reviewerName: string;
}
export interface backendInterface {
    getMenuItems(): Promise<Array<MenuItem>>;
    getRestaurantInfo(): Promise<RestaurantInfo>;
    getReviews(): Promise<Array<Review>>;
}
