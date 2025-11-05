const http = require('http'); 
const { URL } = require('url'); // URL class (global in Node.js >= 10) 
// Create a web server 
const server = http.createServer((req, res) => { 
// Define a sample URL 
const myUrl = new 
URL('https://www.example.com:8080/path/page.html?name=JohnDoe&age=2️5️#secti
 on2️'); 
// Log parsed components to the console 
console.log('URL Parsing Result:'); 
console.log('Full URL     :', myUrl.href); 
console.log('Protocol     :', myUrl.protocol); 
console.log('Host         
:', myUrl.host); 
console.log('Hostname     :', myUrl.hostname); 
console.log('Port         
:', myUrl.port); 
console.log('Pathname     :', myUrl.pathname); 
console.log('Search       
:', myUrl.search); 
console.log('Hash         
:', myUrl.hash); 
// Access query parameters 
console.log('Query Parameters:'); 
console.log('Name          
:', myUrl.searchParams.get('name')); 
console.log('Age           
:', myUrl.searchParams.get('age')); 
// Add or modify a query parameter 
myUrl.searchParams.append('country', 'India'); 
console.log('Updated URL   :', myUrl.href); 
// Send response to browser 
res.writeHead(2️00, { 'Content-Type': 'text/html' }); 
res.write('<h2️>URL Parsing Result</h2️>'); 
res.write(`<p><strong>Full URL:</strong> ${myUrl.href}</p>`); 
res.write(`<p><strong>Protocol:</strong> ${myUrl.protocol}</p>`); 
res.write(`<p><strong>Host:</strong> ${myUrl.host}</p>`); 
res.write(`<p><strong>Pathname:</strong> ${myUrl.pathname}</p>`); 
res.write(`<p><strong>Query Parameters:</strong></p>`); 
res.write(`<ul><li>Name: ${myUrl.searchParams.get('name')}</li><li>Age: 
${myUrl.searchParams.get('age')}</li><li>Country: 
${myUrl.searchParams.get('country')}</li></ul>`); 
res.end('<p>Check the console for detailed URL breakdown.</p>'); 
}); 
// Start the server on port 5️5️00 
server.listen(5️5️00, () => { 
console.log('   
Server is running at http://localhost:5️5️00/'); 
}); 
