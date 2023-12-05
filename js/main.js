// Modals
MicroModal.init();

// Mobile Toggler
const mobileSidebarOpenBtn = document.querySelector(".mobile-toggler");
const mobileSidebarCloseBtn = document.querySelector(".sidebar-close-btn");
const sidebarExpandBtn = document.querySelector(".sidebar-expand-btn");
const navSidebar = document.querySelector(".nav-sidebar");
const navSidebarWrapper = document.querySelector(".nav-sidebar-wrapper");

mobileSidebarOpenBtn.addEventListener("click", () => {
  navSidebarWrapper.classList.add("nav-sidebar--active");
});

mobileSidebarCloseBtn.addEventListener("click", () => {
  navSidebarWrapper.classList.remove("nav-sidebar--active");
});

sidebarExpandBtn.addEventListener("click", () => {
  console.log("click expand");
  navSidebar.classList.toggle("nav-sidebar--expand");
});

// Comment accordion Effect
$(".accordion__question").click(function (e) {
  e.preventDefault();
  var notthis = $(".active").not(this);
  notthis.toggleClass("active").next(".accordion__answer").slideToggle(300);
  $(this).toggleClass("active").next().slideToggle("fast");
});

// Data Table
new DataTable("#example", {
  searching: false,
  paging: false,
  info: false,
});

new DataTable("#example2", {
  searching: false,
  paging: false,
  info: false,
});
