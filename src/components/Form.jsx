const Form = ({input, setInput, handleSubmit}) => {
  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="Search a Github User"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};
export default Form;
