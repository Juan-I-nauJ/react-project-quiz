import { useEffect, useState } from "react"

export default function ProgressBar({ timer }) {

    const [remainingTime, setRemainingTime] = useState(timer)
    useEffect(() => {
        setRemainingTime(timer)
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100)
        }, 100)

        return () => clearInterval(interval)
    }, [timer])


    return <progress max={timer} value={remainingTime} />
}