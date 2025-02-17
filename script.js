document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");
    let draggedItem = null;

    images.forEach(image => {
        image.addEventListener("dragstart", (e) => {
            draggedItem = e.target;
            e.dataTransfer.setData("text/plain", e.target.id);  // Set data transfer
            e.target.classList.add("selected");
        });

        image.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        image.addEventListener("drop", (e) => {
            e.preventDefault();
            const droppedItemId = e.dataTransfer.getData("text/plain");
            const droppedItem = document.getElementById(droppedItemId);
            if (draggedItem && draggedItem !== e.target) {
                swapImages(droppedItem, e.target);
            }
            draggedItem.classList.remove("selected");
            draggedItem = null;
        });

        image.addEventListener("dragend", () => {
            if (draggedItem) {
                draggedItem.classList.remove("selected");
            }
            draggedItem = null;
        });
    });

    function swapImages(item1, item2) {
        let temp = item1.style.backgroundImage;
        item1.style.backgroundImage = item2.style.backgroundImage;
        item2.style.backgroundImage = temp;
    }
});
