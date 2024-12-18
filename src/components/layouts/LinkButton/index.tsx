import React from "react"
import { Link } from "react-router-dom"

import { LinkButtonProps } from "../../../types/props"

import './LinkButton.scss'

export const LinkButton:React.FC<LinkButtonProps> = ({text, path}) => {
    return <Link to={path} className="LinkButton text-slate-50 px-6 py-2 rounded-lg" >{text}</Link>
}