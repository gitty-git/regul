// all in index - test only
export interface Product {
  id: number
  name: string
  price: number
  promoted: boolean
  imageUrl: string
  date: string
  viewCount: number
  hidden: boolean
}

export interface Company {
  name: string
  logo: string
}

export interface Rating {
  score: number
  voteCount: number
}