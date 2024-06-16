import React, {ReactNode} from "react";
import Header from "../../header/Header";

interface LayoutProps {
    children: ReactNode;
}

const WithHeader:React.FC<LayoutProps> = ({children}) => {
    return(
        <>
            <Header/>
            {children}
        </>
    )
}

export default WithHeader;