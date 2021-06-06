
function greeting(name, role){
    console.log(`Hello, my name is ${name}`);
    console.log(`I'm a ${role}`);
  }
  
  setTimeout(greeting, 2000, "Nathan", "Software developer");
  const timeoutId = setTimeout(function(){
    console.log("Hello World");
}, 2000);

clearTimeout(timeoutId);
console.log(`Timeout ID ${timeoutId} has been cleared`);
