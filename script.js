function beforesubmit(){
    console.log("beforesubmit");

    let outputdate = document.querySelector(".outputDate");
    let inputdate = document.querySelector(".inputDate");

    // console.log("outputdate ",outputdate.value);
    console.log("inputdate -->",inputdate.value); // string --> date(en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
    console.log("outputdate.value -->",outputdate.value);
}