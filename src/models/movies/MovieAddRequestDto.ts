export  interface MovieAddRequestDto {
    name: string;
    description: string;
    imdb:number;
    publishDate:string;
    image:File | null;
    categoryId:number;
    directorId:number;
    isActive:boolean;
}