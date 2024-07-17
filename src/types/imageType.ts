export interface ImageType {
  id: string;
  slug: string;
  description: string;
  heigth: number;
  width: number;
  urls: {
    raw: string;
    full: string;
  };
}
