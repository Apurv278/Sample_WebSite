import { element } from './base';

export const getInput = () => element.searchInput.value;

export const clearInput = () => { element.searchInput.value = ''; }

export const clearResult = () => { 
    element.searchResult.innerHTML = '';
    element.searchRPG.innerHTML = '';
 }

export const limitTitle = (title, limit = 20) => {
    const newT = [];
    if(title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if(acc + cur.length <= limit) {
                newT.push[cur];
            }
            return acc + cur.length;
        }, 0);
        return `${newT.join(' ')} ...`;
    }
    return title;
}

const renderRecipe = recipe => {
    const markup = `
        <li>
           <a class="results__link href="${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                   <h4 class="results__name">${recipe.title}</h4>
                        <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    element.searchResult.insertAdjacentHTML('beforeend', markup);
}

const createBtn = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left': 'right'}"></use>
            </svg>  
    </button>
`;

const renderBtn = (page, num, resPG) => {
    const pg = Math.ceil(num / resPG);
    let btn;
    if(page === 1 && pg > 1){
        btn = createBtn(page, 'next');
    } else if(page < pg) {
        btn = `${createBtn(page, 'prev')} ${createBtn(page, 'next')}`;
    } else if(page === pg && pg > 1){
        btn = createBtn(page, 'prev');
    }
    element.searchRPG.insertAdjacentHTML('afterbegin', btn);
};

export const renderResult = (recipes, page = 1, resPage = 10) => {
    const start = (page - 1) * resPage;
    const end = page * resPage;
    recipes.slice(start, end).forEach(renderRecipe);
    renderBtn(page, recipes.length, resPage);
};

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    });
    document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');
};


