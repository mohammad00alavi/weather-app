import { CityData } from "./CityData";
import { Status } from "./Status";

export interface AppContextProps {
    cityData: CityData;
    status: Status;
}
