function Children(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler('children')}> greetparent</button>
    </div>
  );
}
export default Children;
