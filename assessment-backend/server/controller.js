const goals = [
    {
        goalId: 1,
        goalName: 'Get a job'
    },
    {
        goalId: 2,
        goalName: 'Finish my portfolio'
    },
    {
        goalId: 3,
        goalName: 'Buy a beach house'
    }
]

let goalId = 4;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getRandomFortune: (req, res) => {
        const fortunes = [
            'A beautiful, smart, and loving person will be coming into your life.',
            'A faithful friend is a strong defense.',
            'A fresh start will put you on your way.',
            'A lifetime of happiness lies ahead of you.',
            'A smile is your personal welcome mat.',
            'All your hard work will soon pay off.',
            'Believe it can be done.',
            'Bide your time, for success is near.'
        ]

        // random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },
    getQuotes: (req, res) => {
        const category = req.query.category
        // console.log('category inside getQuote controller js ', category)
        const quotes = [
            {
                category: 'motivation',
                phrases: ["Don't watch the clock; do what it does. Keep going. - Sam Levenson",
                    "Believe you can, and you're halfway there. - Theodore Roosevelt", "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
                    "The only way to do great work is to love what you do. - Steve Jobs",
                    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"]
            },
            {
                category: 'success',
                phrases: ["Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
                    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
                    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
                    "Success is not in what you have, but who you are. - Bo Bennett",
                    "The secret of success is to know something nobody else knows.- Aristotle Onassis"]
            },
            {
                category: 'happiness',
                phrases: ["The happiest people don't have the best of everything, they make the best of everything. - Roy T. Bennett",
                    "Happiness is not something ready-made. It comes from your own actions - Dalai Lama",
                    "The purpose of our lives is to be happy.- Dalai Lama",
                    "Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy.- Ralph Marston",
                    "The happiness of your life depends upon the quality of your thoughts.- Marcus Aurelius"]
            }

        ]

        const getRandomPhrase = (category) => {
            const categoryQuote = quotes.find(quote => quote.category === category)
            if (categoryQuote) {
                let randomIndex = Math.floor(Math.random() * categoryQuote.phrases.length)
                let randomPhrase = categoryQuote.phrases[randomIndex]
                // console.log('inside getRandomPhrase function ', randomPhrase)
                return randomPhrase
            } else {
                return 'Category not found'
            }

        }
        const randomQuote = getRandomPhrase(category);
        // console.log('random phrase controllerjs ', randomQuote);
        res.status(200).send(randomQuote)
    },
    // add a new goal 
    addGoals: (req, res) => {
        const { goalName } = req.body
        console.log(goalName)
        const newGoal = {
            goalId,
            goalName
        }
        goals.push(newGoal)
        res.status(200).send(goals)
        goalId++
    },
    //display all the goals
    getGoals: (req, res) => {
        res.status(200).send(goals)
    },
    //delete goals
    deleteGoal: (req, res) => {
        const { id } = req.params

        //use the id to locate the resource/object
        const index = goals.findIndex((goal) => goal.goalId === +id)
        if (index === -1) { //if index is not found it'll return -1
            res.status(400).send('goal not found')
            return
        }
        // delete the object
        goals.splice(index, 1)
        res.status(200).send(goals)
    },
    updateGoal: (req, res) => {
        const { id } = req.params
        const { newGoal } = req.query
        //use id to locate the object
        const index = goals.findIndex((goal) => goal.goalId === +id)
        if (index === -1) {
            res.status(400).send('goal not found')
            return
        }
        //reassign the object/key-value pairs
        goals[index].goalName = newGoal
        res.status(200).send(goals)
    }

}


