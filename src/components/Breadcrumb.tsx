import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation, useNavigate } from 'react-router-dom';

let tempUrlList:string[] = [];

function Breadcrumb() {
    
    const location = useLocation()
    const navigate = useNavigate();

    tempUrlList.push(location.pathname.slice(1));

    if(location.pathname.slice(1) === 'home'){

        while(tempUrlList.length > 1){

            tempUrlList.pop()
        }
    }
    
    function handleClick(index:number){

        navigate('/home');
        
    }

    return (
        <div className="my-4 mx-4">

            <Breadcrumbs>
                {
                    tempUrlList.map((url: string, index: number) => {
                        return (<div className='hover:cursor-pointer' key={index} onClick={() => handleClick(index)}>{url}</div>)
                    })
                }
            </Breadcrumbs>
        </div>
    )
}

export default Breadcrumb;