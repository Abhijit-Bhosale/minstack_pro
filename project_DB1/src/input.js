let clickkk = async () => {
    let ID = document.querySelector("#id1").value;
    let UNAME = document.querySelector("#id2").value;
    let UEMAIL = document.querySelector("#id3").value;
    let UPHNO = document.querySelector("#id4").value;
    console.log(UNAME);
    let url = `http://localhost:5800/user?ID=${ID}&UNAME=${UNAME}&UEMAIL=${UEMAIL}&UPHNO=${UPHNO}`;
    console.log(url);
    await fetch(url);

    document.querySelector("#id1").value = "";
    document.querySelector("#id2").value = "";
    document.querySelector("#id3").value = "";
    document.querySelector("#id4").value = "";
}

