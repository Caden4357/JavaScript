import React, {useState} from 'react';

const Count = (props) => {
    const [todo, setTodo] = useState(
        [
            {
                todo: "Learn React",
                isCompleted: false
            },
            {
                todo: "Move out",
                isCompleted: true
            }
        ]
    )

    return (
        <div>
            {
                todo?
                todo.map((t, idx)=> {
                    return (
                        <div>
                            
                            <h2>{t.todo}</h2>
                            {
                                t.isCompleted ?
                                <p>You've completed this task!!</p>:
                                <p>You have not completed this task</p>
                            }
                        </div>
                    )

                })
                :
                ''
            }
        </div>
)}

export default Count;