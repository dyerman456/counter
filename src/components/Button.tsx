type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled: boolean
    className?: string
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler} disabled={props.disabled} className={props.className}>{props.name}</button>
    )
}