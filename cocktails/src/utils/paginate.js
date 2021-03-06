import _ from 'lodash';
export function paginate(items, pageNumber, pageSize) {
    const startIndex = pageNumber * pageSize - pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
}
