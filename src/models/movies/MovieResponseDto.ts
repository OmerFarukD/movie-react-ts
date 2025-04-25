export interface MovieResponseDto {
    id:string;
    name: string;
    imdb:number;
    publishDate:string;
    categoryName:string;
    directorName:string;
    imageUrl:string;
    description:string;
    players:string[];
}