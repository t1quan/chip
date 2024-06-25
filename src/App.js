import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./components/Routes";
import DefaultLayout from "./components/layouts/DefaultLayout";

function App() {
	return (
		<Router>
			<Routes>
				{routes.map((route, index) => {
					const Page = route.component;
					const Layout = DefaultLayout;
					return <Route
						key={index}
						path={route.path}
						element={<Layout>
							<Page />
						</Layout>} />
				})}
			</Routes>
		</Router>
	);
}

export default App;
