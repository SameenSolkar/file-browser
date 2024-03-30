type propsType = {

    fileName:String,
    fileDetails:string
}

function File(props:propsType){

    function handleClick(){

        console.log('clicked file')
    }
    return (
        <div className="file-container 
        bg-slate-100
        border-slate-300 border-2 rounded-md 
        flex justify-between
        mx-6 my-4 px-4 py-4"
            onClick={handleClick}>

            <h4>{props.fileName}</h4>                
            <p>{props.fileDetails}</p>
        </div>
    )
}
export default File;