import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Repo } from '../pages/Repo'

export const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/repositories" element={<Repo />} />
			</Routes>
		</BrowserRouter>
	)
}
