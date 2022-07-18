import { createGlobalStyle } from 'styled-components'
import background from '../assets/background.svg'

export const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html{
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}

	}

	body{
		background: #f0f0f5 url(${background}) no-repeat 70% top;
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, select, button{
		font: 400 1rem "Roboto", sans-serif
	}

	#root{
		max-width: 960px;
		margin: 0 auto;
		padding: 2.5rem 1.25rem;
	}

	button{
		cursor: pointer
	}

	a{
		color: inherit;
		text-decoration: none;
	}






`
