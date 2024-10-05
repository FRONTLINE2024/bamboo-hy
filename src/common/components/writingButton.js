import writingImg from '../assets/img-writing-button.png';

function writingButton() {
    const container = document.createElement('button');
    const movePage = () => {
        window.navigate('/post');
    }
    
    container.innerHTML = `
        <div class='writing-button'>
            <img src='${writingImg}' alt='버튼'/>
            <p>제보하기</p>
        </div>
    `;

    document.addEventListener('click', (event) => {
        if (event.target.closest('.writing-button')) {
            movePage();
        }
    });

    return container.innerHTML; 
}

export default writingButton;