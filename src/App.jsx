import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './page/layout/layout'
import Index from './page'

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='/' element={<Index />} />
					</Route>
				</Routes>

			</BrowserRouter>
		</>
	)
}
