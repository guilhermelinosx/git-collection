import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Dashboard = React.lazy(
	() =>
		import(
			/* webpackPrefetch: true*/
			/* webpackChunkName: "dashboard"*/ '../pages/Dashboard'
		),
)
const Repo = React.lazy(
	() =>
		import(
			/* webpackPrefetch: true*/
			/* webpackChunkName: "repo"*/ '../pages/Repo'
		),
)

export const Routers = () => {
	return (
		<BrowserRouter>
			<React.Suspense fallback={'Loading...'}>
				<Switch>
					<Route component={Dashboard} path="/" exact />
					<Route component={Repo} path="/repositories/:repository+" />
				</Switch>
			</React.Suspense>
		</BrowserRouter>
	)
}
