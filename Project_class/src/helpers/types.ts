export interface IBook {
  id: number;
  title: string;
  pages: number;
  price: number;
  authorId: number;
}
export interface IAddBook {
  title: string;
  pages: number;
  price: number;
  authorId: number;
}
export interface IAuthor {
  id: number;
  name: string;
  surname: string;
}
