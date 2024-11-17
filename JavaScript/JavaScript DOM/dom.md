<!-- Yahan pe main aapko DOM ki documentation ka ek simple aur structured format de raha hoon jo aap asaani se bacho ko samjha sakte hain:

---

# **Document Object Model (DOM) ki Basic Documentation**

## **1. DOM kya hai?**
   - **DOM** ka matlab hai **Document Object Model**.
   - Yeh ek structure hai jo web page ko tree structure mein organize karta hai.
   - DOM browser ko web page (HTML document) ko access aur modify karne ka tareeqa deta hai.
   - Har HTML element DOM ke andar ek **node** ke roop mein dikhai deta hai. Jaise `<html>`, `<body>`, aur `<p>`.

## **2. DOM ka Tree Structure**
   - DOM ek tree ke tarah structured hota hai, jisme har element ek **node** hota hai.
   - **Root Node**: Tree ka sabse pehla aur upar wala node `<html>` hota hai.
   - Tree ke andar har ek node ke niche aur elements (children) hote hain, aur is tarah har ek part organize hota hai.

   **Example**:

   ```plaintext
   html
   ├── head
   │   └── title
   └── body
       ├── h1
       ├── p
       └── div
           └── p
   ```

## **3. DOM se Web Page ko Access aur Change Karna**
   - **JavaScript** ke zariye hum DOM ke elements ko access aur change kar sakte hain.
   - JavaScript mein DOM ke through kisi element ko access karne ke liye kuch commonly used methods hain:

     - **getElementById**: Yeh method ek unique **id** ke zariye element ko dhoondta hai.
       ```javascript
       document.getElementById('elementId');
       ```

     - **getElementsByClassName**: Yeh method element ko class ke naam se access karta hai.
       ```javascript
       document.getElementsByClassName('className');
       ```

     - **querySelector**: Yeh method kisi bhi CSS selector ke zariye element ko access kar sakta hai.
       ```javascript
       document.querySelector('.className'); // class ke sath
       document.querySelector('#elementId'); // id ke sath
       ```

## **4. Example: DOM ke zariye Element ko Change Karna**
   - Example ke zariye DOM ke concept ko aur asaani se samjha sakte hain.

   **HTML File**:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>DOM Example</title>
   </head>
   <body>
       <h1 id="myHeading">Hello, World!</h1>
       <button onclick="changeText()">Change Text</button>

       <script src="script.js"></script>
   </body>
   </html>
   ```

   **JavaScript File (script.js)**:
   ```javascript
   function changeText() {
       document.getElementById('myHeading').innerText = 'DOM se Text Change Ho Gaya!';
   }
   ```

   - **Explanation**: Jab button pe click hota hai, `changeText()` function run hota hai, jo DOM ko use karke `<h1>` ka text change karta hai.

## **5. Commonly Used DOM Methods**

   1. **document.getElementById('id')**  
      - Specific id se element ko dhoondhne ke liye use hota hai.
      - Example: `document.getElementById('myDiv')`.

   2. **document.getElementsByClassName('className')**  
      - Class name se elements ko access karta hai.
      - Example: `document.getElementsByClassName('myClass')[0]` (first element).

   3. **document.querySelector('CSS selector')**  
      - Kisi bhi CSS selector ke zariye element ko access kar sakta hai.
      - Example: `document.querySelector('.myClass')`.

   4. **element.innerText**  
      - Kisi element ke andar ka text access aur change karne ke liye.
      - Example: `document.getElementById('myDiv').innerText = 'New Text';`.

   5. **element.style.property**  
      - Kisi element ke CSS style ko JavaScript se change karne ke liye.
      - Example: `document.getElementById('myDiv').style.color = 'blue';`.

## **6. DOM ke Interactive Exercise**

   Aap bacho ko in examples se interactive kaam karwa sakte hain:
   - Ek `<p>` ka color button click par change karna.
   - Kisi `<h1>` ke text ko input field ke text ke sath replace karna.

   **Example Exercise**:
   ```html
   <p id="text">Yeh mera paragraph hai.</p>
   <button onclick="changeColor()">Color Change Karo</button>

   <script>
       function changeColor() {
           document.getElementById('text').style.color = 'green';
       }
   </script>
   ```

---

Is documentation ke zariye bache DOM ke concept ko step-by-step samajh sakte hain aur saath hi interactive examples ki madad se apni learning ko apply bhi kar sakte hain. -->