// when the website loads, it will focus on the search bar
window.onload = function() {
    // same thing as above
    document.getElementById("search").focus();
};

// when enter is pressed, it will check if it is website or text
function isWebsite(input) {

    // this regex check checks if it has https and tld or just tld. fyi if you didnt know tlds are .com, .org, etc. they stand for top level domain
    if (input.match(/^(http|https):\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+/) || input.match(/^(www\.|\/)?[a-zA-Z0-9]+\.[a-zA-Z0-9]+/)) {
        // i added  true or false to make my life easier its just a boolean
        return true;
    } else {
        // same thing as above
        return false;
    }
}

// here we will add the search function
function Search() {
    // we will get the input value from the element id search.
    let input = document.getElementById("search").value;

    // if the input is website, we will open the website in the same tab
    if (isWebsite(input)) {
        if (!/^https?:\/\//i.test(input)) {
            input = 'http://' + input;
        }
        // the _self will open the link in the same tab, if you wish to open in new tab, you can use _blank
        window.open(input, "_self");
    } else {
        // same thing as above, but this time we will search the text in google
        window.open("https://www.google.com/search?q=" + input, "_self");
    }
}