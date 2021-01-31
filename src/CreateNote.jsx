import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [expand, setexpand] = useState(false);
    const [note, setnote] = useState({
        title: '',
        content: '',
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setnote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            };
        });
    };
    const addEvent=()=>{
        props.passNote(note);
        setnote({
            title:'',
            content:'',
        });
    };
    const expandIt=()=>{
        setexpand(true);
    }
    const backton=()=>{
        setexpand(false);
    }
    return (
        <>
            <div className='main_note' onDoubleClick={backton}>
                <form>
                {expand?
                    <input type='text' name='title' value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off' /> : null}
                    <textarea onClick={expandIt} rows='' column='' name='content' value={note.content} onChange={InputEvent} placeholder="Write a Notes..." />
                    <Button id='btn_add' onClick={addEvent}>
                        <AddIcon className='plus_sign' />
                    </Button>
                </form>
            </div>
        </>
    );
};
export default CreateNote;