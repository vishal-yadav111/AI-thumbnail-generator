import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 99,
        period: "100 credits",
        features: [
            "10 Premium AI Thumbnails",
            "Best for starters",
            "No watermark on downloads",
            "Commercial usage allowed",
            "Credits never expire"


        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 199 ,
        period: "400 credits",
        features: [
            "40 Premium AI Thumbnails",
            "Best for intermediate",
            "Access to all AI models",
            "No watermark on downloads",
            "High-quality",
            "Commercial usage allowed",
            "Credits never expire"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 899,
        period: " 1500 credits",
        features: [
            "150 Premium AI Thumbnails",
            "Best for professionals",
            "Access to all AI models",
            "High-quality",
            "Commercial usage allowed"
        ],
        mostPopular: false
    }
];