
    export  default function Input (props){
        let { placeholder, type, className} = props
        return(
            <input
                placeholder={placeholder}
                type={type}
                className={className}
            />
        )
    }