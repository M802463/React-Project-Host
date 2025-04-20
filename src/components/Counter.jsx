import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const showalert = () => {
        if (prevCount == 0) {
            return 0
        } else if(prevCount < 0) {
            alert("don't click again and again value not decrease much more")
        }
    } 

    const decrease = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : showalert));
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