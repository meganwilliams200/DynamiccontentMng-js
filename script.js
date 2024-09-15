document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('add-item');
    const itemNameInput = document.getElementById('item-name');
    const itemQuantityInput = document.getElementById('item-quantity');
    const shoppingList = document.getElementById('shopping-list');

    // Function to add a new item to the list
    function addItem() {
        const itemName = itemNameInput.value.trim();
        const itemQuantity = itemQuantityInput.value.trim();
        
        if (itemName === '' || itemQuantity === '') {
            alert('Please enter both item name and quantity.');
            return;
        }

        // Create new list item
        const listItem = document.createElement('li');
        listItem.className = 'shopping-list-item';
        listItem.innerHTML = `
            <span>${itemName} (${itemQuantity})</span>
            <button class="edit-item">Edit</button>
            <button class="remove-item">Remove</button>
        `;

        // Add event listeners to Edit and Remove buttons
        listItem.querySelector('.edit-item').addEventListener('click', () => editItem(listItem));
        listItem.querySelector('.remove-item').addEventListener('click', () => removeItem(listItem));

        // Append the new item to the list
        shoppingList.appendChild(listItem);

        // Clear inputs
        itemNameInput.value = '';
        itemQuantityInput.value = '';
    }

    // Function to edit an existing item
    function editItem(listItem) {
        const itemName = prompt('Enter new item name:', listItem.querySelector('span').textContent.split(' (')[0]);
        const itemQuantity = prompt('Enter new quantity:', listItem.querySelector('span').textContent.split(' (')[1].replace(')', ''));

        if (itemName !== null && itemQuantity !== null) {
            listItem.querySelector('span').textContent = ${itemName} (${itemQuantity});
        }
    }

    // Function to remove an item from the list
    function removeItem(listItem) {
        if (confirm('Are you sure you want to remove this item?')) {
            shoppingList.removeChild(listItem);
        }
    }

    // Event listener for Add Item button
    addItemButton.addEventListener('click', addItem);
});