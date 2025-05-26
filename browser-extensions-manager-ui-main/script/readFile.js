fetch("../data.json")
    .then((res) => res.json())
    .then((dt) => {
        const container = document.getElementById("card-list");
        container.innerHTML = "";

        dt.forEach((item) => {
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
              <button class="btn-remove">Remove</button>
              <label class="toggle-switch">
                <input type="checkbox" ${item.isActive ? "checked" : ""}>
                <span class="slider"></span>
              </label>
            </div>`;
          
          
        container.appendChild(card);
      })
    }).catch(err => console.log(err))