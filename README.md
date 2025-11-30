# EspoCRM – Lead "Find Contact" Action

This project adds a new **Find Contact** action to the Lead detail view in EspoCRM.  
The action searches for Contact records that have the same email address as the selected Lead.

## Features
- Adds a **Find Contact** option to the Lead detail dropdown menu.
- Retrieves the email of the current Lead.
- Searches the Contact entity for records with the same email address.
- Displays the results in a modal window.

## File Structure

custom/Espo/Custom/Resources/metadata/clientDefs/Lead.json
client/custom/src/lead-actions.js


## Installation
1. Copy the files into the corresponding EspoCRM directories.  
2. Go to **Administration → Clear Cache**.  
3. Refresh the browser (Ctrl + F5).  


## Time Spent
approximately 3 hours (including setup and first-time Git configuration).


