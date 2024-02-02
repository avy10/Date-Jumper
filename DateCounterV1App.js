import { useState, useEffect } from "react";
// import "./styles.css";
// should I make a single Component as all the 3 pieces of UI are connected to each other,
// or create 3 different components?
export default function App() {
	return (
		<div
			className="App"
			style={{ width: "fit-content", margin: "10vh 20vw" }}
		>
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<Steps />
		</div>
	);
}

const groceries = 86400000; //-mallrat
const today = Date.now();
function Steps() {
	const [stepVal, setStepVal] = useState(1);
	function decStepVal() {
		setStepVal((e) => e - 1);
	}
	function incStepVal() {
		setStepVal((e) => e + 1);
	}
	return (
		<>
			<div className="qwerty">
				<button className="btn" onClick={decStepVal}>
					-
				</button>
				<span>
					{stepVal < 2 && stepVal > -2
						? `Step: ${stepVal}`
						: `Steps: ${stepVal}`}
				</span>
				<button className="btn" onClick={incStepVal}>
					+
				</button>
			</div>
			<Counter val={stepVal} />
		</>
	);
}

function Counter(Props) {
	const [countVal, setCountVal] = useState(0);
	const [dateMs, setDate] = useState(today);
	const { val: increment } = Props;

	function decCountVal() {
		setCountVal((e) => e - increment);
	}

	function incCountVal() {
		setCountVal((e) => e + increment);
	}
	console.log("countVal", countVal, "val", increment);
	if (countVal == 0) {
		return (
			<>
				<div className="counterDivva">
					<button className="btn" onClick={decCountVal}>
						-
					</button>
					<span>{`Count: ${countVal}`}</span>
					<button className="btn" onClick={incCountVal}>
						+
					</button>
				</div>
				{/* <DateDisplay counter={countVal} /> */}
				<div className="date">
					<p id="today">{`Today is ${new Date(
						dateMs
					).toDateString()}`}</p>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div className="counterDivva">
					<button className="btn" onClick={decCountVal}>
						-
					</button>
					<span>{`Count: ${countVal}`}</span>
					<button className="btn" onClick={incCountVal}>
						+
					</button>
				</div>
				{/* <DateDisplay counter={countVal} /> */}
				<div className="date">
					<p id="today">{`Today is ${new Date(
						dateMs
					).toDateString()}`}</p>
					<p id="updatedDATE">{`${Math.abs(countVal)} 
        ${countVal < 2 && countVal > -2 ? "day" : "days"}
        ${countVal < 0 ? "ago" : "from"} today is ${new Date(
						dateMs + countVal * groceries
					).toDateString()}`}</p>
				</div>
			</>
		);
	}
}

// function DateDisplay(props) {
//   const [date, setDate] = useState(today);
//   const { counter } = props;

//   useEffect(() => {
//     // This effect will run whenever counter changes
//     const change = groceries * counter;
//     setDate((prevDate) => prevDate + change);
//   }, [counter]);

//   return (
//     <div className="date">
//       <p>{date}</p>
//     </div>
//   );
// }
