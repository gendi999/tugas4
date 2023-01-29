// global array
let blogs = []

// function get data from input text html
function getData(e) {
    e.preventDefault()

    // delaclaration variable dom selection
    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let star = new Date(document.getElementById('input-blog-star').value)
    let akhir = new Date(document.getElementById('input-blog-akhir').value)
    let checkbox1 = document.getElementById('checkbox1').checked
    let checkbox2 = document.getElementById('checkbox2').checked
    let checkbox3 = document.getElementById('checkbox3').checked
    let checkbox4 = document.getElementById('checkbox4').checked
    let image = document.getElementById('input-blog-image').files


    // Convert spesific image to blob object
    image = URL.createObjectURL(image[0])

    let dataBlog = {
        title,
        content,
        star,
        akhir,
        checkbox1,
        checkbox2,
        checkbox3,
        checkbox4,
        image,
        
    }


    document.getElementById("checkbox1").addEventListener("change", function() {
        if(this.checked) {
            let icon = document.createElement("i");
            icon.classList.add("fa", "fa-node");
            document.getElementById("blog-cheksbox").appendChild(icon);
        } else {
            document.getElementById("blog-cheksbox").innerHTML = "";
        }
    });
    
    document.getElementById("checkbox2").addEventListener("change", function() {
        if(this.checked) {
            let icon = document.createElement("i");
            icon.classList.add("fa", "fa-react");
            document.getElementById("blog-cheksbox").appendChild(icon);
        } else {
            document.getElementById("blog-cheksbox").innerHTML = "";
        }
    });

    document.getElementById("checkbox3").addEventListener("change", function() {
        if(this.checked) {
            let icon = document.createElement("i");
            icon.classList.add("fa", "fa-node-js");
            document.getElementById("blog-cheksbox").appendChild(icon);
        } else {
            document.getElementById("blog-cheksbox").innerHTML = "";
        }
    });
    
    document.getElementById("checkbox4").addEventListener("change", function() {
        if(this.checked) {
            let icon = document.createElement("i");
            icon.classList.add("fa", "fa-js");
            document.getElementById("blog-cheksbox").appendChild(icon);
        } else {
            document.getElementById("blog-cheksbox").innerHTML = "";
        }
    });
                
    

    blogs.push(dataBlog)
    console.log(blogs)
    showData()

}

// declaration function show list preview data blog
function showData(){
    document.getElementById("contents").innerHTML = ""
    for(let i=0; i<= blogs.length; i++){
        document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${blogs[i].image}" alt="" />
            </div>
            <br>
            <div class="blog-content">
            <h1>
                <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
            </h1>
            <div class="blog-date">
            ${blogs[i].star.toLocaleDateString()} | ${blogs[i].akhir.toLocaleDateString()}
            </div>

            <p>${blogs[i].content}</p>
            <div class="blog-cheksbox">
                ${ blogs[i].checkbox1 ? '<i class="fab fa-node icon-custom"></i>' : ''}
                ${ blogs[i].checkbox2 ? '<i class="fab fa-react icon-custom"></i>' : ''}
                ${ blogs[i].checkbox3 ? '<i class="fab fa-node-js icon-custom"></i>' : ''}
                ${ blogs[i].checkbox4 ? '<i class="fab fa-js icon-custom"></i>' : ''}
                     
            </div>
          <br>
        <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
        </div>
            </div>
            
        </div>
        `
    }
}
