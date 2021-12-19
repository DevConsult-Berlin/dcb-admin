import {format as dateFnsFormat} from "date-fns";

export type AppDate = Date | string | number | undefined | null;

const DEFAULT_FORMAT = "dd.MM.yyyy";

export function formatDate(input: AppDate, formatString = DEFAULT_FORMAT): string {
    if(input === undefined || input === null) {
        return "";
    }
    return dateFnsFormat(new Date(input), formatString);
}
