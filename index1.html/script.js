

let videoBtn= document.querySelectorAll('.vid-btn');
formClose.addEventListener('click',() =>{
document.querySelector('.controls .active').classList.remove('active');
btn.classList.add('active');
let src = btn.getAttribute('data-src');
document.querySelector('#video-slicer').src =src
});
const button = document.querySelector("button");
	button.addEventListener("click", updateName);

	function updateName() {
		const name = prompt("Enter new details");
		button.textContent = `Booked: ${name}`;
		}
        const sliderImgs = ["welcome kenya.jpeg", "views.jpeg",
"sunsets.jpeg", "beach.jpeg",
"beauty.jpeg", "cuties.jpeg"];
let sliderImage = document.querySelector('.background-image');
let sliderGrids = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000);

const changeSliderImage = () => {
    sliderGrids.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');

            setTimeout(() => {

                if(index == sliderGrids.length - 1){
                    if(currentImage >= sliderImgs.length - 1){
                        currentImage = 0;
                    } else{
                        currentImage++;
                    }

                    sliderImage.src = `img/${sliderImgs[currentImage]}`;

                    sliderGrids.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide')
                        }, i * 100);
                    })

                }

            }, 100);

        }, index * 100);
    })
}