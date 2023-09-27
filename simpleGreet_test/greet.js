let Greet = (name) => {
    if(!name) return `Hello there!`;
    if((typeof name === 'string') && (name === name.toUpperCase())) {return `HELLO ${name}!`};
    if((typeof name === 'string') && name) return `Hello, ${name}`;
    if(Array.isArray(name)) { return `Hello, ${name.join(', ')}`;
    } else {
        return `Hello there!`;
    }
}

module.exports = Greet;