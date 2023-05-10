import Link from "next/link"
export default function Header(props) {
    return (
            <div className="header">
                {props.titulo}
                <Link href = "/">Voltar</Link>
            </div>
       
    )
}