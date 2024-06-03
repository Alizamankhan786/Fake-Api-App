// console.log(`hello world`);


const div = document.querySelector(`div`);


// const arr = [];

axios("https://fakestoreapi.com/products")

.then((res)=>{
    console.log(res.data);
    res.data.map((item)=>{
        div.innerHTML = `

        <div class = "card" style = "width:15rem;">
        <h4>Category: ${item.category}</h4>
        <img class="card-img-top" width = "200px" height="200px" src=" ${item.image}" alt="images">
        <div class = "card-body">
        <h4 class = "mt-4">Title: ${item.title}  </h4>
        <h5 class = "">Price: ${item.price} </h5>
        <button class = "btn  btn-primary">Order Now</button>
        </div>
        </div>
        
        `
    })
})
.catch((err)=>{
    console.log(err);
})