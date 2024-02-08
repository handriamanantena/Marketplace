export type Item = {
    id: number,
    url: string,
    avgRating: number
    totalRatings: number
}

export type Review = {
    id: number,
    email: string
    itemId: number
    rating: number
    comment: string
}