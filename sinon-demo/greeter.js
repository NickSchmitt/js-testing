const greet = name => {    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const now  = new Date();
    const formattedDate = now.toLocaleDateString("en-US", options);
    return `Hello, ${name}! Today is ${formattedDate}`;
}
console.log(greet("nick"));
