const persons=[
    {name:"vineetha",isName:true,id:22},
    {name:"vinee", isName:false,id:23},
    {name:"vini", isName:true,id:24},
];
function ShoppingList(){
    const listItems = persons.map(person=>
        <li
        key={person.id}
        style={{
            color:person.isName?'hotpink':'blue'
                }}
                >
            {person.name}
                </li>
                        );
                        return(
                            <ul>{listItems}</ul>
                        )
}
export default ShoppingList;