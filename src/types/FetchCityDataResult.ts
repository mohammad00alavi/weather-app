import { Status } from "./Status";

export type FetchCityDataResult =
    | {
          data: any;
          status: Status;
      }
    | undefined;
