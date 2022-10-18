let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleRightClick = () => {
  // Bump active index
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  // Active group becomes after

  currentGroup.dataset.status = "after";

  // Next group becomes active

  nextGroup.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};
// ------------------------------

const handleLeftClick = () => {
  // Bump active index
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  // Active group becomes after

  currentGroup.dataset.status = "before";

  // Next group becomes active

  nextGroup.dataset.status = "becoming-active-from-after";
  console.log(activeIndex)

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};
