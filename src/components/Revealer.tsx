import './Revealer.css'

interface RevealerProps {
    title: string
    color: string
}

export function Revealer({ title }: Readonly<RevealerProps>) {
    return (
        <div className="revealer-container">
            <h3 className="title">{title}</h3>
            <div className=""></div>
        </div>
    )
}
