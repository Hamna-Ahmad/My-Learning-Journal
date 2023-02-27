const viewBtn = document.getElementById("view-more");
const viewLessBtn = document.getElementById("view-less")
const viewLessDiv = document.querySelector(".view-less");
const posts = document.querySelector(".blog-posts");

viewBtn.addEventListener('click', function(){
    posts.innerHTML += renderMore();
    viewBtn.style.display = "none";
    viewLessDiv.style.display = "flex";

})

function renderMore(){
    const morePosts = 
    `
    <!-- Blog 4 -->
                <section class="blog-post">
                    <img src="images/blog-4.jpeg" alt="multiple devies displayed with analytical screens">
                    <h3>JULY 23, 2022</h3>
                    <h2>Blog four</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </section>

   <!-- Blog 5 -->
                <section class="blog-post">
                    <img src="https://cuanticmarketing.com/wp-content/uploads/2022/11/cyberattack-impacts-unemployment-benefits-in-several-states-engadget-1542605198950125571.webp" alt="hands typing on a kepyboard">
                    <h3>JULY 23, 2022</h3>
                    <h2>Blog five</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </section>

     <!-- Blog 6 -->
                <section class="blog-post">
                    <img src="https://www.corewebprogramming.com/wp-content/uploads/2022/04/software.jpg" alt="Man sitting infrom on a computer coding">
                    <h3>JULY 23, 2022</h3>
                    <h2>Blog six</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </section>
    `
    ; 
    return morePosts;
}

function renderLess(){
    const blog = 
    `
    <!-- Blog 1 -->
            <section class="blog-post">
                <img src="images/blog-1.jpeg" alt="Graphic of man siting on top on a laptop whilst coding on his laptop">
                <h3>JULY 23, 2022</h3>
                <h2>Blog one</h2>
                <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </section>

    <!-- Blog 2 -->
            <section class="blog-post">
                <img src="https://www.bhmpics.com/downloads/Light-Bulb-Wallpapers-(30-+-Background-Pictures)/76.943629275.jpg" alt="colourful lightbulb">
                <h3>JULY 23, 2022</h3>
                <h2>Blog two</h2>
                <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </section>

    <!-- Blog 3 -->
            <section class="blog-post">
                <img src="images/blog-3.jpeg" alt="Graphic of man siting on top on a laptop whilst coding on his laptop">
                <h3>JULY 23, 2022</h3>
                <h2>Blog three</h2>
                <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </section>
    `
    return posts.innerHTML = blog;
}

renderLess();

viewLessBtn.addEventListener('click', function(){
    renderLess();
    viewBtn.style.display= "flex";
    // viewLessBtn.style.display="none";
    viewLessDiv.style.display = "none";

})