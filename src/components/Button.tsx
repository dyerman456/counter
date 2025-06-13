type ButtonPropsType = {
    name: string
    callBack: () => void
    maxValue?: number
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
    )
}