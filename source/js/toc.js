document.addEventListener("DOMContentLoaded", function () {
    const tocContainer = document.getElementById("toc");
    const toggleButton = document.querySelector(".toc-toggle");
    const headings = document.querySelectorAll("#article-content h1, #article-content h2, #article-content h3");
  
    if (headings.length === 0) return;
  
    let tocHTML = "<ul class='toc-list'>";
    headings.forEach((heading, index) => {
      let tag = heading.tagName.toLowerCase();
      let anchorId = `toc-${index}`;
      heading.id = anchorId;
  
      tocHTML += `<li class="${tag}"><a href="#${anchorId}">${heading.innerText}</a></li>`;
    });
    tocHTML += "</ul>";
  
    tocContainer.innerHTML = tocHTML;
  
    document.querySelectorAll(".toc a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  
    toggleButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth"});
    });
  });
  