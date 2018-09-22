function buildQueryParams() {

    let queryParams = {
        adults: "1",
        cabinClass: "economy",
        children: "0",
        country: "US",
        currency: "USD",
        destinationPlace: "EWR-SKY",
        inboundDate: "2018-09-29",
        infants: "0",
        locale: "en-US",
        originPlace: "AUS-SKY",
        outboundDate: "2018-09-22"
    };
    // return queryParams;
}
function getHeader() {
    let queryHeaders = {
        "X-Mashape-Key": "LqjKeeIqzImshkHyYu0Rk9eT1LxSp1obbmljsnuDOes4Umc5Dt",
        "X-Mashape-Host": "skyscanner-skyscanner-flight-search-v1.p.mashape.com",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
    };
    // return queryHeaders;
}
function createSession() {
    let location;
    var queryURL = "https://skyscanner-skyscanner-flight-search-v1.p.mashape.com/apiservices/pricing/v1.0";
    $.ajax({
        url: queryURL,
        headers: getHeader(),
        // data: JSON.stringify(user)
        method: "POST",
        // dataType: 'jsonp',
        // cache: true,
        // crossDomain: true,
        data: buildQueryParams()
    }).then((data, status, xhr) => {
        location = xhr.getResponseHeader();
    })
    return location;
    // return createSession();
}
// , error: function(response) {
    // console.log("Error:" + response);
    // debugger;

function getPrices() {
    createSession();
    // return getPrices();
}