const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

const users = [
	{ id: 1, firstName: "John", lastName: "Doe", role: "admin" },
	{ id: 2, firstName: "Jane", lastName: "Smith", role: "user" },
	{ id: 3, firstName: "Alice", lastName: "Johnson", role: "moderator" },
	{ id: 4, firstName: "Bob", lastName: "Brown", role: "user" },
	{ id: 5, firstName: "Charlie", lastName: "Davis", role: "admin" },
]

console.log(users);




// envoyer les utilisateurs en réponse
app.get("/", (req, res) => {
	res.json(users)
})

// créer un nouvel utilisateur
app.post("/", (req, res) => {
	const { firstName, lastName, role } = req.body

	const newUser = {
		firstName,
		lastName,
		role,
	}

	res.json(newUser)
})

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`)
})
