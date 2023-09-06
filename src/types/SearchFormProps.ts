import { City } from "./City";

export interface SearchFormProps {
    onTestSubmit?: (city: City) => void;
}
