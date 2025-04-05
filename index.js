const navItems = [
    { title: "Trang chủ", link: "/", target: "_blank" },
    { title: "Contact", link: "#contact", target: "_blank" },
    { title: "Blog", link: "#blog", target: "_blank" },
    { title: "01-Phân tích văn bản", link: "/PromtAppv1/01-phanTichVanBan.html", target: "_blank" },
    { title: "02-Giải nghĩa nhanh từ khóa", link: "/PromtAppv1/02-GiaiNghiaNhanhTuKhoa.html", target: "_blank" },
    { title: "03-Dịch thuật sát nghĩa", link: "/PromtAppv1/03-DichThuatSatNghia.html", target: "_blank" },
    { title: "04-Prompt Translator App", link: "/PromtAppv1/04-PromptTranslatorApp.html", target: "_blank" },
    { title: "05-Text Summary App", link: "/PromtAppv1/05-TextSummary.html", target: "_blank" },
    { title: "06-Gen Slide Latex Code", link: "/PromtAppv1/06-GenSlideLatexCode.html", target: "_blank" },
    { title: "Support", link: "#", target: "_blank" },
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