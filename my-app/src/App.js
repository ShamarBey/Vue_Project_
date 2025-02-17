import logo from './logo.svg';
import './App.css';

function App() {
	const attr = 'block';
	const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;
	
	return <div id={attr}>
		text
		{li1}
		{li2}
		{li3}
	</div>;
}

export default App;
