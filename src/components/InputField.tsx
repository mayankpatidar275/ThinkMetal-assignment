import { useRef } from "react";
import toast from "react-hot-toast";
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
        <form className='input' onSubmit={
            (e)=>{
                handleAdd(e);
                toast.success('Successfully added!')
                inputRef.current?.blur();
            }
        }>
            
            <input
                type="text"
                placeholder="Enter a Task"
                value={todo}
                ref={inputRef}
                required
                onChange={(e) => setTodo(e.target.value)}
                className="input__box"
            />
            <button className='input_submit' type='submit'>
                Add
            </button>
        </form>
    </>
  )
}

export default InputField