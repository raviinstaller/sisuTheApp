document.addEventListener("DOMContentLoaded", () => {
  fetch("https://blog.sisutheapp.com/wp-json/wp/v2/posts?", {
    headers: {
      accept: "application/json, charset=utf=8",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      json.length = 3;
      printTitle(json);
    })
    .catch((err) => {
      alert("Something went wrong!");
    });

  let postDiv = document.querySelector(".row.blogs");

  function printTitle(title) {
    for (let i = 0; i < title.length; i++) {
      let blog = document.createElement("div");
      blog.classList.add("blog");

      let imgContainer = document.createElement("div");
      imgContainer.classList.add("overflow-hidden", "w-100", "h-250");

      let featuredImage = document.createElement("img");
      featuredImage.classList.add("w-100", "zoom-hover");
      imgContainer.appendChild(featuredImage);

      let contentContainer = document.createElement("div");
      contentContainer.classList.add("p-20");

      let dateEl = document.createElement("div");
      dateEl.classList.add("date");

      let calendarImg = document.createElement("img");

      let spanDate = document.createElement("span");

      dateEl.appendChild(calendarImg);
      dateEl.appendChild(spanDate);

      let h3 = document.createElement("h3");

      let p = document.createElement("p");
      p.classList.add("line-1");

      let anchor = document.createElement("a");
      anchor.classList.add("btn-primary");
      anchor.setAttribute("target", "_blank");
      anchor.textContent = "Read More";

      featuredImage.setAttribute("src", title[i].jetpack_featured_media_url);

      calendarImg.setAttribute("src", "./images/calendar.svg");
      spanDate.textContent = title[i].date.split("T")[0];

      h3.textContent = title[i].title.rendered;

      let string = title[i].excerpt.rendered;

      p.textContent = string.substring(3, string.length - 5);

      anchor.setAttribute("href", title[i].link);

      contentContainer.appendChild(dateEl);
      contentContainer.appendChild(h3);
      contentContainer.appendChild(p);
      contentContainer.appendChild(anchor);
      blog.appendChild(imgContainer);
      blog.appendChild(contentContainer);
      postDiv.appendChild(blog);
    }
  }
});
