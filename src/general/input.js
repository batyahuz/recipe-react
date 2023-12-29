const Input = ({ name, register, errors, label }) => {
    return <>
        <label>{label}</label>
        <input {...register(name)} />
        <p>{errors[name]?.message}</p>
    </>
}
export default Input;