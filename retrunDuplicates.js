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

function returnDuplicates(arr) {
    let duplicates = [];

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Look ahead at the remaining elements
        for (let j = i + 1; j < arr.length; j++) {
            
            // If a match is found, it is a duplicate
            if (arr[i] === arr[j]) {
                
                // Check if we already added this duplicate to our results
                let alreadyAdded = false;
                for (let k = 0; k < duplicates.length; k++) {
                    if (duplicates[k] === arr[i]) {
                        alreadyAdded = true;
                        break;
                    }
                }
                
                // Only add it if it is not already in the duplicates array
                if (!alreadyAdded) {
                    duplicates[duplicates.length] = arr[i]; // Manually pushes to array
                }
            }
        }
    }

    return duplicates;
}

console.log(returnDuplicates([1, 2, 3, 4, 5, 1, 2, 6])); // Output: [1, 2]
