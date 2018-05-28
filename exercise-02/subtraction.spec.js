// Archivo `subtraction.spec.js`:

const subtraction = require('./subtraction');

console.log('debería devolver la resta de dos números');
if (subtraction(8,5) === 3) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería devolver la resta de dos números incluso si uno es string');
if (subtraction(8,"5") === 3) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}