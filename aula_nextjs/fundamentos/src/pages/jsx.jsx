export default function Jsx() {
    const titulo = <h1>Conceito JSX</h1>
    function subtitulo() {
        return (<h3>exemplos JSX:</h3>)
    }
    const a = 4
    const b = 3
    console.log(a * b)
    const obj = {
        nome: "Edson",
        idade: 22
    }
    return (
        <div>
            {titulo}
            { subtitulo() }
            <p>{a * b}</p>
            <h3>{"Maiusculo".toUpperCase()}</h3>
            <p>
                {JSON.stringify(
                    {
                        nome: "Edson",
                        idade: 22
                    })}
            </p>
        </div>
    )
}
