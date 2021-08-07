const copyYear = document.getElementById("thisYear");





function copyrightUpdate(){
    var today = new Date();
    var date = (today.getMonth()+1)+"-"+today.getDate()+"-"+today.getFullYear();
    var thisYear = today.getFullYear();
    crUpdate = document.createElement('small');
    crUpdate.textContent =  `${thisYear} Shanna Ostermiller`;
    copyYear.appendChild(crUpdate);
    console.log("is this working")
}

copyrightUpdate(thisYear);

