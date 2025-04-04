import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
    databaseURL: process.env.DATABASE_URL
};

const app = initializeApp(firebaseConfig);
const getDatabase = getDatabase(app);

console.log(firebaseConfig.databaseURL);

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
})

inputBtn.addEventListener("click", function() {
    console.log(inputEl.value)
    inputEl.value = ""
    render(myLeads)
})