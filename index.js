const navItems = [
    // { title: "Trang chủ", link: "./", target: "_blank" },
    { title: "01-Phân tích văn bản", link: "./01-phanTichVanBan.html", target: "_blank" },
    { title: "02-Giải nghĩa nhanh từ khóa", link: "./02-GiaiNghiaNhanhTuKhoa.html", target: "_blank" },
    { title: "03-Dịch thuật sát nghĩa", link: "./03-DichThuatSatNghia.html", target: "_blank" },
    { title: "04-Prompt Translator App", link: "./04-PromptTranslatorApp.html", target: "_blank" },
    { title: "05-Text Summary App", link: "./05-TextSummary.html", target: "_blank" },
    { title: "06-Gen Slide Latex Code", link: "./06-GenSlideLatexCode.html", target: "_blank" },
    { title: "07-Blog Content Generate", link: "./07-BlogPostGenTool.html", target: "_blank" },
    { title: "08-Youtube Fast Preview", link: "./08-YoutubeFastPreviewV1.html", target: "_blank" },
    { title: "09-Post Summary", link: "./09-PostSummary.html", target: "_blank" },
    { title: "10-Post Rewrite", link: "./10-PostRewrite.html", target: "_blank" },
    { title: "11-Post Translate", link: "./11-PostTranslate.html", target: "_blank" },
    { title: "12-Guide Translate", link: "./12-GuideTranslate.html", target: "_blank" },
    { title: "13-Prompt Improve", link: "./13-PromptImprove.html", target: "_blank" },
    { title: "14-Prompt Viết Bài Học Thuật", link: "./14-PromptVietBaiHocThuat.html", target: "_blank" },
    { title: "15-Fix Bugs Python", link: "./15-FixBugPython.html", target: "_blank" },
    { title: "16-Gen Any Code", link: "./16-GenAnyCode.html", target: "_blank" },
    { title: "17-Tree Of Thought", link: "./17-TreeOfThought.html", target: "_blank" },
    { title: "18-Boosting Prompt", link: "./18-BoostingPrompt.html", target: "_blank" },
    { title: "19-RDTF Template", link: "./19-RDTF-PromptTemplate.html", target: "_blank" },
    { title: "20-Gen Keyword Search", link: "./20-GenKeywordSearch.html", target: "_blank" },
    { title: "21-Action Suggest", link: "./21-IdeaSuggest.html", target: "_blank" },
    // { title: "Support", link: "#", target: "_blank" },
    // { title: "Support", link: "#support", target: "_blank" },
    // { title: "Support", link: "#support", target: "_blank" },
    // { title: "Support", link: "#support", target: "_blank" },
    // { title: "Support", link: "#support", target: "_blank" },
    // { title: "Support", link: "#support", target: "_blank" },
    // { title: "Support", link: "#support", target: "_blank" },
];

const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6", "#1abc9c", "#e67e22"];
const navContainer = document.getElementById("navContainer");

navItems.reverse().forEach((item, index) => {
    let a = document.createElement("a");
    a.classList.add("nav-item");
    a.textContent = item.title;
    a.href = item.link;
    a.target = item.target;
    a.style.background = colors[index % colors.length];
    navContainer.appendChild(a);
});