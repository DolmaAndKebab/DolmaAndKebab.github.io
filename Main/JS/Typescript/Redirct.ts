// Creating Redirct function
function Redirct(GET_URL: string): boolean {
    if (typeof GET_URL !== "string" || GET_URL.length < 0) {return false};
    
    window.location.assign(GET_URL.toString());

    return true
}

// Exporting functions
export default {
    Redirct,
}