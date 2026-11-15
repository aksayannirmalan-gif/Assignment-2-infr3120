// IIFI -> THIS IMMIDEATLY INVOKES THE FUNCTION EXPRESSION
//this code is responsible for telling you in console if it is running 

(function(){
    function start(){
        console.log("The application is successfully running! ")
    }
    window.addEventListener("load",start)
    // this makes the event registered
})();