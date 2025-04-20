import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    return (
        <>
            <div className="card">
                <div className="title">Counter</div>
                <div className="counter-number">{count}</div>
                <div className="btn-group">
                    <button className="btn btn-secondary" onClick={decrease}>−</button>
                    <button className="btn" onClick={increase}>+</button>
                </div>
            </div>
        </>
    );
}

export default App;