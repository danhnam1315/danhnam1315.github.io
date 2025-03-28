const navItems = [
    { title: "Trang chủ", link: "/", target: "_blank" },
    { title: "Contact", link: "#contact", target: "_blank" },
    { title: "Blog", link: "#blog", target: "_blank" },
    { title: "Support", link: "#support", target: "_blank" },
    { title: "Support", link: "#support", target: "_blank" },
    { title: "Support", link: "#support", target: "_blank" },
    { title: "Support", link: "#support", target: "_blank" },
    { title: "Support", link: "#support", target: "_blank" },
    { title: "Support", link: "#support", target: "_blank" },
    { title: "Support", link: "#support", target: "_blank" },
    { title: "Support", link: "#support", target: "_blank" },
    { title: "Support", link: "#support", target: "_blank" },
    // { title: "Support", link: "#support", target: "_blank" },
];

const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6", "#1abc9c", "#e67e22"];
const navContainer = document.getElementById("navContainer");

navItems.forEach((item, index) => {
    let a = document.createElement("a");
    a.classList.add("nav-item");
    a.textContent = item.title;
    a.href = item.link;
    a.target = item.target;
    a.style.background = colors[index % colors.length];
    navContainer.appendChild(a);
});