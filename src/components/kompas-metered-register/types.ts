export interface meteredRegisterContent {
  expand: {
    lastArticle: {
      title: string;
      description: string;
    };
    title: string;
    description: string;
  };
  default: {
    lastArticle: {
      title: string;
    };
    title: string;
  };
  ctaUrl: string,
  ctaText: string,
}
