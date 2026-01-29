

# Frontend Developer - Technical Test Passenger Information List -- Jack Fuhrer 

Hi William &  Aleksandar , 

I've successfully implemented all the minimum expectations from the guide and tried to include some bonus features, aiming for a realistic delivery within the deadline while working on this in-between my current full time job. I truly enjoyed building this and appreciate the opportunity to get this far!

I made a conscious effort to focus on core React/TypeScript implementation and logic, rather than relying on external libraries like CSS frameworks or AI code generation. This allowed me to demonstrate my foundational understanding. 

### Stack - React / Typescript 

I have created this project using npm create-vite@latest .. 

<img width="199" height="232" alt="image" src="https://github.com/user-attachments/assets/f50d9180-5b3a-40f8-993e-76096f8a23fd" />


## How to run the project 
1. Clone this repo
   
   i.```git clone <https://github.com/Joalck454/2eSystems.git>```
   
   ii. ```cd to <dir>```
   
 3. ```npm install```
 4. ```npm run dev```
    
**Once running the application should be running at  http://localhost:5173**

## What did I implement
<img width="1407" height="713" alt="image" src="https://github.com/user-attachments/assets/f576a212-4ef8-429e-ab79-f49a3d4e291b" />

*   **Passenger List View (Card Style):** Displays a scannable list of passengers with their name, type, seat, and date of birth (if available).
*   **"Attention Required" Indicator:** Each passenger card includes a clear visual indicator if they require attention (e.g., missing/expired document, special assistance, notes, meal preference, unassigned seat).
*   **Passenger Details Panel:** Clicking any passenger card displays a comprehensive details panel on the right, showing all available information for that passenger (document data, special assistance, meal preferences, notes, and 'travellingWith' status), with handling of empty or missing fields.
*   **Flight Information Header:** Key flight details are  displayed at the top of the application. (Bonus) 
*   **Selected Card Highlight:** The currently selected passenger card in the list is visually highlighted for clear user feedback.
*   **Basic Mobile Support**: Enabled some accessibility options for mobile support (<768px)
*   **Modularity -** I created a validCheck.ts file, this was lastly made as I had two functions within the component files [ isDocumentExpired ] [ extra ] functions. 

## What did I not implement
- I unfortunately was unable to finalise any of the Bonus tasks. I had prioritised ensuring all core aspects were achieved and working properly, then if time was okay I'd of expanded to the bonus tasks.  
- Implementing a search bar (to filter by name) and potentially a toggle for "Show only passengers needing attention"  (I begun this but ran out of time)
- Unit tests such as Jest for automated testing 

## What I would Improve  
*   **Styling -** I initially avoided frameworks to demonstrate raw CSS skills, but in hindsight I should have utilised them to better my time efficiency for this project as I did spend unforeseen time towards the end trying to layout the webpage. 
*   **Modularity -** I was begining to implement a search function, to reduce issues I created it first within App.tsx file instead of starting it off in a seperate component. 
*   **More Optional Bonus' -** I focused too much on achieving properly the core aspects (MVP) and didn't allow myself to think of how to prepare more of the Bonus Tasks.  
*   **For Production environments: A Simple API -** I understand that importing directly of .json files would be replaced by async data fetching. I saw this was a Bonus feature but decided focus on the essentials.  


Due to realisitic time constraints (expectation of time was 6ish hours). I aimed to be realistic in what I knew, and what I think I could implement. 
I think, similairly to what was said in the interview is that scoping the task and breaking everything down to its core elements are the most important before starting. 



