// Example object
const spec = {
    small: { width: 200, height: 150 },
    medium: { width: 400, height: 300 },
    large: { width: 800, height: 600 }
};

// Example variable determining which scale to check
const scale = 'medium';

// Conditional statement
if (spec[scale]) {
    console.log(`Size for ${scale}:`, spec[scale]);
    // This will log: Size for medium: { width: 400, height: 300 }
} else {
    console.log(`${scale} not found in spec.`);
}
