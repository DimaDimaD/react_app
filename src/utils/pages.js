export const getPagesCount = (limit, totalPosts) => {
    return Math.ceil(totalPosts / limit)
}

export const getPagesArr = (totalPages) => {
    let pagesArray =[];

    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i+1);
    }

    return pagesArray;
}