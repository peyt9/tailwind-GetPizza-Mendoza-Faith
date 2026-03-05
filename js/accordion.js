const yearItem = document.querySelectorAll(".yearItem");

yearItem.forEach((item) => {
  // get the clickable question and its corresponding answer
  const question = item.querySelector(".yearItem--title");
  const answer = item.querySelector(".yearItem--detail");

  //   add click event to each question
  question.addEventListener("click", () => {
    // check if the clicked item is already open
    const open = item.classList.contains("active");

    // close all item
   yearItem.forEach((i) => {
      // remove active state
      i.classList.remove("active");
      //   reset max height into 0
      i.querySelector(".yearItem--detail").style.maxHeight = null;
    });

    // if the clicked item was not open, then you need to add an active to manipulate it to css
    if (!open) {
      item.classList.add("active");

      //   we need to set max height dynamically based on its content
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});