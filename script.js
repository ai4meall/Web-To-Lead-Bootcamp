let capthachecked = false;

function beforesubmit(event){
    console.log("beforesubmit");
    if(capthachecked){

        let outputdate = document.querySelector(".outputDate");
        let inputdate = document.querySelector(".inputDate");
    
        // console.log("outputdate ",outputdate.value);
        console.log("inputdate -->",inputdate.value); // string --> date(en_IN)
    
        let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
        outputdate.value = formattedDate;
        console.log("outputdate.value -->",outputdate.value);
    } else{
        alert("Please checked the reCAPTCHA box to submit the lead");
        event.preventDefault();
    }
}


function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") 
        {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
             elems["ts"] = JSON.stringify(new Date().getTime());
             document.getElementsByName("captcha_settings")[0].value 
                                          = JSON.stringify(elems); 

        } 
    } 

setInterval(timestamp, 500); 

function capthachasuccess(){
    capthachecked = true;
}