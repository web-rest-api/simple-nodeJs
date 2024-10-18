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

// GET get all users
app.get("/", (req, res) => {
	res.json(users)
})

// POST create a new user
app.post("/", (req, res) => {
	const { firstName, lastName } = req.body

	const newUser = {
		firstName,
		lastName,
	}

	// trouve le dernier utilisateur
	const lastUser = users[users.length - 1]
	const newId = lastUser.id + 1
	newUser.id = newId

	// ajouter utilisateur
	users.push(newUser)
	// envoie reponse 201 et le nouvou utilisateur
	res.status(201).json(newUser)
})

// PUT update user according to the id sent int the parms
app.put("/:id", (req, res) => {
	const id = parseInt(req.params.id)

	// trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)

	// utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })

	// si el est trouvé, nous vérifions quelles valeurs ont été envoyées
	const { firstName, lastName } = req.body

	if (firstName) users[userIndex].firstName = firstName
	if (lastName) users[userIndex].lastName = lastName

	res.json({
		msg: "utilisateur mis à jour",
		user: users[userIndex],
	})
})

// DELETE delete user based on the params
app.delete("/:id", (req, res) => {
	const id = parseInt(req.params.id)

	// trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)

	// utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })

	// si el est trouvé
	users.splice(userIndex, 1)

	res.json({
		msg: "utilisateur suprimée",
	})
})

// GET one user based on the params
app.get("/:id", (req, res) => {
	const id = parseInt(req.params.id)

	// trouve son index, verifier si le userIndex est positive
	const userIndex = users.findIndex((user) => user.id === id)

	// utilisateur non trouvé
	if (userIndex < 0)
		return res.status(404).json({ msg: "utilisateur non trouvé" })

	// si el est trouvé

	res.json(users[userIndex])
})

app.listen(port, () => {
	console.log(`Serveur en cours d'exécution sur http://localhost:${port}`)
})
