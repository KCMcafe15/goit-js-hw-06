const categoryItems = document.querySelectorAll('#categories li.item');
console.log('Number of categories:', categoryItems.length);

categoryItems.forEach((categoryItem) => {
    const categoryHeader = categoryItem.querySelector('h2').textContent;
    const categoryElements = categoryItem.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryHeader}`);
    console.log(`Elements: ${categoryElements}`);
});