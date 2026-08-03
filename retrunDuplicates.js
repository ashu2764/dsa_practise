function returnDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    
    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
}


console.log(returnDuplicates([1, 2, 3, 4, 5, 1, 2, 6])); // Output: [1, 2]