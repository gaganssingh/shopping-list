// Add item button
$(function addItem() {
    // Listen for when sumbit button in <form> clicked
    $("#js-shopping-list-form").submit(event => {
        event.preventDefault();
        // Assign a const to the text input of <input>
        // using class .js-shopping-list-entry
        const addItemValue = $(".js-shopping-list-entry").val();
        // clear text field
        $(".js-shopping-list-entry").val("");
        // Append the list format from the html
        // to the <ul> targeting the class shopping-list
        // using text received from addItemValue
        $(".shopping-list").append(
            `<li>
                <span class="shopping-item">${addItemValue}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        );
    });
});

// Check toggle
$(function toggleItem() {
    // find parent li with class .shopping-item
    // and toggle its css class shopping-item__checked
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
})

// Delete button
$(function deleteItem() {
    // find parent li with class .shopping-item-delete
    // and remove
    $(".shopping-list").on("click", ".shopping-item-delete", function(event){
        $(this).closest("li").remove();
    })
});