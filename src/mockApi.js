
export function generateRandomId() {
// Generate a random 6-character alphanumeric ID
    return Math.random().toString(36).substr(2, 6);
}
function generateRandomBoolean() {
// Generate a random boolean value (true or false)
    return Math.random() < 0.5;
}
export function convertToMap(array) {
    const treeData = new Map();
    console.log(treeData)
    for (const arrayElement of array) {
        console.log(arrayElement)
        treeData.set(arrayElement.id, {...arrayElement});
    }
    return treeData

}
export  function convertToObject(array) {

    const object = array.reduce((acc, obj) => {
        acc[obj.id] = obj;
        return acc;
    }, {});
    return object;
}
export function generateNodes() {
    const nodes = [];
    const numElements = Math.floor(Math.random() * 4) + 2;
    for (let i = 0; i < numElements; i++) {
        const id = generateRandomId()
        const node = {
            id,
            name: `Account ${id}`,
            has_children: generateRandomBoolean()
        };
        nodes.push(node);
    }
    return nodes;
}
export function generateChildNodes() {
    const nodes = [];
    const numElements = Math.floor(Math.random() * 4) + 2;
    for (let i = 0; i < numElements; i++) {
        const id = generateRandomId()
        const node = {
            id,
            name: `Account ${id}`,
            has_children: false,
            isChild: true
        };
        nodes.push(node);
    }
    return nodes;
}
// Usage
//const baseName = "Element";
export const result = generateNodes();
console.log(result);
