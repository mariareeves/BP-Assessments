
// define base url 
const BASE_URL = 'http://localhost:4000'


// compliment button
const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get(`${BASE_URL}/api/compliment`)
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

complimentBtn.addEventListener('click', getCompliment)


// *------------*---------------*------------------*---------//

// fortune button
const fortuneBtn = document.getElementById('fortuneBtn')

const getRandomFortune = () => {
    axios.get(`${BASE_URL}/api/fortune`)
        .then(res => {
            const data = res.data
            alert(data)
        })
        .catch(err => console.log(err))
}

fortuneBtn.addEventListener('click', getRandomFortune)


// *------------*---------------*------------------*---------//

// inspirational quote 
const inspirationalSelect = document.getElementById('quotes')
const quoteBtn = document.getElementById('quoteBtn')
const displayQuotes = document.getElementById('quoteDisplay')

// get the value of select 'category' 
const quotesCategory = () => {
    const selectedCategory = inspirationalSelect.value
    // console.log('quotesCategory function main js', selectedCategory)
    getQuotes(selectedCategory)
}

// getting the category to send to the back end 
const getQuotes = (category) => {
    // console.log('i am the in the getQuotes function in main.js', category)
    axios.get(`${BASE_URL}/api/quotes?category=${category}`)
        .then(res => {
            const quote = res.data
            displayQuote(quote)
        })
        .catch(err => console.log(err))
}

const displayQuote = (quote) => {
    //clear the previous quote
    displayQuotes.innerHTML = ''
    const h3 = document.createElement('h3')
    h3.textContent = quote
    displayQuotes.appendChild(h3)
}

quoteBtn.addEventListener('click', quotesCategory)

// *------------*---------------*------------------*---------//

// goals form 
const goalsInput = document.getElementById('goalsInput')
const submitInput = document.getElementById('submitInput')
const goalsForm = document.getElementById('goals-form')
const displayGoals = document.querySelector('#displayGoals')

// display all the goals 
const getGoals = () => {
    axios.get(`${BASE_URL}/api/goals`)
        .then((res) => {
            console.log(res.data)
            createGoalList(res.data)
        })
        .catch(err => console.log(err))
}


// delete goal
const deleteGoal = (id) => {
    axios.delete(`${BASE_URL}/api/goals/${id}`)
        .then((res) => createGoalList(res.data))
        .catch(err => console.log(err))
}


// create a list to display the goal
const createGoalList = (goalsArr) => {
    displayGoals.innerHTML = '';
    const innerDiv = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = 'These are your goals';
    title.classList.add('block', 'text-xl', 'ont-semibold', 'mb-2', 'dark:text-yellow-400', 'py-4')
    innerDiv.appendChild(title);

    goalsArr.map((goal) => {
        const ul = document.createElement('ul')
        const listItem = document.createElement('li');
        listItem.classList.add('text-xl', 'ont-semibold', 'mb-2', 'dark:text-sky-400', 'py-4', 'text-sm')
        ul.appendChild(listItem)

        listItem.textContent = goal.goalName
        ul.appendChild(listItem)


        //add delete btn to the goal list
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteGoal(goal.goalId));
        deleteBtn.classList.add('bg-transparent', 'hover:bg-yellow-500', 'text-green-600', 'font-semibold', 'hover:text-white', 'py-2', 'mr-2', 'px-4', 'border', 'border-green-600', 'hover:border-transparent', 'rounded');
        ul.appendChild(deleteBtn);

        //add edit bttn to the goal list
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editGoal(goal.goalId, listItem));
        editBtn.classList.add('bg-transparent', 'hover:bg-yellow-500', 'text-green-600', 'font-semibold', 'hover:text-white', 'py-2', 'px-4', 'border', 'border-green-600', 'hover:border-transparent', 'rounded');
        ul.appendChild(editBtn);

        innerDiv.appendChild(ul);
    });

    displayGoals.append(innerDiv);
};

// edit a goal
const editGoal = (goalId, listItem) => {
    const goalName = listItem.textContent;

    //empty the input field
    listItem.textContent = '';

    const inputField = document.createElement('input');
    inputField.classList.add('bg-green-50', 'border', 'border-green-500', 'text-green-900', 'dark:text-green-400', 'placeholder-green-700', 'dark:placeholder-green-500', 'text-sm', 'rounded-lg', 'focus:ring-green-500', 'focus:border-green-500', 'p-2.5', 'mr-2', 'dark:bg-white', 'dark:border-green-500');
    inputField.setAttribute('type', 'text');
    inputField.setAttribute('name', 'goals');
    inputField.setAttribute('id', 'goalsInput');
    inputField.setAttribute('placeholder', 'Type here');
    inputField.value = goalName;

    // create a save btn 
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.classList.add('save-button')
    saveBtn.classList.add('bg-transparent', 'hover:bg-yellow-500', 'text-yellow-400', 'font-semibold', 'hover:text-white', 'py-2', 'mr-2', 'px-4', 'border', 'border-yellow-400', 'hover:border-transparent', 'rounded');
    saveBtn.addEventListener('click', () => saveGoal(goalId, inputField.value, listItem));

    //create a cancel btn
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('bg-transparent', 'hover:bg-yellow-500', 'text-red-600', 'font-semibold', 'hover:text-white', 'py-2', 'px-4', 'border', 'border-red-600', 'hover:border-transparent', 'rounded');
    cancelBtn.addEventListener('click', () => cancelGoal(goalName, listItem));

    //add the new input and buttons to the list item
    listItem.appendChild(inputField);
    listItem.appendChild(saveBtn);
    listItem.appendChild(cancelBtn);

};

// save a goal
const saveGoal = (goalId, newGoalName, listItem) => {
    axios
        .put(`${BASE_URL}/api/goals/${goalId}?newGoal=${newGoalName}`)
        .then((res) => {
            listItem.textContent = newGoalName;
        })
        .catch((err) => console.log(err));
};

// cancel editting 
const cancelGoal = (originalGoalName, listItem) => {
    listItem.textContent = originalGoalName;
};

// update the goal
const updateGoal = (id, goalName) => {
    goalsInput.textContent = ''
    axios.put(`${BASE_URL}/api/goals/${id.value}?newGoal=${goalName.value}`)
        .then((res) => createGoalList(res.data))
        .catch(err => console.log(err))
}

// add a new goal 
const addGoal = (evt) => {
    evt.preventDefault()
    const newGoal = {
        goalName: goalsInput.value
    }
    axios.post(`${BASE_URL}/api/goals`, newGoal)
        .then(res => {
            createGoalList(res.data)
        }).catch(err => console.log(err))
    goalsInput.value = ``
}


// new goal submission 
goalsForm.addEventListener('submit', addGoal)
document.addEventListener('DOMContentLoaded', getGoals)





