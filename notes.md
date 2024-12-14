# Notes for CS260

While in deployFiles.sh directory:
./deployFiles.sh -k  ~/OneDrive/Documents/BYU/3-2024-Fall/CS260/CS260Key.pem -h projectrp.org -s simon

./deployFiles.sh -k  ~/OneDrive/Documents/BYU/3-2024-Fall/CS260/CS260Key.pem -h projectrp.org -s startup


test from github

Midterm Questions
* In the following code, what does the link element do? 
* In the following code, what does a div tag do?
* In the following code, what is the difference between the #title and .grid selector? **a class selector is a name preceded by a full stop (".") and an ID selector is a name preceded by a hash character ("#"). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one**
* In the following code, what is the difference between padding and margin? **The biggest difference between padding and margin is that vertical margins auto-collapse, and padding doesn't. Consider two elements one above the other each with padding of 1em. This padding is considered to be part of the element and is always preserved.You will end up with the content of the first element, followed by the padding of the first element, followed by the padding of the second, followed by the content of the second element. Thus the content of the two elements will end up being 2em apart.Now replace that padding with 1em margin. Margins are considered to be outside of the element, and margins of adjacent items will overlap.** 
* Given this HTML and this CSS how will the images be displayed using flex?
* What does the following padding CSS do?
* What does the following code using arrow syntax function declaration do? **Without Arrow: hello = function() {return "Hello World!";} || hello = () => {return "Hello World!";} || If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword: hello = () => "Hello World!";**
* What does the following code using map with an array output?
* What does the following code output using getElementByID and addEventListener? **The built-in method addEventListener() allows you to attach an event listener to an HTML element. It accepts two parameters: the event type to listen to and the callback function to run when the event is triggered: Element.addEventListener(type, callbackFn);**
* What does the following line of Javascript do using a # selector?
* Which of the following are true? (mark all that are true about the DOM)
* By default, the HTML span element has a default CSS display property value of: **inline**
* How would you use CSS to change all the div elements to have a background color of red? **div {
  background-color: red;
}**
* How would you display an image with a hyperlink in HTML? **<a href="https://example.com">
  <img src="image.jpg" alt="Image description">
</a>**
* In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
    **Content - The content of the box, where text and images appear
    Padding - Clears an area around the content. The padding is transparent
    Border - A border that goes around the padding and content
    Margin - Clears an area outside the border. The margin is transparent** 
* Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
* What will the following code output when executed using a for loop and console.log?
* How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green? **//Get the element with the ID "byu"
const byuElement = document.getElementById("byu");
// Change the text color to green
byuElement.style.color = "green";**
* What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
* How do you declare the document type to be html? **<!DOCTYPE html>**
* What is valid javascript syntax for if, else, for, while, switch statements?

* If you want to include JavaScript on an HTML page, which tag do you use? **<script src="script.js"></script>**
* Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
* Which of the following correctly describes JSON? **JSON, or JavaScript Object Notation, is a lightweight data-interchange format that's easy for humans to read and write, and easy for machines to parse and generate. It's based on a subset of the JavaScript programming language, but it's language-independent and can be used by any programming language.**
* What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
chmod: Changes the permissions of a file or directory. This determines who can read, write, or execute a file.
pwd: Prints the current working directory.
cd: Changes the current working directory.
ls: Lists files and directories in the current directory.
vim: A powerful text editor often used for programming and system administration.
nano: A simpler text editor often used for quick edits.
mkdir: Creates a new directory.
mv: Moves or renames files and directories.
rm: Removes (deletes) files and directories.
man: Displays the manual pages for a command or system call.
ssh: Secure Shell, used for remote login and secure data transfer.
ps: Displays information about currently running processes.
wget: Downloads files from the internet.
sudo: Allows you to run commands with elevated privileges (superuser).
* Which of the following console command creates a remote shell session? 
* Which of the following is true when the -la parameter is specified for the ls console command? **This command lists all files and directories in the current directory, including hidden files (those starting with a dot). The -l flag provides a long listing format, showing details like permissions, owner, group, size, modification date, and filename. The -a flag includes hidden files in the listing.**
* Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain? **top level domain: click. Root domain:bozo. subdomain:banana.fruit**
* Is a web certificate is necessary to use HTTPS. **yes. SSL/TLS certificate is a digital certificate that authenticates a website's identity and enables an encrypted connection.**
* Can a DNS A record can point to an IP address or another A record. **no**
* Port 443, 80, 22 is reserved for which protocol? **Port 443: HTTPS (Hypertext Transfer Protocol Secure)
Port 80: HTTP (Hypertext Transfer Protocol)
Port 22: SSH (Secure Shell)**
* What will the following code using Promises output when executed?
  





# Final Study Guide
* What is the default port for HTTP/HTTPS/SSH? **SSH = 22, Http = 80, Https = 443**
* What does an HTTP status code in the range of 300/400/500 indicate? **300 = redirection message, 400 = client error response, 500 = server error response**
* What does the HTTP header content-type allow you to do? **The HTTP Content-Type representation header is used to indicate the original media type of a resource before any content encoding is applied. In responses, the Content-Type header informs the client about the media type of the returned data. In requests such as POST or PUT, the client uses the Content-Type header to specify the type of content being sent to the server. If a server implementation or configuration is strict about content type handling, a 415 client error response may be returned.**
* What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do? https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies **1.The user sends sign-in credentials to the server, for example via a form submission. 2.If the credentials are correct, the server updates the UI to indicate that the user is signed in, and responds with a cookie containing a session ID that records their sign-in status on the browser. 3.At a later time, the user moves to a different page on the same site. The browser sends the cookie containing the session ID along with the corresponding request to indicate that it still thinks the user is signed in. 4.The server checks the session ID and, if it is still valid, sends the user a personalized version of the new page. If it is not valid, the session ID is deleted and the user is shown a generic version of the page (or perhaps shown an "access denied" message and asked to sign in again).**
* Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?
* Given the following Express service code: What does the following front end JavaScript that performs a fetch return?
* Given the following MongoDB query, select all of the matching documents {name:Mark}
* How should user passwords be stored? **Hashed**
* Assuming the following node.js websocket code in the back end, and the following front end websocket code, what will the front end log to the console?
* What is the websocket protocol intended to provide? **Realtime updates. WebSocket is a bidirectional communication protocol that can send the data from the client to the server or from the server to the client by reusing the established connection channel**
* What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
* Assuming an HTML document with a body element. What text content will the following React component generate?  The react component will use parameters.
* Given a set of React components that include each other, what will be generated
* What does a React component with React.useState do?
* What are React Hooks used for?
* What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do? https://react.dev/reference/react/hooks
* Given React Router code, select statements that are true.
* What does the package.json file do?
* What does the fetch function do?
* What does node.js do?
* What does pm2 do?
* What does Vite do?

