function getData() {

    const DataURL = 'https://raw.githubusercontent.com/six6na/brBROWN/main/data.json';
    fetch(DataURL)
        .then(function (res) {
            return res.json();
        })
        .then(function (obj) {

            showProducts(obj);
            console.log(obj);
        });
}

function showProducts(obj) {

    const query = location.search;
    console.log(query);

    let params = new URLSearchParams(query).get('category');

    if (params == null || params == 'all') {
        params = null;
    }
    console.log(params);

    obj.forEach(function (product, i) {

        let category = product.category;
        let name = product.name;
        let image = product.image;
        console.log(category);
        let html = `
        <a href="#" class="product">
        <div class="productImg">
        <img src="${image}" alt="${name}">
        </div>
        <div class="bgImg">
            <img src="../images/cone.png" alt="">
        </div>
        <p class="name">${name}</p>
        </a>
      `

        if (params == product.category) {
            $('main #products').append(html);
        }

        if (params == null) {
            $('main #products').append(html);
            console.log(`i = `, i)
        }

    });

    $(document).ready(function(){
        $(".menuBtn a").click(function(){
            $(this).addClass("on").siblings().removeClass("on");
        })
    })

}

$(function () {
    getData();
});

