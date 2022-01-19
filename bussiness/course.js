import { levelFilter } from "../constant";
export function getListTag(listTag) {
    const result = [];
    listTag.forEach(item =>
        result.push(item.title))
    return result;
}

const levelFilter = [
    { value: 'BEGINNER', label: 'Beginner', id: 1 },
    { value: 'UPPER_BEGINNER', label: 'Upper beginner', id: 2 },
    { value: 'PRE_INTERMEDIATE', label: 'Pre intermediate', id: 3 },
    { value: 'INTERMEDIATE', label: 'Intermediate', id: 4 },
    { value: 'UPPER_INTERMEDIATE', label: 'Upper intermediate', id: 5 },
    { value: 'PRE-ADVANCED', label: 'Pre advanced', id: 6 },
    { value: 'ADVANCED', label: 'Advanced', id: 7 },
    { value: 'VERY-ADVANCED', label: 'Very advanced', id: 8 },
];
export function getLevelTitle(id) {
    if (id == 0)
        return 'Any Level'
    const result = levelFilter.find(item => item.id == id);
    if (result != undefined)
        return result.label;
    return 'Any Level'
}