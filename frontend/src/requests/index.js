export const getBooks = (resolve, reject = () => {}) =>{
    fetch('http://localhost:5000/api/book/all')
    .then(data=>data.json(), reject)
    .then(resolve);
}

export const getCorps = (resolve, reject = () => {}) =>{
    fetch('http://localhost:5000/api/corp/all')
    .then(data=>data.json(), reject)
    .then(resolve);
}

export const getLearns = (resolve, reject = () => {}) =>{
    fetch('http://localhost:5000/api/learn/all')
    .then(data=>data.json(), reject)
    .then(resolve);
}

export const getArticles = (resolve, reject = () => {}) =>{
    fetch('http://localhost:5000/api/articles/all')
    .then(data=>data.json(), reject)
    .then(resolve);
}