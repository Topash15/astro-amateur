/**Converts date from JSON to YYYY-MM-DD format
 * 
 * Example:
 * 2022-07-29T04:00:00.000Z => 2022-07-29
*/
export const convertDate = (jsonDate: string): string => {
    let indexOfT = jsonDate.indexOf("T");
    let dateString = jsonDate.slice(0, indexOfT);
    return dateString;
};
