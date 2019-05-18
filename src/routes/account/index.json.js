import db from '../../db'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
import * as uuid from 'uuid'

const production = process.env.NODE_ENV === 'production'

const cookie = () => ({
	domain: production ? '.securlance.com' : 'localhost',
	secure: production,
	httpOnly: true,
	sameSite: true,
	maxAge: 1000 * 60 * 60 * 24 * 365
})

const privateKey = fs.readFileSync(path.resolve(process.cwd(), 'secret', 'jwt'))

export async function post(req, res) {
	const {email, password} = req.body

	const users = await db('users')
		.where({
			email,
		})

	let token

	if (users.length === 0) {
		// New user
		const hash = await argon2.hash(password)

		const id = uuid.v4()
		
		await db('users').insert({
			id,
			email,
			password: hash,
		})

		token = jwt.sign({ id }, privateKey, { algorithm: 'ES512'})
	} else if (users.length === 1) {
		// Returning user
		const user = users[0]

		if (await argon2.verify(user.password, password)) {
			token = jwt.sign({ id: user.id }, privateKey, { algorithm: 'ES512'})			
		}
		else {
			console.log(`User ${email} failed password login`)
			res.redirect('/account?failed=true')
			return
		}
	} else {
		// Error
		console.error(`There are ${users.length} users with the same email: ${email}`)
		res.redirect('/')
		return
	}

	res.cookie('auth', token, cookie())
	res.redirect('/invoice')
}