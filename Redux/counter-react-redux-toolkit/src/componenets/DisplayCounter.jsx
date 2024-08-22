
import { useDispatch, useSelector } from 'react-redux'

import { useRef, useState } from 'react';
import { counterActions, privacyActions } from '../store/indeex';

export default function DisplayCounter() {
    const refInput = useRef(null);
    const { counter } = useSelector(store => store.counter)
    const dispatch = useDispatch();

    const {privacy} = useSelector(store => store.privacy)

    const handleIncrement = () => {
        dispatch(counterActions.increment());
    }
    const handleDecrement = () => {
        dispatch(counterActions.decrement());
    }

    const handleAddtion = () => {
        const currVal = parseInt(refInput.current.value);
        if (currVal) {
            dispatch(counterActions.addition({ number: currVal, }));
            refInput.current.value = "";
        }

    }

    const handlePrivacyToggle = () => {
        dispatch(privacyActions.privacy());
    }


    return (
        <main className="flex flex-col items-center justify-center h-[85vh]">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex-col justify-center items-center">
                {!privacy && <h2 className="text-2xl font-semibold mb-4">Counter: {counter}</h2>}

                <div className="flex items-center justify-evenly gap-5 mb-3">
                    <div className='flex gap-3'>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-lg"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>

                    <div>
                        <button onClick={handlePrivacyToggle} className=' border p-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white'>Privacy</button>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <input
                        type="number"
                        ref={refInput}
                        className="border-2 border-gray-300 rounded-lg px-4 py-2"
                        placeholder="Enter a number"
                    />
                    <button onClick={handleAddtion} className=' border p-2 rounded-md hover:bg-blue-700 bg-blue-500 text-white'>Add</button>
                </div>
            </div>
        </main>
    );
}
