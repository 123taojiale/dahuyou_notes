module.exports = function (sourceCode) {
    const result = `const style = document.createElement('style');
    style.innerHTML = \`${sourceCode}\`;
    document.head.appendChild(style);
    module.exports = \`${sourceCode}\`;`;
    return result;
}