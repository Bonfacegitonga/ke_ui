import { courses } from "../utils/data"
import { useState } from "react"




export default function Example(props) {
    return (

        <li key={props.name} className="flex justify-between hover:bg-slate-700 gap-x-4 py-3">
            <div className="flex gap-x-4">
                <div className="min-w-0 mx-5  flex-auto">
                    <p className="text-sm font-semibold leading-6 text-white">{props.name}</p>
                    <p className="mt-1  text-xs leading-5 text-gray-300">{props.description}</p>
                </div>
            </div>
        </li>


    )
}
