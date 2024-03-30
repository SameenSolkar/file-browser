import File from "./File";
import Folder from "./Folder";
import { useLocation } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';

type filesType = {
    files:{}
}

function Directory(props:filesType) {

    const location = useLocation()
    const { state } = location;

    let subDirectories:any;
    let subDirectoriesList: string[];

    if (Object.keys(props.files).length === 0) {

        subDirectories = state;
        subDirectoriesList = Object.keys(subDirectories);
    }
    else {

        subDirectories = props.files;
        subDirectoriesList = Object.keys(subDirectories);
    }


    return (

        <div className="browser h-4/5 w-4/5 bg-white border-4 border-slate-300">

            <div className="dir-container h-screen flex-column">

                <Breadcrumb/>
                    
                {
                    
                    subDirectoriesList.length > 0?
                    subDirectoriesList.map((subDirectory: string,index:number) => {

                        if (subDirectories[subDirectory].type === 'folder') {

                            return (

                                <Folder key={index} folderName={subDirectory}
                                    subDir={subDirectories[subDirectory].children} />
                            )
                        }
                        return (

                            <File  key={index} fileName={subDirectory}
                                fileDetails={subDirectories[subDirectory].size} />
                        )
                    })
                    :
                    <div className="flex justify-center mt-6">
                        <p className="text-slate-600">Folder is empty</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Directory;