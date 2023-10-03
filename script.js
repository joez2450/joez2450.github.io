let ownerName = "Joe Zheng"; // update the part BETWEEN the "quotes"
let userName = "joez2450"; // same here

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";
