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
* What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading? **<p><ol><ul><h2><h1><h3>**
* How do you declare the document type to be html? **<!DOCTYPE html>**
* What is valid javascript syntax for if, else, for, while, switch statements?

let age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

let i = 0;
while (i < 3) {
  console.log("While loop iteration:", i);
  i++;
}

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday!");
    break;
  case "Tuesday":
    console.log("It's Tuesday!");
    break;
  default:
    console.log("It's  
 another day.");
}
* What is the correct syntax for creating a javascript object?
  let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};
* Is it possible to add new properties to javascript objects?
  let person = {
  firstName: "John",
  lastName: "Doe"
};

// Adding a new property using dot notation
person.age = 30;

// Adding a new property using bracket notation
person["city"] = "New York";
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
* Is a web certificate is necessary to use HTTPS.
* Can a DNS A record can point to an IP address or another A record.
* Port 443, 80, 22 is reserved for which protocol?
* What will the following code using Promises output when executed?
