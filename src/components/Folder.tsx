import {useNavigate,useLocation} from 'react-router-dom'

type propsType = {
    folderName:string
    subDir:{}
}

function Folder(props:propsType){

    const navigate = useNavigate();
    const subDir = props.subDir;

    function handleClick(){
        
        navigate(`/${props.folderName}`, { state: subDir})
    }

    return (
        <div className="folder-container 
        flex justify-between
        bg-yellow-100
        cursor-pointer
        border-yellow-300 border-2 rounded-md 
        mx-6 my-4 px-4 py-4"
            onClick={handleClick}>
            <p>{props.folderName}</p>
            <p>folder</p>
        </div>
    )
}

export default Folder;