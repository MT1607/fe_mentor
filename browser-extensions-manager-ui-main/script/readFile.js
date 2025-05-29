let allExtensions = []; // Lưu danh sách dữ liệu gốc

// Hàm render danh sách card theo filter
function renderCards(data) {
  const container = document.getElementById("card-list");
  container.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-infor">
        <img src="${item.logo}" alt="logo-extension">
        <div class="information">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      </div>
      <div class="toggle">
        <button class="btn-remove" onclick="openModal()">Remove</button>
        
        <label class="toggle-switch">
          <input type="checkbox" ${item.isActive ? "checked" : ""}>
          <span class="slider round"></span>
        </label>
      </div>
    `;
    container.appendChild(card);
  });
}

// Fetch dữ liệu ban đầu
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    allExtensions = data; // lưu toàn bộ
    renderCards(allExtensions); // hiển thị mặc định: all
    filterButtons(); // gán sự kiện lọc
  })
  .catch(err => console.log(err));



function filterButtons() {
    const buttons = document.querySelectorAll(".btn-status button");

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.dataset.isSelect = "false");
            btn.dataset.isSelect = "true";

            const value = btn.value;

            if (value === "0") {
                renderCards(allExtensions); // All
            } else if (value === "1") {
                renderCards(allExtensions.filter(ext => ext.isActive)); // Active
            } else if (value === "2") {
                renderCards(allExtensions.filter(ext => !ext.isActive)); // Inactive
            }
        });
    });
}