import { useRef, useEffect } from "react"
import clock from './jsclock'

type clockSet = {
    title: string
}

const ZoneClock: React.FC<clockSet> = ({ title }) => {


    const clockRef = useRef(null)

    useEffect(() => {
        clock(clockRef.current, title)
      }, [])
  
    return (
      <>
      <div className="title">{title}</div>
        <div className="container" ref={clockRef}>
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
        </div>
      </>
    )
}

export default ZoneClock