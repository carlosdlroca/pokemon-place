export const flattenArray = (arrayToFlatten, keysToExtract) => {
    return arrayToFlatten.map(objectToFlatten =>
        flattenObject(objectToFlatten, keysToExtract)
    );
};

export const flattenObject = (objectToFlatten, keysToExtract) => {
    let flattenedObject = {};
    keysToExtract.forEach(key => {
        if (typeof key == "object") {
            const deepObject = key;
            const deepKey = Object.keys(deepObject)[0];
            const deepKeysToExtract = deepObject[deepKey];
            if (objectToFlatten[deepKey] instanceof Array) {
                flattenedObject[deepKey] = flattenArray(
                    objectToFlatten[deepKey],
                    deepKeysToExtract
                );
            } else {
                flattenedObject = {
                    ...flattenedObject,
                    ...flattenObject(
                        objectToFlatten[deepKey],
                        deepKeysToExtract
                    )
                };
            }
        }
        if (typeof key == "string" && key in objectToFlatten) {
            flattenedObject[key] = objectToFlatten[key];
        } else return;
    });
    return flattenedObject;
};
