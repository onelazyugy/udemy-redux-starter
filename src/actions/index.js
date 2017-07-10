export function selectBook(book) {
    //debugger;
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}