import { useState } from "react";
import viteLogo from "../images/vite.svg";
import reactLogo from "../images/react.svg";
import "../styles/App.scss";

export default function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
				<br /> Scaffolded by <a href="https://shmovahhedi.com">Shahab Movahhedi</a>
			</p>
		</div>
	);
}
