type CounterPropsType = {
    value: number
    className: string
}

export const Counter = (props: CounterPropsType) => {
    return (
        <h1 className={props.className}>{props.value}</h1>
    )
}