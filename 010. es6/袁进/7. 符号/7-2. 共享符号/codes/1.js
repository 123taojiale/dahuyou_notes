Symbol() === Symbol(); // => false
Symbol('dahuyou') === Symbol('dahuyou'); // => false

Symbol.for() === Symbol.for(); // => true
Symbol.for('dahuyou') === Symbol.for('dahuyou'); // => true