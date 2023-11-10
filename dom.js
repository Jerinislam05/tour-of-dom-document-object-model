// console.log('hello world');
/* DOM
----------
what can do javascript with dom
1. javascript can change all the HTML elements, attributes in the page
2. can change all the css styles in the page
3. can remove existing HTML elements and attributes
4. can add new HTML elements and attributes
5. javascript can react to all existing HTML events in the page
*/
const sections = document.querySelectorAll('section');
// console.log(sections);
for (const section of sections) {
    // console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightGray';
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');