export interface lastArticleData {
  title: string
  description?: string
}

export interface meteredRegisterContent {
  expand: {
    lastArticle: lastArticleData
    title: string
    description: string
    ctaUrl: string
    ctaText: string
    imageUrl: string
  }
  collapse: {
    lastArticle: lastArticleData
    title: string
  }
}

export interface meteredRegisterResponse {
  kompascom: meteredRegisterContent
  default: meteredRegisterContent
}
