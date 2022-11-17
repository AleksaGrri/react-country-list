import { BadgeLabel, Color } from "../../types"

interface IProps {
    color: Color,
    badgelabel: BadgeLabel,
    value: number,
}

export const Badge = ({ color, badgelabel, value }: IProps) => {
    return (<div className={`badge bg-${color}`}>
        {`${badgelabel}: ${value}`}
    </div>)
}
