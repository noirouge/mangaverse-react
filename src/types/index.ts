
export type TStatus = "ongoing" | "canceled" | "finished" | "hiatus";
export type TType = "manga" | "mawnha" | "manhua";
export type TDemographics = "shonen" | "seinen" | "shojo" | "josei";

export type TGenre = {
  id: number;
  name: string;
};

export type TManga = {
  id: number;
  uniqueName: string;
  title: string;
  description: string;
  demographic: TDemographics; //
  type: TType; //
  status: TStatus; //
  author: string; //
  genreIds: TGenre["id"][]; //
  rate: number;
  portrait: string;
  cover: string;
};

export type TTrending = {
  position: number;
  mangaId: TGenre["id"];
};

export type TTrendingManga = Omit<
  TManga,
  "genreIds" | "demographic" | "type" | "status" | "author" | "id"
> &
  Omit<TTrending, "mangaId"> & {
    chapters: number;
  };