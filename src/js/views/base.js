export const element = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResult: document.querySelector('.results__list'),
    searchRPG: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shopping: document.querySelector('.shopping__list'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list')
};

export const renderLoader = parent => {
    const loader = `
        <div class="${elemString.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const elemString = { loader: 'loader'};
export const clearLoader = () => { 
    const loader = document.querySelector(`.${elemString.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
};