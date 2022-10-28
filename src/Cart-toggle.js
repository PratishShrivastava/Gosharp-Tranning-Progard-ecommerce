export default function cartToggle() {
    var x = document.getElementById("cart");
    if (x.style.display === "none") {
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
}