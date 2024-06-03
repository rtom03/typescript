export type Name = {
    name:{
        firstName:string;
        lastName:string;
    },
}
 export type NameRole = {
    nameRole:{
        firstName:string;
        lastName:string;
    }[]
}

export type PersonProps = {
    name:Name[];
    nameRole:NameRole[]
}