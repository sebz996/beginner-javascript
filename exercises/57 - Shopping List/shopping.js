const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('submitted!!');
  const name = e.currentTarget.item.value;
  // if its empty, then dont submit it
  if (!name) return;

  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  // Push the items into our state
  items.push(item);
  console.log(`There are now ${items.length} in your state`);
  // Clear the form
  e.target.reset();
  // fire off a custom event that will tell anyone else who cares that the items have been updated!
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
    console.log(items);
    const html = items
      .map(
        item => `<li class="shopping-item">
        <input
          value="${item.id}"
          type="checkbox"
          ${item.complete && 'checked'}
        >
        <span class="itemName">${item.name}</span>
        <button
          aria-label="Remove ${item.name}"
          value="${item.id}"
        >&times;</buttonaria-label="Remove>
    </li>`
      )
      .join('');
    list.innerHTML = html;
  }

  shoppingForm.addEventListener('submit', handleSubmit);
  list.addEventListener('itemsUpdated', displayItems);
  list.addEventListener('itemsUpdated', mirrorToLocalStorage);

  list.addEventListener('click,' function(e));
  