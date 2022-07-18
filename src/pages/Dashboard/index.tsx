import React from 'react'
import { Title, Form, Repos } from './styles'
import { FiChevronRight } from 'react-icons/fi'
import logo from '../../assets/logo.svg'

export const Dashboard = () => {
	return (
		<>
			<img src={logo} alt="Logo GitCollection" />
			<Title>
				Catálogo de <br />
				repositórios do <br />
				GitHub
			</Title>
			<Form>
				<input placeholder="username/repository" />
				<button type="submit">Buscar</button>
			</Form>

			<Repos>
				<a href="/repositories">
					<img
						src="https://avatars.githubusercontent.com/u/89226904?v=4"
						alt="Repositório"
					/>
					<div>
						<strong>guilhermelinosx/apisales</strong>
						<p>Repositório do mini curso gratuito</p>
					</div>
					<FiChevronRight size={20} />
				</a>
			</Repos>
		</>
	)
}
