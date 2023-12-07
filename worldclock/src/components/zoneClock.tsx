import { useRef, useEffect } from "react"
import clock from './jsclock'

type clockSet = {
    zone: string,
    title: string,
    removeFunc: (zone: string) => void
}

const ZoneClock: React.FC<clockSet> = ({ zone, title, removeFunc }) => {


    const clockRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        clock(clockRef.current, zone)
    }, [])

    const handleDelete = () => {
        if (clockRef.current) {
            removeFunc(zone)
        }
    }


    return (
        <div className="container" ref={clockRef}>
            <div className="title">{title}</div>
            <div className="row">
                <div className="col-md-4 col-md-offset-4 text-center">
                    <div className="clock">
                        <div className="dot"></div>
                        <div className="spire hour"></div>
                        <div className="spire min"></div>
                        <div className="spire sec"></div>
                    </div>
                    <div className="digit">00:00</div>
                </div>
            </div>
            <div className="title">
                <button onClick={handleDelete}>Удалить</button>
            </div>
        </div>
    )
}

export default ZoneClock