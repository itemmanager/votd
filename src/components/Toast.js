import React, {useContext, useEffect, useState} from "react"
import styled from "styled-components"
import {randomId} from "../tools";

const ToastContext = React.createContext();

const ToastsContainer = styled.div`
  //top-center
  top: 1em;
  left: 50%;
  transform: translateX(-50%);
  
  z-index: 9999;
  position: fixed;
  padding: 4px;
  width: 320px;
`;

const StyledToast = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 0.5em;
  border-radius: 4px;
  background: #f5f5f5;
  color: black;

  &.toast-type__info {
    box-shadow: rgb(190, 190, 190) 2px 2px 15px, rgb(190,190,190) -2px -2px 15px;
  }

  &.toast-type__success {
    box-shadow: rgb(96, 200, 148) 2px 2px 15px, rgb(96, 200, 148) -2px -2px 15px;
  }

  &.toast-type__error {
    box-shadow: rgb(175, 43, 43) 2px 2px 15px, rgb(175, 43, 43) -2px -2px 15px;
  }


  .toast-body {
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding: 0.5em;
    align-items: center;
  }

  .toast-close-button {
    cursor: pointer;
    background: #f5f5f5;
    color: #0F1D17;
    opacity: .3;
    outline: none;
    border: none;
    align-self: flex-start;

    &:hover {
      opacity: 1;
    }
  }
`;

function Toast({message, type, onClose, timeout}) {
    useEffect(() => {
        setTimeout(onClose, timeout)
    })
    return (
        <StyledToast className={`toast-type__${type}`}>
            <div className="toast-body">
                {message}
            </div>
            <button
                onClick={onClose}
                className="toast-close-button"
            >
                x
            </button>
        </StyledToast>
    )
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
        const id = randomId();
        setToasts([...toasts, {message, type, id, remove}])
    }

    return (
        <ToastContext.Provider value={[toasts, emitToasts, remove]} >
            {children}
        </ToastContext.Provider>
    )
}

export function Toasts() {
    const [toasts,,remove] = useContext(ToastContext)
    return (
        <ToastsContainer>
            {toasts.map(({id, message, type}) =>
                <Toast
                    key={id}
                    message={message}
                    type={type}
                    onClose={() => remove(id)}
                />
            )}
        </ToastsContainer>
    )
}

export function useToastEmitter() {
    const [,addToast] = useContext(ToastContext)
    return addToast
}
