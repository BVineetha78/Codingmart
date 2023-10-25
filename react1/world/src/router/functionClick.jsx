function FunctionClick() {
    function clickHandler(){
        console.log('button clcicked');
    }
  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  );
}
export default FunctionClick;
