

type OperationFn = (left: number, right: number) => number;

type Operator = "+" | "-" | "*" | "/" | "**";

const operations: Record<Operator, OperationFn> = {
    '+': (left, right) => left + right,
    '-': (left, right) => left - right,
    '*': (left, right) => left * right,
    '/': (left, right) => left / right,
    '**': (left, right) => left ** right,
}


type CalcProps = {
    left?: number;
    operator?: Operator;
    right?: number;
}

function Calc({ left = 0, operator = "*", right = 0 }: CalcProps) {
    const result = operations[operator](left, right)
    return (
        <div>
            <code style={{ fontSize: "2rem" }}>
                {left} {operator} {right} = <output>{result}</output>
            </code>
        </div>
    )
}

const Calculator = () => {
    return <>
        <h2>Calculator</h2>
        <Calc left={1} right={2} />
        <Calc operator="-" />
        <Calc left={1} operator="*" right={2} />
        <Calc left={1} operator="/" right={2} />
        <Calc left={1} operator="**" right={2} />
    </>
};

export default Calculator;
