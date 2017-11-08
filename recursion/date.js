function convertLocalDateToUTCDate(date, toUTC) {
    date = new Date(date);
    //Local time converted to UTC
    console.log("Time: " + date);
    var localOffset = date.getTimezoneOffset() * 60000;
    var localTime = date.getTime();
    if (toUTC) {
        date = localTime + localOffset;
    } else {
        date = localTime - localOffset;
    }
    date = new Date(date);
    console.log("Converted time: " + date);
    return date;
}



console.log(convertLocalDateToUTCDate("11-10-2017 11:00:00 PM", true));

var offset = moment().utcOffset()
moment.utc("10-11-2017 23:59:59").utcOffset(240).format("L LT")