import './Revealer.css' // DEV AP: Validate how to ouput them at file scope

interface RevealerProps {
    title: string
    color: string
}

export function Revealer({ title }: Readonly<RevealerProps>) {
    return (
        <div className="container centered-row">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="background"></div>
        </div>
    )
}
