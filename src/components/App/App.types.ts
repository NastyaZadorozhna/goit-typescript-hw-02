export interface Image {
    id: string;
    alt_description: string | null;
    description: string | null;
    urls: {
      small: string;
      regular: string;
    };
  }
  
  export interface FetchImagesResponse {
    results: Image[];
    total_pages: number;
  }
  