

const InputField = () => {
  return (
    <>
        <form className='input'>
            <input type='input' placeholder='Add a task' className='input__box'/>
            <button className='input__submit' type='submit'>
                Add
            </button>
        </form>
    </>
  )
}

export default InputField