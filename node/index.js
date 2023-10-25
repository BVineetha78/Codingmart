function func() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            console.log(typeof response )
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

func();


