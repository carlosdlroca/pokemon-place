export const flattenArray = (arrayToFlatten, keysToExtract) => {
    return arrayToFlatten.map(objectToFlatten =>
        flattenObject(objectToFlatten, keysToExtract)
    );
};

export const flattenObject = (objectToFlatten, keysToExtract) => {
    let flattedObj = {};
    keysToExtract.forEach(key => {
        if (typeof key == "string" && key in objectToFlatten) {
            flattedObj[key] = objectToFlatten[key];
        } else {
            const deepObject = key;
            const deepKey = Object.keys(deepObject)[0];
            const deepKeysToExtract = deepObject[deepKey];
            if (objectToFlatten[deepKey] instanceof Array) {
                flattedObj[deepKey] = flattenArray(
                    objectToFlatten[deepKey],
                    deepKeysToExtract
                );
            } else {
                flattedObj = {
                    ...flattedObj,
                    ...flattenObject(
                        objectToFlatten[deepKey],
                        deepKeysToExtract
                    )
                };
            }
        }
    });
    return flattedObj;
};
