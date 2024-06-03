'use client'

import { Name, NameRole, PersonProps } from "../lib/index.types"

type PersonListProps = {
    name:Name;
    nameRole:NameRole[];
}
export const Person = ({name,nameRole}:PersonListProps) => {
   return(
    <div>
        {name.firstName}
        {name.lastName}
        {nameRole.map((items) => (
            <div>
                {items.firstName}
                {items.lastName}
            </div>
        ))}
    </div>
   )
}