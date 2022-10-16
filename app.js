const search = () => {
    const search_box = document.getElementById("search-item").value.toUpperCase();

    const store_Items = document.getElementById("product_list");
    const products = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h3");

    for (var i = 0; i < pname.length; i++) {
        let match = products[i].getElementsByTagName("h3")[0];  
        
        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(search_box) > -1) {
                products[i].style.display = "";
            }
            else{
                products[i].style.display = "none";
            }
        }
    }
}