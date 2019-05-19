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
	sameSite: production,
	maxAge: 1000 * 60 * 60 * 24 * 365
})

const privateKey = fs.readFileSync(path.resolve(process.cwd(), 'secret', 'jwt'))
const publicKey = fs.readFileSync(path.resolve(process.cwd(), 'secret', 'jwt.pub'))

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

		token = jwt.sign({ id, email }, privateKey, { algorithm: 'ES512'})
	} else if (users.length === 1) {
		// Returning user
		const user = users[0]

		if (await argon2.verify(user.password, password)) {
			token = jwt.sign({ id: user.id, email, }, privateKey, { algorithm: 'ES512'})
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

export async function get(req, res) {
	const token = req.cookies.auth || req.signedCookies.auth

	if (token) {
		jwt.verify(token, publicKey, { algorithms: ['ES512'] }, (err, decoded) => {
			if (err) {
				console.error(err)
				res.json({
					id: null,
					loggedIn: false,
					email: '',
					password: '',
				})
			} else if (decoded) {
				res.json({
					id: decoded.id,
					loggedIn: true,
					email: decoded.email,
					password: '',
				})
			}
		})
	}
	else {
		res.json({
			id: null,
			loggedIn: false,
			email: '',
			password: '',
		})
	}
}

export async function del(req, res) {
	// password reset
}
