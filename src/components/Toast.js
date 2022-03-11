import React, {useContext, useEffect, useState} from "react"
import styled from "styled-components"
import {uuid4} from "../tools";

const ToastContext = React.createContext();

const ToastsContainer = styled.div``
const StyledToast = styled.div``

function Toast({message, type, onClose, timeout}) {
    useEffect(() => {
        setTimeout(onClose, timeout)
    })
    return <StyledToast className={type}>{message} {type} <button onClick={onClose}>x</button></StyledToast>
}
Toast.defaultProps = {
    timeout: 3000,
    onClose: () => {}
}

export function ToastContextProvider({children}) {
    const [toasts, setToasts] = useState([])

    const remove = (id) => {
        setToasts(toasts.filter(toast => toast.id !==id))
    }

    function emitToasts(message, type) {
        const id = uuid4();
        setToasts([...toasts, {message, type, id, remove}])
    }

    return <ToastContext.Provider value={[toasts, emitToasts, remove]} >
        {children}
    </ToastContext.Provider>
}

export function Toasts() {
    const [toasts,,remove] = useContext(ToastContext)
    return <ToastsContainer>
        {toasts.map(({id, message, type}) => <Toast key={id} message={message} type={type} onClose={() => remove(id)} />)}
    </ToastsContainer>
}

export function useToastEmitter() {
    const [,addToast] = useContext(ToastContext)

    function emitToast(message, type) {
        addToast("toast:", message, "type:", type)
    }
    return emitToast
}
