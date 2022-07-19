import React from 'react'
import { Title, Form, Repos, Error } from './styles'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import logo from '../../assets/logo.svg'

interface GithubRepository {
	full_name: string
	description: string
	owner: {
		login: string
		avatar_url: string
	}
}

export const Dashboard = () => {
	const [repos, setRepos] = React.useState<GithubRepository[]>(() => {
		const storageRepos = localStorage.getItem('@GitCollection:repositories')
		if (storageRepos) {
			return JSON.parse(storageRepos)
		}
		return []
	})
	const [newRepo, setNewRepo] = React.useState('')
	const [inputError, setInputError] = React.useState('')

	React.useEffect(() => {
		localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos))
	}, [repos])

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setNewRepo(event.target.value)
	}

	async function handleAddRepo(
		event: React.FormEvent<HTMLFormElement>,
	): Promise<void> {
		event.preventDefault()

		if (!newRepo) {
			setInputError('Informe o username/repositório')
			return
		}

		const response = await api.get<GithubRepository>(`repos/${newRepo}`)
		const repository = response.data

		setRepos([...repos, repository])
		setNewRepo('')
	}

	return (
		<>
			<img src={logo} alt="Logo GitCollection" />
			<Title>
				Catálogo de <br />
				repositórios do <br />
				GitHub
			</Title>
			<Form hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
				<input placeholder="username/repository" onChange={handleInputChange} />
				<button type="submit">Buscar</button>
			</Form>

			{inputError && <Error>{inputError}</Error>}

			<Repos>
				{repos.map(repository => (
					<Link
						to={`repositories/${repository.full_name}`}
						key={repository.full_name}
					>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>
						<FiChevronRight size={20} />
					</Link>
				))}
			</Repos>
		</>
	)
}
