
export type TStatus = "ongoing" | "canceled" | "finished" | "hiatus";
export type TType = "manga" | "manhwa" | "manhua";
export type TDemographics = "shounen" | "seinen" | "shoujo" | "josei";

export type TTag = TType | TDemographics | TStatus;

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
  date: Date;
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

  export type TContinueReading = {
    mangaId: string;
  }

  export type TImages = {
    number: number;
    image: string;
  }

  export type TChapter = {
    mangaId: TManga['id'];
    number: number;
    title?: string;
    images: TImages[];
  }