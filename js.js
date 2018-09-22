function buildQueryParams() {
    
    var queryParams = { "adults": "1" };
    queryParams["cabinClass"] = "economy";
    queryParams["children"] = "0";
    queryParams["country"] = "US";
    queryParams["currency"] = "USD";
    queryParams["destinationPlace"] = "EWR-SKY";
    queryParams["inboundDate"] = "2018-09-29";
    queryParams["infants"] = "0";
    queryParams["locale"] = "en-US";
    queryParams["originPlace"] = "AUS-SKY";
    queryParams["outboundDate"] = "2018-09-22";

    return queryParams;
}

function getHeader() {
    var queryHeaders = { "X-Mashape-Key": "LqjKeeIqzImshkHyYu0Rk9eT1LxSp1obbmljsnuDOes4Umc5Dt" };
    queryHeaders["Content-Type"] = "application/x-www-form-urlencoded";
    queryHeaders["Accept"] = "application/json";
    queryHeaders["Access-Control-Allow-Origin"] = "*";
    // queryHeaders["Access-Control-Allow-Methods"] = "POST";
    // queryHeaders["Access-Control-Allow-Headers"] = "Content-Type, Authorization";

    return queryHeaders;
}

function createSession() {
    var queryURL = "https://skyscanner-skyscanner-flight-search-v1.p.mashape.com/apiservices/pricing/v1.0";
    var r = $.ajax({
        url: queryURL,
        headers: getHeader(),
        // data: JSON.stringify(user)
        method: "POST",
        // dataType: 'jsonp',
        // cache: true,
        // crossDomain: true,
        data: buildQueryParams(),
        success: function(response){
            // debugger
            console.log(response);
        },error: function(response){
            console.log("Error:"+ response);
            // debugger;
        }
    });

}

function getPrices() {
    createSession();
}