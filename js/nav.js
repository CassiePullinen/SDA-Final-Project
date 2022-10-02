//create nav function

const createNav = () => {
 let nav = document.querySelector('.navbar'); // select nav element using query selector method   
// write its' inner HTML - copy from navbar in index.html

nav.innerHTML = `
<div class= "nav">
        <img src="2.png" class="logo" alt="">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
                <button class="search-button"> search</button>

            </div>
            <a href="#"><img src="user.png" alt=""></a>
            <a href="#"><img src="cart.png" alt=""></a>

        </div>

    </div>
<ul class="links-container" >
    <li class="link-item"><a href="#" class="link">home</a>/li>
    <li class="link-item"><a href="#" class="link">necklaces</a>/li>
    <li class="link-item"><a href="#" class="link">rings</a>/li>
    <li class="link-item"><a href="#" class="link">earrings</a>/li>
    <li class="link-item"><a href="#" class="link">bracelets</a>/li

</ul>
`;

}

createNav();

