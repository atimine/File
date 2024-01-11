function getFile() {
    const file = document.getElementById("file").value
    if (file) {
        document.getElementById("img").innerHTML = file
    }else{
        alert("File was not choosed!")
    }
}
