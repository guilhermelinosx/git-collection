import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Repo } from '../pages/Repo'

export const Routers = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={Dashboard} path="/" exact />
				<Route component={Repo} path="/repositories/:repository+" />
			</Switch>
		</BrowserRouter>
	)
}
