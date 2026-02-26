let productBody=document.getElementById("product-body");
      async function productfetch() {
        try {
          const res = await fetch("https://fakestoreapi.com/products", {
            method: "GET",
          });
          if (!res.ok) {
            throw new Error(await res.text());
          }
          const responseData = await res.json();
          const tableData= responseData.map(function(product){
             return `<tr>
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.price}e</td>
        <td>${product.description}</td>
        <td>${product.category}y</td>
        <td><img src="${product.image}"></td>
        <td>${product.rating.rate}${product.rating.count}</td>
      </tr>`
          }) ;
          console.log(responseData);
          productBody.innerHTML = tableData.join("");
        } catch (error) {
          console.log("fetch error", error);
        }
      }

      productfetch();